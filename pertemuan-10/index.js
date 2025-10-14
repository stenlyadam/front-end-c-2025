//Rest Parameter & Spread Operator (...)
//1. Rest Parameter
//a. Rest parameter bertipe data array
//b. Rest parameter harus berada di terakhir dlm parameter list
const funct1 = (param1, param2, ...rest) => {
  console.log(param1, param2);
  console.log(rest);
};

funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Mini Exercise
//Buatlah fungsi yang dapat menjumlahkan semua
//nilai dalam argumen fungsi

const penjumlahan = (...rest) => {
  let hasil = 0;
  rest.forEach((item) => (hasil += item));
  console.log(hasil);
};

penjumlahan(1, 2, 3, 4, 5, 6);

//2. Spread Operator
//Berhubungan dengan Array & Object
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Kegunaan Spread Operator pada Array
//1. Duplikasi Array
const numbers2 = [...numbers];
console.log(numbers2);

//2. Menggabungkan Array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let combineArr1 = arr1.concat(arr2, arr3);
console.log(combineArr1);
let combineArr2 = [...arr1, ...arr2, ...arr3];
console.log(combineArr2);

//Kegunaan Spread Operator pada Object
//1. Duplikasi object
const student1 = {
  fullName: "John",
  status: "active",
};

const student2 = { ...student1, address: "Manado" };
console.log(student2);
//2. Menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 };
