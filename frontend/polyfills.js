require('stream-browserify');

globalThis.global = window;
globalThis.process = {
  env: { DEBUG: undefined },
};
globalThis.Buffer = globalThis.Buffer || require('buffer').Buffer;
globalThis.stream = require('stream-browserify');

module.exports = {
  // ... configuração do webpack ...
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
};