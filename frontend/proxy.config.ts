<<<<<<< HEAD
const proxy: any = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    pathRewrite: { '^/api': '' }
  }
];

=======
const proxy: any = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    pathRewrite: { '^/api': '' }
  }
];

>>>>>>> 0b77c95d46d0f9c005f8f8a198b1a9b2c9c5ed17
export default proxy;