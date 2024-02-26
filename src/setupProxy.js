const { createProxyMiddleware } = require('http-proxy-middleware');
// 前台配置跨域
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3310',
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};