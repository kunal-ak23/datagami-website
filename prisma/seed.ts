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

  // ──────────────────────────────────────────────
  // 1. Admin user
  // ──────────────────────────────────────────────
  const hashedPassword = await bcrypt.hash('admin123', 12)

  const userResult = await client.query(
    `INSERT INTO users (id, name, email, password, role, created_at, updated_at)
     VALUES (gen_random_uuid(), $1, $2, $3, $4, NOW(), NOW())
     ON CONFLICT (email) DO UPDATE SET updated_at = NOW()
     RETURNING id, email`,
    ['Admin', 'admin@datagami.in', hashedPassword, 'ADMIN']
  )

  const adminId = userResult.rows[0].id
  console.log('Admin user:', userResult.rows[0].email)

  // ──────────────────────────────────────────────
  // 2. Blog posts
  // ──────────────────────────────────────────────
  const blogPosts = [
    {
      title: 'The Future of EdTech in India',
      slug: 'future-of-edtech-in-india',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Education technology is rapidly transforming how institutions deliver learning across India. From AI-powered adaptive learning platforms to cloud-based virtual classrooms, the landscape is evolving at unprecedented speed.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'The Rise of Digital-First Curricula' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Universities and colleges across India are embracing digital-first approaches to curriculum design. This shift goes beyond simply digitizing existing materials — it involves rethinking how knowledge is structured, delivered, and assessed in an increasingly connected world.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'AI in the Classroom' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Artificial intelligence is no longer a futuristic concept in education — it is here today. From intelligent tutoring systems that adapt to individual learning styles to automated assessment tools that provide instant feedback, AI is enabling personalized learning at scale.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'What Institutions Need to Do' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'To stay competitive, institutions must invest in robust technology infrastructure, upskill their faculty on digital tools, and forge strategic partnerships with EdTech companies that understand the Indian education ecosystem. The time to act is now.' }] },
        ],
      }),
      excerpt: 'Exploring how AI and digital tools are reshaping education delivery in Indian universities.',
      category: 'Technology',
      featured_image: '/images/blog/future-edtech.png',
      status: 'PUBLISHED',
      published_at: '2026-03-15T00:00:00Z',
      meta_title: 'The Future of EdTech in India',
      meta_description: 'How AI, digital tools, and innovative platforms are transforming education in Indian universities and institutions.',
      keywords: ['edtech', 'education technology', 'AI in education', 'India'],
      schema_type: 'Article',
    },
    {
      title: 'How UPI is Transforming Financial Literacy',
      slug: 'upi-transforming-financial-literacy',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'The Unified Payments Interface (UPI) revolution is not just about enabling seamless digital payments — it is creating an unprecedented opportunity to build financial literacy from the ground up across India.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Beyond Payments' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'UPI has brought millions of previously unbanked individuals into the formal financial system. This mass adoption opens the door to teaching fundamental financial concepts — savings, investment, credit management — through the very platforms people use daily.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'The FinLEARN Approach' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Our FinLEARN program leverages this digital-first financial ecosystem to deliver practical, hands-on financial education. Students do not just learn theory — they interact with real-world payment systems, understand transaction flows, and develop skills directly applicable to the fintech industry.' }] },
        ],
      }),
      excerpt: 'The UPI revolution is creating an unprecedented opportunity to build financial literacy from the ground up.',
      category: 'Finance',
      featured_image: '/images/blog/upi-fintech.png',
      status: 'PUBLISHED',
      published_at: '2026-02-28T00:00:00Z',
      meta_title: 'How UPI is Transforming Financial Literacy',
      meta_description: 'The UPI revolution is creating unprecedented opportunities to build financial literacy in India.',
      keywords: ['UPI', 'financial literacy', 'fintech', 'digital payments'],
      schema_type: 'Article',
    },
    {
      title: 'Building Industry-Ready Graduates',
      slug: 'building-industry-ready-graduates',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'The gap between what universities teach and what employers need continues to widen. Universities that align their curricula with employer expectations see dramatically better placement rates — but achieving this alignment requires a strategic, partnership-driven approach.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'The Employability Challenge' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Industry surveys consistently show that a significant percentage of graduates lack the practical skills employers require. This is not a reflection of student capability — it is a systemic issue with how curricula are designed and delivered.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'A Partnership-Driven Solution' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'At Datagami, we work with universities to co-create curricula that blend academic rigor with industry relevance. Our programs include live projects, industry mentorship, and certification pathways that give graduates a tangible competitive edge in the job market.' }] },
        ],
      }),
      excerpt: 'Universities that align curricula with employer expectations see dramatically better placement rates.',
      category: 'Education',
      featured_image: '/images/blog/career-readiness.png',
      status: 'PUBLISHED',
      published_at: '2026-02-15T00:00:00Z',
      meta_title: 'Building Industry-Ready Graduates',
      meta_description: 'How universities can align curricula with employer expectations to improve graduate placement rates.',
      keywords: ['employability', 'industry-ready', 'higher education', 'career readiness'],
      schema_type: 'Article',
    },
    {
      title: 'Cloud Computing Career Paths in 2026',
      slug: 'cloud-computing-career-paths-2026',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Cloud computing continues to be one of the fastest-growing technology domains. From cloud architect to DevOps engineer, the career opportunities are vast — but navigating them requires understanding which certifications and skills truly matter in 2026.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Top Cloud Roles in Demand' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Cloud Solution Architects, DevOps Engineers, Cloud Security Specialists, and Data Engineers consistently rank among the most sought-after roles. Organizations across India are scaling their cloud infrastructure, creating sustained demand for qualified professionals.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Certifications That Matter' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'AWS Solutions Architect, Microsoft Azure Administrator, and Google Cloud Professional certifications remain the gold standard. Our TechLEARN program prepares students for these certifications with hands-on labs and exam preparation modules.' }] },
        ],
      }),
      excerpt: 'From cloud architect to DevOps engineer — the most in-demand cloud roles and the certifications that matter.',
      category: 'Careers',
      featured_image: '/images/blog/cloud-computing-careers.png',
      status: 'PUBLISHED',
      published_at: '2026-01-30T00:00:00Z',
      meta_title: 'Cloud Computing Career Paths in 2026',
      meta_description: 'The most in-demand cloud computing roles and certifications for 2026.',
      keywords: ['cloud computing', 'careers', 'AWS', 'Azure', 'certifications'],
      schema_type: 'Article',
    },
    {
      title: 'Why LMS Adoption Fails (And How to Fix It)',
      slug: 'why-lms-adoption-fails',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Most learning management system rollouts fall short of expectations. Despite significant investment, institutions often find that faculty adoption is low, student engagement is poor, and the promised efficiencies fail to materialize.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'The Five Root Causes' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Through our work with over 50 partner universities, we have identified five consistent factors that derail LMS adoption: inadequate faculty training, poor content migration planning, lack of institutional champions, misaligned expectations, and choosing the wrong platform for the institution\'s needs.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Proven Strategies for Success' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Successful LMS deployments share common traits: phased rollout with early wins, dedicated faculty champions, continuous training support, and clear metrics for measuring adoption. Our consulting services guide institutions through each of these critical steps.' }] },
        ],
      }),
      excerpt: 'Most learning management system rollouts fall short. We break down the five root causes and proven strategies for successful adoption.',
      category: 'Technology',
      featured_image: null,
      status: 'PUBLISHED',
      published_at: '2026-01-18T00:00:00Z',
      meta_title: 'Why LMS Adoption Fails (And How to Fix It)',
      meta_description: 'The five root causes of LMS adoption failure and proven strategies for successful implementation.',
      keywords: ['LMS', 'learning management system', 'EdTech adoption', 'higher education'],
      schema_type: 'Article',
    },
  ]

  for (const post of blogPosts) {
    await client.query(
      `INSERT INTO blog_posts (id, title, slug, content, excerpt, category, featured_image, author_id, status, published_at, meta_title, meta_description, keywords, schema_type, created_at, updated_at)
       VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), NOW())
       ON CONFLICT (slug) DO NOTHING`,
      [
        post.title,
        post.slug,
        post.content,
        post.excerpt,
        post.category,
        post.featured_image,
        adminId,
        post.status,
        post.published_at,
        post.meta_title,
        post.meta_description,
        post.keywords,
        post.schema_type,
      ]
    )
  }
  console.log(`Seeded ${blogPosts.length} blog posts`)

  // ──────────────────────────────────────────────
  // 3. Gallery items
  // ──────────────────────────────────────────────
  const galleryItems = [
    { title: 'Annual Tech Summit 2025', category: 'Events', media_type: 'IMAGE', media_url: '/images/gallery/event-conference.png', alt_text: 'Annual tech summit event', sort_order: 1 },
    { title: 'Mumbai Office Campus', category: 'Campus', media_type: 'IMAGE', media_url: '/images/gallery/campus-building.png', alt_text: 'Mumbai office campus building', sort_order: 2 },
    { title: 'FinLEARN Workshop Session', category: 'Workshops', media_type: 'IMAGE', media_url: '/images/gallery/workshop-coding.png', alt_text: 'FinLEARN workshop coding session', sort_order: 3 },
    { title: 'Industry Partner Meet', category: 'Events', media_type: 'IMAGE', media_url: '/images/gallery/event-guest-lecture.png', alt_text: 'Industry partner meet event', sort_order: 4 },
    { title: 'Bengaluru Campus Tour', category: 'Campus', media_type: 'IMAGE', media_url: '/images/gallery/campus-courtyard.png', alt_text: 'Bengaluru campus courtyard', sort_order: 5 },
    { title: 'TechLEARN Hands-on Lab', category: 'Workshops', media_type: 'IMAGE', media_url: '/images/gallery/workshop-electronics.png', alt_text: 'TechLEARN hands-on electronics lab', sort_order: 6 },
    { title: 'Graduation Ceremony 2025', category: 'Events', media_type: 'IMAGE', media_url: '/images/gallery/event-graduation.png', alt_text: 'Graduation ceremony 2025', sort_order: 7 },
    { title: 'Student Common Area', category: 'Campus', media_type: 'IMAGE', media_url: '/images/gallery/campus-library.png', alt_text: 'Student common area and library', sort_order: 8 },
    { title: 'Cloud Computing Bootcamp', category: 'Workshops', media_type: 'IMAGE', media_url: '/images/gallery/workshop-cloud.png', alt_text: 'Cloud computing bootcamp workshop', sort_order: 9 },
    { title: 'University Partnership Signing', category: 'Events', media_type: 'IMAGE', media_url: '/images/gallery/event-hackathon.png', alt_text: 'University partnership signing event', sort_order: 10 },
    { title: 'Training Lab Setup', category: 'Campus', media_type: 'IMAGE', media_url: '/images/gallery/campus-computer-lab.png', alt_text: 'Training lab computer setup', sort_order: 11 },
    { title: 'IBM ICE Badge Ceremony', category: 'Workshops', media_type: 'IMAGE', media_url: '/images/gallery/workshop-training.png', alt_text: 'IBM ICE badge ceremony workshop', sort_order: 12 },
  ]

  for (const item of galleryItems) {
    await client.query(
      `INSERT INTO gallery_items (id, title, category, media_type, media_url, alt_text, sort_order, created_at, updated_at)
       VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, NOW(), NOW())
       ON CONFLICT DO NOTHING`,
      [item.title, item.category, item.media_type, item.media_url, item.alt_text, item.sort_order]
    )
  }
  console.log(`Seeded ${galleryItems.length} gallery items`)

  // ──────────────────────────────────────────────
  // 4. Testimonials
  // ──────────────────────────────────────────────
  const testimonials = [
    {
      student_name: 'Priya Sharma',
      program: 'FinLEARN',
      quote: 'The FinLEARN program completely transformed my understanding of banking and finance. The hands-on projects with real payment systems gave me skills that set me apart in job interviews. I landed a role at a leading fintech company within two months of completing the program.',
      rating: 5,
      is_featured: true,
    },
    {
      student_name: 'Rahul Mehta',
      program: 'TechLEARN',
      quote: 'TechLEARN gave me the cloud computing certifications and practical experience I needed to transition into a DevOps role. The instructors were industry professionals who shared real-world insights that you simply cannot get from textbooks alone.',
      rating: 5,
      is_featured: true,
    },
    {
      student_name: 'Ananya Desai',
      program: 'IBM ICE',
      quote: 'Earning my IBM ICE certification through Datagami was a game-changer for my career. The structured learning path and mentorship support made the entire process smooth. I am now working as a cloud solutions specialist at a major IT firm.',
      rating: 5,
      is_featured: true,
    },
    {
      student_name: 'Vikram Patel',
      program: 'ClinoMIC',
      quote: 'The ClinoMIC program opened doors to the clinical research industry that I did not even know existed. The curriculum was thorough, the faculty was exceptional, and the placement support helped me secure a position at a leading pharmaceutical company.',
      rating: 4,
      is_featured: true,
    },
  ]

  for (const t of testimonials) {
    await client.query(
      `INSERT INTO testimonials (id, student_name, program, quote, rating, is_featured, created_at, updated_at)
       VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, NOW(), NOW())`,
      [t.student_name, t.program, t.quote, t.rating, t.is_featured]
    )
  }
  console.log(`Seeded ${testimonials.length} testimonials`)

  await client.end()
}

main().catch(console.error)
