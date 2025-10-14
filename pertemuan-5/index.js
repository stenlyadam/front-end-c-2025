//IIFE & Callback Function
//1. IIFE (Immediately Invoked Function Expression)
//   self-executing anonymous Function
// (function () {
//   console.log("Hello World");
// })();
// IIFE with parameter & return value
// let output = (function (fullName) {
//   return "Hello " + fullName;
// })("John Doe");
// console.log(output);

//2. Callback Function
//  function passed into another function as an argument

// function greetings(callback) {
//   callback();
// }
// // callback must be an anonymous function
// greetings(function () {
//   console.log("Hello Callback");
// });

//Callback function with parameter & return
function greetings(callback) {
  let result = callback("John Doe");
  return result;
}
// callback must be an anonymous function
let output = greetings(function (fullName) {
  return "Hello " + fullName;
});
console.log(output);

//Exercise #01
//Buatlah program untuk menghitung BMI
//dengan menggunakan IIFE & callback Function
// gunakan parameter & return value
//Bisa dilihat pada mini exercise sebelumnya
