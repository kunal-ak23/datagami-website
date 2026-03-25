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
  // 2. Blog posts (from live site)
  // ──────────────────────────────────────────────
  const blogPosts = [
    {
      title: 'Measuring Impact: Demonstrating Value in University-Industry Partnerships',
      slug: 'measuring-impact-university-industry-partnerships',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Learn how to effectively measure and communicate the tangible benefits and ROI of your university\'s industry collaborations to stakeholders. University-industry partnerships are increasingly vital for academic institutions, but demonstrating their value requires robust measurement frameworks and clear communication strategies.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Why Measuring Impact Matters' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Stakeholders — from university leadership to government funding bodies — increasingly demand evidence of partnership outcomes. Without clear metrics, even successful collaborations risk losing support and resources.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Key Metrics to Track' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Effective measurement frameworks include graduate employment rates, industry funding secured, joint research publications, student internship placements, and employer satisfaction scores. These metrics provide a comprehensive view of partnership value.' }] },
        ],
      }),
      excerpt: 'Learn how to effectively measure and communicate the tangible benefits and ROI of your university\'s industry collaborations to stakeholders.',
      category: 'Measurable Results',
      featured_image: '/images/blog/measuring-impact-partnerships.png',
      status: 'PUBLISHED',
      published_at: '2024-05-05T00:00:00Z',
      meta_title: 'Measuring Impact: University-Industry Partnerships',
      meta_description: 'Learn how to effectively measure and communicate the tangible benefits and ROI of university-industry partnerships.',
      keywords: ['measurable results', 'university partnerships', 'ROI', 'industry collaboration'],
      schema_type: 'Article',
      author_name: 'David Lee',
    },
    {
      title: 'Leveraging AI in Higher Education: Ethical Considerations and Best Practices',
      slug: 'leveraging-ai-higher-education-ethics',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Artificial Intelligence offers transformative potential for education. This article explores the ethical challenges and best practices for its responsible implementation in universities.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'The Promise and the Peril' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'AI can personalize learning, automate administrative tasks, and provide predictive analytics for student success. However, institutions must carefully consider data privacy, algorithmic bias, and the impact on academic integrity.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Best Practices for Responsible AI Adoption' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Establish clear AI governance policies, ensure transparency in AI-driven decisions, invest in faculty training, and maintain human oversight of critical academic processes. These practices build trust while leveraging AI\'s transformative capabilities.' }] },
        ],
      }),
      excerpt: 'Artificial Intelligence offers transformative potential for education. Explore the ethical challenges and best practices for responsible implementation.',
      category: 'Technology Solutions',
      featured_image: '/images/blog/ai-higher-education-ethics.png',
      status: 'PUBLISHED',
      published_at: '2024-04-18T00:00:00Z',
      meta_title: 'Leveraging AI in Higher Education: Ethics & Best Practices',
      meta_description: 'Explore ethical challenges and best practices for responsible AI implementation in universities.',
      keywords: ['AI', 'higher education', 'ethics', 'technology solutions'],
      schema_type: 'Article',
      author_name: 'Dr. Sarah Khan',
    },
    {
      title: 'Boosting Student Employability: The Role of Industry Collaboration',
      slug: 'boosting-student-employability-industry-collaboration',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Discover how strategic partnerships between universities and industry leaders can significantly enhance student career readiness and employment outcomes.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'The Employability Gap' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Despite rising graduation rates, many employers report difficulty finding candidates with the right skills. This gap between academic preparation and industry requirements is a systemic challenge that requires collaborative solutions.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Building Effective Partnerships' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'Successful industry-academia partnerships include co-designed curricula, mentorship programs, apprenticeships, and joint research projects. These initiatives give students real-world exposure while providing employers with a pipeline of skilled talent.' }] },
        ],
      }),
      excerpt: 'Discover how strategic partnerships between universities and industry leaders can significantly enhance student career readiness.',
      category: 'Career Readiness',
      featured_image: '/images/blog/student-employability-collaboration.png',
      status: 'PUBLISHED',
      published_at: '2024-04-01T00:00:00Z',
      meta_title: 'Boosting Student Employability Through Industry Collaboration',
      meta_description: 'How strategic university-industry partnerships enhance student career readiness and employment outcomes.',
      keywords: ['employability', 'industry collaboration', 'career readiness', 'partnerships'],
      schema_type: 'Article',
      author_name: 'Michael Chen',
    },
    {
      title: 'Navigating New Education Policies: A University\'s Guide',
      slug: 'navigating-new-education-policies',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Understanding and implementing the latest education policies can be a daunting task for universities. This post outlines key strategies for seamless integration and compliance.' }] },
          { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'The Policy Landscape' }] },
          { type: 'paragraph', content: [{ type: 'text', text: 'India\'s education policy framework is evolving rapidly. Universities must stay ahead of regulatory changes while maintaining academic quality and institutional identity.' }] },
        ],
      }),
      excerpt: 'Understanding and implementing the latest education policies. Key strategies for seamless integration and compliance.',
      category: 'Education Policy',
      featured_image: '/images/blog/education-policies-guide.png',
      status: 'PUBLISHED',
      published_at: '2024-03-15T00:00:00Z',
      meta_title: 'Navigating New Education Policies: A University\'s Guide',
      meta_description: 'Key strategies for universities to seamlessly integrate and comply with new education policies.',
      keywords: ['education policy', 'NEP', 'compliance', 'universities'],
      schema_type: 'Article',
      author_name: 'Dr. Anya Sharma',
    },
    {
      title: 'Leveraging EdTech for Transformative Learning Experiences',
      slug: 'leveraging-edtech-transformative-learning',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Educational technology offers immense potential to revolutionize teaching and learning. Learn how universities can effectively integrate EdTech for enhanced student engagement and outcomes.' }] },
        ],
      }),
      excerpt: 'Learn how universities can effectively integrate EdTech for enhanced student engagement and outcomes.',
      category: 'Educational Technology',
      featured_image: '/images/blog/edtech-transformative-learning.png',
      status: 'PUBLISHED',
      published_at: '2024-01-10T00:00:00Z',
      meta_title: 'Leveraging EdTech for Transformative Learning',
      meta_description: 'How universities can integrate educational technology for enhanced student engagement.',
      keywords: ['edtech', 'educational technology', 'digital learning'],
      schema_type: 'Article',
      author_name: 'David Lee',
    },
    {
      title: 'Enhancing Student Employability: Strategies for Higher Education',
      slug: 'enhancing-student-employability-strategies',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Preparing students for successful careers is a core mission of universities. Explore innovative strategies to boost student career readiness and outcomes.' }] },
        ],
      }),
      excerpt: 'Explore innovative strategies to boost student career readiness and outcomes in higher education.',
      category: 'Student Outcomes',
      featured_image: '/images/blog/student-employability-strategies.png',
      status: 'PUBLISHED',
      published_at: '2023-12-01T00:00:00Z',
      meta_title: 'Enhancing Student Employability in Higher Education',
      meta_description: 'Innovative strategies to boost student career readiness and outcomes.',
      keywords: ['student outcomes', 'employability', 'career readiness'],
      schema_type: 'Article',
      author_name: 'Sarah Jenkins',
    },
    {
      title: 'Bridging the Gap: Fostering Industry-Academia Partnerships',
      slug: 'bridging-gap-industry-academia-partnerships',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Effective collaboration between academia and industry is vital for innovation and student development. Discover how to build impactful partnerships that benefit all parties.' }] },
        ],
      }),
      excerpt: 'Discover how to build impactful industry-academia partnerships that benefit all parties.',
      category: 'Industry Collaboration',
      featured_image: '/images/blog/industry-academia-partnerships.png',
      status: 'PUBLISHED',
      published_at: '2023-11-15T00:00:00Z',
      meta_title: 'Fostering Industry-Academia Partnerships',
      meta_description: 'How to build impactful industry-academia partnerships for innovation and student development.',
      keywords: ['industry collaboration', 'academia', 'partnerships'],
      schema_type: 'Article',
      author_name: 'Michael Chen',
    },
    {
      title: 'Navigating New Education Policies: A Roadmap for Universities',
      slug: 'navigating-education-policies-roadmap',
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Understanding and effectively implementing new education policies is crucial for universities. This post outlines key strategies for seamless integration and compliance.' }] },
        ],
      }),
      excerpt: 'Key strategies for seamless integration and compliance with new education policies.',
      category: 'Policy Implementation',
      featured_image: '/images/blog/navigating-education-policies-roadmap.png',
      status: 'PUBLISHED',
      published_at: '2023-10-26T00:00:00Z',
      meta_title: 'Education Policy Roadmap for Universities',
      meta_description: 'Strategies for seamless integration and compliance with new education policies.',
      keywords: ['policy implementation', 'education policy', 'compliance'],
      schema_type: 'Article',
      author_name: 'Dr. Anya Sharma',
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
  // 3. Gallery items (from live site — 22 posts)
  // ──────────────────────────────────────────────
  const galleryItems = [
    { title: 'MoU Signed Between Datagami and BFSI SSC to Build Future-Ready Graduates', description: 'Datagami has signed an MoU with BFSI Sector Skill Council (BFSI SSC) to introduce apprenticeship-integrated curriculum and courses for BBA, B.Com, BA, and MBA students across universities and institutes all over India. This collaboration marks a major step towards bridging the gap between academia and industry.', category: 'Industry Collaboration', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'MoU signing between Datagami and BFSI SSC', sort_order: 1 },
    { title: 'Mrunali - Student Success Story', description: "Mrunali's Journey with the BFSI Course.", category: 'Student Testimonials', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'Mrunali student success story', sort_order: 2 },
    { title: 'Janhavi - Student Success Story', description: "Janhavi's Journey with the BFSI Course.", category: 'Student Testimonials', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'Janhavi student success story', sort_order: 3 },
    { title: 'From Learners to Bankers \u2013 BFSI Batch All Set!', description: 'Our BFSI learners have turned their training into success stories \u2014 achieving placements with reputed Banks.', category: 'Student Testimonials', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'BFSI batch placement success', sort_order: 4 },
    { title: 'Exclusive Webinar: Empowering Employability in BFSI Sector', description: 'The BFSI sector is one of India\u2019s fastest-growing industries, projected to reach USD 1.8 trillion by 2025. Through apprenticeship-embedded programs, students gain practical exposure, industry-recognized skills, and a clear edge in securing placements with top BFSI employers.', category: 'Webinar', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'BFSI employability webinar', sort_order: 5 },
    { title: 'Career Awareness Program at MGM by Dhaval Shah & IBM', description: 'A special Career Awareness Program conducted at MGM University, Sambhajinagar, in collaboration with IBM. Dhaval Shah, founder of Datagami, interacted with students, sharing insights on industry trends, future skills, AI, and career opportunities.', category: 'Student Events', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'Career awareness program at MGM University', sort_order: 6 },
    { title: 'Datagami at Bharati Vidyapeeth Deemed University', description: 'Engaging student session on the IBM ICE Program \u2013 empowering future innovators with industry-ready skills.', category: 'Student Events', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'Student session at Bharati Vidyapeeth', sort_order: 7 },
    { title: 'IBM ICE Partnership with Bharati Vidyapeeth Pune', description: 'IBM ICE has officially partnered with Bharati Vidyapeeth Pune (Deemed to be University) to roll out cutting-edge, industry-aligned programs in AI/ML and Data Science.', category: 'University Collaboration', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'IBM ICE partnership with Bharati Vidyapeeth', sort_order: 8 },
    { title: 'Get Future-Ready with IBM', description: 'A glimpse into the journey of a B.Tech CS in AI & ML student from IBM. Real-world learning, industry exposure, and future-ready skills.', category: 'Student Testimonials', media_type: 'IMAGE', media_url: '/images/logo/datagami-logo.webp', alt_text: 'IBM future-ready student journey', sort_order: 9 },
    { title: 'IBM ICE Partnership with Swaminarayan University', description: 'IBM ICE academia partnership with Swaminarayan University.', category: 'University Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/ibm-ice-swaminarayan.jpg', alt_text: 'IBM ICE partnership with Swaminarayan University', sort_order: 10 },
    { title: 'IBM ICE Partnership with Medicaps University', description: 'IBM ICE academia partnership with Medicaps University, Indore.', category: 'University Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/ibm-ice-medicaps.jpg', alt_text: 'IBM ICE partnership with Medicaps University', sort_order: 11 },
    { title: 'IBM ICE Partnership with Gurunanak University', description: 'IBM ICE academia partnership with Gurunanak University, Hyderabad.', category: 'University Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/ibm-ice-gurunanak.jpg', alt_text: 'IBM ICE partnership with Gurunanak University', sort_order: 12 },
    { title: 'Datagami at Connecting the Dots 3.0', description: "Datagami was part of Connecting the Dots, Chitkara University's annual event that brings together leading academic and industry partners.", category: 'Industry Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/connecting-dots-chitkara.jpg', alt_text: 'Datagami at Connecting the Dots event', sort_order: 13 },
    { title: 'IBM ICE Partnership with Vikrant University', description: 'IBM ICE collaboration with Vikrant University, Gwalior. Programs: AI, ML, Data Science, Business Analytics for B.Tech, BCA, and MBA students.', category: 'University Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/ibm-ice-vikrant.jpg', alt_text: 'IBM ICE partnership with Vikrant University', sort_order: 14 },
    { title: 'Uniting Leaders: A Joint Celebration of Excellence', description: 'The Achintya Durjay Foundation, in collaboration with Datagami, hosted a prestigious event celebrating the achievements of experts and specialists from various fields.', category: 'Industry Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/achintya-durjay-event.jpg', alt_text: 'Joint celebration of excellence event', sort_order: 15 },
    { title: 'Empowering Young Minds: BFSI Skill Building', description: 'BFSI training sessions conducted across various centers in Mumbai, equipping students with essential financial knowledge and practical skills.', category: 'Student Events', media_type: 'IMAGE', media_url: '/images/gallery/bfsi-skill-building.jpg', alt_text: 'BFSI skill building sessions in Mumbai', sort_order: 16 },
    { title: 'Financial Insights for Tomorrow: Educating Young Minds', description: 'An engaging financial session at Silver Oaks University, Gujarat, where students gained insights into financial concepts and strategies.', category: 'Student Events', media_type: 'IMAGE', media_url: '/images/gallery/silver-oaks-session.jpg', alt_text: 'Financial session at Silver Oaks University', sort_order: 17 },
    { title: 'Mastering Finance: Empowering Non-Financial Professionals', description: 'Team members from Fazlani at a transformative training session in Lonavala aimed at enhancing financial acumen among non-finance staff.', category: 'Corporate Training', media_type: 'IMAGE', media_url: '/images/gallery/fazlani-corporate-training.jpg', alt_text: 'Corporate training at Fazlani Lonavala', sort_order: 18 },
    { title: 'Unity in Green: Datagami at Comicshetra', description: "Datagami volunteers at the Comicshetra event, held at Bhavan's College, Mumbai.", category: 'Student Events', media_type: 'IMAGE', media_url: '/images/gallery/comicshetra-bhavans.jpg', alt_text: 'Datagami at Comicshetra event', sort_order: 19 },
    { title: 'Datagami Partnership with Marwadi University for IBM ICE', description: 'Partnership with Marwadi University for the IBM ICE Program. Empowering students with real-world skills, hands-on learning, and industry-driven insights in AI, data science, and emerging technologies.', category: 'University Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/ibm-ice-marwadi.jpg', alt_text: 'IBM ICE partnership with Marwadi University', sort_order: 20 },
    { title: 'IBM ICE Partnership with Dr. C.V. Raman University', description: 'IBM ICE academia partnership with Dr. C.V. Raman University, Chhattisgarh. Programs: AIML, Data Analytics, Data Science, Cybersecurity & Forensics, AI LLB.', category: 'University Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/ibm-ice-cv-raman.jpg', alt_text: 'IBM ICE partnership with CV Raman University', sort_order: 21 },
    { title: 'UPI Study Tie-Up', description: 'Datagami partners with UPI Study to make international education more accessible and affordable. Students can save up to 50% on tuition fees, enjoy higher visa acceptance rates, fast-track graduation, and access guaranteed credit transfers to 1,500+ universities.', category: 'Industry Collaboration', media_type: 'IMAGE', media_url: '/images/gallery/upi-study-tieup.jpg', alt_text: 'UPI Study partnership with Datagami', sort_order: 22 },
    { title: 'Successful Policy Implementation Workshop', description: 'Datagami facilitated a workshop on integrating new national education policies, empowering faculty with practical strategies for effective implementation and compliance.', category: 'Events', media_type: 'IMAGE', media_url: '/images/gallery/policy-workshop.png', alt_text: 'Policy implementation workshop', sort_order: 23 },
    { title: 'Launching New Industry Collaboration with Tech Innovators', description: 'Our latest partnership aims to bridge the gap between academia and industry, providing students with invaluable real-world experience and cutting-edge projects.', category: 'Partnerships', media_type: 'IMAGE', media_url: '/images/gallery/tech-innovators-collab.png', alt_text: 'Industry collaboration with tech innovators', sort_order: 24 },
    { title: 'Boosting Student Career Readiness: A Datagami Initiative', description: 'Showcasing the profound impact of our career readiness programs, which have consistently led to higher graduate employment rates and successful career launches.', category: 'Student Success', media_type: 'IMAGE', media_url: '/images/gallery/bfsi-skill-building.jpg', alt_text: 'Student career readiness initiative', sort_order: 25 },
    { title: 'EdTech Innovation Showcase: Transforming Learning Environments', description: 'Highlights from our recent showcase demonstrating cutting-edge educational technologies and their successful implementation in partner universities.', category: 'Innovations', media_type: 'IMAGE', media_url: '/images/gallery/silver-oaks-session.jpg', alt_text: 'EdTech innovation showcase', sort_order: 26 },
    { title: 'Digital Transformation Project Completed at Global University', description: 'A comprehensive look into the successful digital transformation project, significantly enhancing administrative efficiency and student engagement across the university.', category: 'Achievements', media_type: 'IMAGE', media_url: '/images/gallery/connecting-dots-chitkara.jpg', alt_text: 'Digital transformation project', sort_order: 27 },
    { title: 'Empowering Educators: Blended Learning Training Session', description: 'Datagami conducted an intensive training program for university faculty on effective blended learning methodologies, fostering innovative teaching practices.', category: 'Workshops', media_type: 'IMAGE', media_url: '/images/gallery/fazlani-corporate-training.jpg', alt_text: 'Blended learning training session', sort_order: 28 },
    { title: 'New Research Partnership to Advance AI in Education', description: 'Announcing a strategic research collaboration focused on developing cutting-edge AI-driven solutions for personalized learning and adaptive educational systems.', category: 'Partnerships', media_type: 'IMAGE', media_url: '/images/gallery/ibm-ice-cv-raman.jpg', alt_text: 'AI in education research partnership', sort_order: 29 },
    { title: 'From Campus to Career: A Student Success Story', description: 'Featuring an inspiring success story of a student who excelled through our career readiness program and secured a top industry position.', category: 'Student Success', media_type: 'IMAGE', media_url: '/images/gallery/comicshetra-bhavans.jpg', alt_text: 'Student success story', sort_order: 30 },
    { title: 'Datagami Participates in Future of Education Summit', description: 'Our experts shared invaluable insights on emerging trends, policy implications, and technological advancements at the prestigious Future of Education Summit.', category: 'Events', media_type: 'IMAGE', media_url: '/images/gallery/achintya-durjay-event.jpg', alt_text: 'Future of Education Summit', sort_order: 31 },
  ]

  for (const item of galleryItems) {
    await client.query(
      `INSERT INTO gallery_items (id, title, description, category, media_type, media_url, alt_text, sort_order, created_at, updated_at)
       VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
       ON CONFLICT DO NOTHING`,
      [item.title, item.description, item.category, item.media_type, item.media_url, item.alt_text, item.sort_order]
    )
  }
  console.log(`Seeded ${galleryItems.length} gallery items`)

  // ──────────────────────────────────────────────
  // 4. Testimonials
  // ──────────────────────────────────────────────
  const testimonials = [
    {
      student_name: 'Mrunali Patil',
      program: 'FinLEARN',
      quote: 'We\u2019re proud to share that Mrunali Patil, a FinLEARN by Datagami student, has been successfully placed with Axis Bank. Her achievement reflects the program\u2019s focus on practical learning and career readiness.',
      rating: 5,
      is_featured: true,
    },
    {
      student_name: 'Janhavi Makwana',
      program: 'FinLEARN',
      quote: 'We\u2019re delighted to announce that Janhavi Makwana, a FinLEARN by Datagami student, has been placed with Axis Bank. Her success highlights our focus on applied learning and industry-linked outcomes.',
      rating: 5,
      is_featured: true,
    },
    {
      student_name: 'Rahul Gupta',
      program: 'FinLEARN',
      quote: 'We\u2019re proud to share that Rahul Gupta, a FinLEARN by Datagami student, has been placed with Muthoot Finance as a Junior Relationship Executive. His achievement reflects the program\u2019s strong emphasis on practical training and industry readiness.',
      rating: 5,
      is_featured: true,
    },
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
