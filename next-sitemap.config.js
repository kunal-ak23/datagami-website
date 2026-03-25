/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://datagami.in',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  additionalPaths: async () => [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/blog', changefreq: 'weekly', priority: 0.5 },
    { loc: '/gallery', changefreq: 'monthly', priority: 0.5 },
  ],
  transform: async (config, path) => {
    let priority = 0.7

    if (path === '/') {
      priority = 1.0
    } else if (path === '/services') {
      priority = 0.9
    } else if (path.startsWith('/services/education')) {
      priority = 0.8
    } else if (path.startsWith('/services/products')) {
      priority = 0.7
    } else if (path.startsWith('/services/hiring')) {
      priority = 0.7
    } else if (path === '/about') {
      priority = 0.7
    } else if (path === '/case-studies' || path.startsWith('/case-studies/')) {
      priority = 0.6
    } else if (path === '/contact') {
      priority = 0.6
    } else if (path === '/blog' || path.startsWith('/blog/')) {
      priority = 0.5
    } else if (path === '/gallery') {
      priority = 0.5
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
