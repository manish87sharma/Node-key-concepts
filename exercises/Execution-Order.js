
// setTimeout(() => {
//     console.log(" I am set timeout", Date())
// }, 0);

// setImmediate(() => {
//     console.log(" I am set immediate", Date())
// })

// setTimeout(function () {
//     console.log("TIMEOUT 1");
//     setImmediate(function () {
//         console.log("SET IMMEDIATE 1");
//     });
// }, 0);
// setTimeout(function () {
//     console.log("TIMEOUT 2");
//     setImmediate(function () {
//         console.log("SET IMMEDIATE 2");
//     });
// }, 0);
// setTimeout(function () {
//     console.log("TIMEOUT 3");
// }, 0)

// var fs = require('fs');
// fs.readFile("../README.md", function () {
//     setTimeout(function () {
//         console.log("SET TIMEOUT inside IO");
//     });
//     setImmediate(function () {
//         console.log("SET IMMEDIATE inside IO");
//     });
// });



// console.log("I'm First");

// setImmediate(function () {
//   console.log('Im setImmediate');
// });

// console.log("I'm Second");

// process.nextTick(function () {
//   console.log('Im nextTick');
// });

// console.log("I'm Last");




setImmediate(function A() {
    setImmediate(function B() {
        console.log(1);
      setImmediate(function D() { console.log(2); });
      setImmediate(function E() { console.log(3); });
    });
    setImmediate(function C() {
        console.log(4);
      setImmediate(function F() { console.log(5); });
      setImmediate(function G() { console.log(6); });
    });
  });
  
  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0)


