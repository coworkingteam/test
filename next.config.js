module.exports = {
  i18n: {
    locales: ['en-us', 'ru-ru', 'uk-ua'],
    defaultLocale: 'en-us'
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
