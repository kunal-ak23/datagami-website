import 'dotenv/config'
import bcrypt from 'bcryptjs'

/**
 * Prisma 7 with custom output generates .ts files that only work with bundlers
 * (like Next.js). For the seed script, we use raw SQL via the pg driver which
 * Prisma uses internally.
 */
import pg from 'pg'

const { Client } = pg

async function main() {
  const client = new Client({ connectionString: process.env.DATABASE_URL })
  await client.connect()

  const hashedPassword = await bcrypt.hash('admin123', 12)

  const result = await client.query(
    `INSERT INTO users (id, name, email, password, role, created_at, updated_at)
     VALUES (gen_random_uuid(), $1, $2, $3, $4, NOW(), NOW())
     ON CONFLICT (email) DO NOTHING
     RETURNING email`,
    ['Admin', 'admin@datagami.in', hashedPassword, 'ADMIN']
  )

  if (result.rowCount && result.rowCount > 0) {
    console.log('Seeded admin user:', result.rows[0].email)
  } else {
    console.log('Admin user already exists: admin@datagami.in')
  }

  await client.end()
}

main().catch(console.error)
