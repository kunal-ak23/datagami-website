export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Datagami',
  url: 'https://datagami.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://datagami.in/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}
