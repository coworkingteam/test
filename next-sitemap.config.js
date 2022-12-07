/** @type {import('next-sitemap').IConfig} */

module.exports = {
  generateRobotsTxt: true,
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  alternateRefs: [
    {
      href: `${process.env.SITE_URL || 'http://localhost:3000'}/uk-ua/`,
      hreflang: 'uk-ua'
    },
    {
      href: `${process.env.SITE_URL || 'http://localhost:3000'}/ru/`,
      hreflang: 'ru'
    }
  ]
};
