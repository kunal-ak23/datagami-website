import { BlobServiceClient } from '@azure/storage-blob'

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING!

function getBlobServiceClient() {
  return BlobServiceClient.fromConnectionString(connectionString)
}

export type ContainerName = 'blog-images' | 'gallery' | 'testimonials' | 'og-images'

export async function uploadToAzure(
  file: Buffer,
  fileName: string,
  container: ContainerName,
  contentType: string
): Promise<string> {
  const blobServiceClient = getBlobServiceClient()
  const containerClient = blobServiceClient.getContainerClient(container)
  const blobName = `${crypto.randomUUID()}-${fileName}`
  const blockBlobClient = containerClient.getBlockBlobClient(blobName)

  await blockBlobClient.upload(file, file.length, {
    blobHTTPHeaders: { blobContentType: contentType },
  })

  return blockBlobClient.url
}

export async function deleteFromAzure(blobUrl: string): Promise<void> {
  const blobServiceClient = getBlobServiceClient()
  const url = new URL(blobUrl)
  const pathParts = url.pathname.split('/').filter(Boolean)
  const containerName = pathParts[0]
  const blobName = pathParts.slice(1).join('/')

  const containerClient = blobServiceClient.getContainerClient(containerName)
  const blockBlobClient = containerClient.getBlockBlobClient(blobName)
  await blockBlobClient.deleteIfExists()
}
