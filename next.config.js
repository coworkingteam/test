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
  }
};
