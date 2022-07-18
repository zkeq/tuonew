const { i18n } = require('./next-i18next.config')
// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  i18n,
  reactStrictMode: true,
  // Required by Next i18n with API routes, otherwise API routes 404 when fetching without trailing slash
  trailingSlash: true,
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? 'https://s-bj-2220-tuo-admin.oss.dogecdn.com/' : '',
}
