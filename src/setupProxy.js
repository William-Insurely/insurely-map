const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/insurance-map',
    createProxyMiddleware({
      target: 'https://api.insurely.se',
      changeOrigin: true,
    })
  );
};