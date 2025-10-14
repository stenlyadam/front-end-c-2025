//Destructuring & Module
//1. Destructuring Array & Object
// let numbers = [1, 2, 3, 4, 5]; //Structuring

//Destructuring
// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];

//Destructuring Array ES6
// const [num1, num2, num3, num4, num5] = numbers;

//Destructuring sebagian item saja
// const [, num2, num3, ,] = numbers;
// console.log(num2, num3);

//Destructuring dengan rest parameter
// const [num1, ...rest] = numbers;
// console.log(num1, rest);

//Destructuring pada object
// const student = {
//   fullName: "John",
//   age: 25,
//   isActive: true,
// };

// const { fullName, age, isActive } = student;
//Destructuring sebagai item
// const { age } = student;
// console.log(age);
// //Destructuring dengan rest parameter
// const { fullName, ...rest } = student;
// console.log(fullName, rest);

//Mini Exercise
//Cari di Exercise 4 dibagian mana anda bisa menambahkan destructuring

//1
// function calculateAge(birthYear) {
//   return 2019 - birthYear;
// }

// function yearUntilRetirement({ year, firstName }) {
//   var age = calculateAge(year);
//   var retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years");
//   } else {
//     console.log(firstName + " is already retired.");
//   }
// }
// yearUntilRetirement({ year: 1987, firstName: "John" });

//3.

// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function ({ radius, power }) {
//   return phi * Math.pow(radius, power);
// };

// radius = 21;
// var area21 = calculateArea({ radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({ radius: radius, power: 2 });

//Module
import { student as mahasiswa, angka } from "./data.js"; //front -end
import ucapkanSalam from "./sayGreetings.js";

// const student = require("./data.js"); //back -end
console.log(mahasiswa);
console.log(angka);
ucapkanSalam();
