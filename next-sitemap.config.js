/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000'
  // alternateRefs: [
  //   {
  //     href: `${process.env.SITE_URL}/uk-ua/` || 'http://localhost:3000/uk-ua/',
  //     hreflang: 'uk-ua'
  //   },
  //   {
  //     href: `${process.env.SITE_URL}/ru-ru/` || 'http://localhost:3000/ru-ru/',
  //     hreflang: 'ru-ru'
  //   }
  // ]
};
