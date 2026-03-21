import { auth } from '@/lib/auth'
import { uploadToAzure } from '@/lib/azure-storage'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const container = formData.get('container') as string | null

  if (!file || !container) {
    return NextResponse.json({ error: 'Missing file or container' }, { status: 400 })
  }

  const validContainers = ['blog-images', 'gallery', 'testimonials', 'og-images']
  if (!validContainers.includes(container)) {
    return NextResponse.json({ error: 'Invalid container' }, { status: 400 })
  }

  // Size validation: 10MB for images, 100MB for videos
  const maxSize = file.type.startsWith('video/') ? 100 * 1024 * 1024 : 10 * 1024 * 1024
  if (file.size > maxSize) {
    return NextResponse.json({ error: 'File too large' }, { status: 400 })
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer())
    const url = await uploadToAzure(buffer, file.name, container as any, file.type)
    return NextResponse.json({ url })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
