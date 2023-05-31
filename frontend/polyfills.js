<<<<<<< HEAD
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
=======
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
>>>>>>> 0b77c95d46d0f9c005f8f8a198b1a9b2c9c5ed17
};