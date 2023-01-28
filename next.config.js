module.exports = {
  i18n: {
    locales: ['en-US', 'ru'],
    defaultLocale: 'en-US'
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_LOCAL_API_URL + '/:path*'
      }
    ];
  },
  reactStrictMode: true,
  env: {
    CONTENTFUL_DELIVERY_API_ACCESS_TOKEN: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    SITE_URL: process.env.SITE_URL
  }
};
