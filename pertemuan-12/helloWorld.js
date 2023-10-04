function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Hello World!"), 2000);
    });
  }
  
  module.exports = helloWorld;