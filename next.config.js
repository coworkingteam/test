module.exports = {
  i18n: {
    locales: ['en', 'ru', 'uk-ua'],
    defaultLocale: 'en'
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_LOCAL_API_URL + '/:path*'
      }
    ];
  }
};
