module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_LOCAL_API_URL + '/:path*' // The :path parameter is used here so will not be automatically passed in the query
      }
    ];
  }
};
