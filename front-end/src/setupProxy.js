const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({ target: 'https://platester-app.onrender.com/', changeOrigin: true }))
}