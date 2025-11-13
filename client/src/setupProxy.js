// This file configures the proxy for the development server
// It also suppresses some webpack warnings

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy API requests to backend
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );

  // Suppress console warnings in development
  const originalWarn = console.warn;
  console.warn = function(message, ...args) {
    // Filter out specific warnings
    if (
      typeof message === 'string' &&
      (message.includes('onAfterSetupMiddleware') ||
       message.includes('onBeforeSetupMiddleware') ||
       message.includes('DEP_WEBPACK') ||
       message.includes('source map'))
    ) {
      return;
    }
    originalWarn.apply(console, [message, ...args]);
  };
};

