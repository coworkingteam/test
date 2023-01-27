/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';

module.exports = {
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  siteUrl: SITE_URL,
  alternateRefs: [
    {
      href: `${SITE_URL}/ru`,
      hreflang: 'ru'
    }
  ],

  reactStrictMode: true,
  env: {
    SITE_URL: 'https://aksis.agency/'
  }
};
