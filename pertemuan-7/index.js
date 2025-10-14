//JavaScript Conditinal & Loop

//1. JavaScript Conditonal
//a. if - else
// let suhu = 35;
// if (suhu >= 38) {
//   console.log("Suhu Panas");
// } else {
//   console.log("Suhu Normal");
// }
//b. if - else if - else
//Jika nilai 91 - 100 nilai A
//jika nilai 81 - 90 nilai B
//jika nilai 71 - 80 nilai C
//jika nilai < 70 nilai D
// let nilai = 85;
// if (nilai >= 91 && nilai <= 100) {
//   console.log("Grade A");
// } else if (nilai >= 81 && nilai <= 90) {
//   console.log("Grade B");
// } else if (nilai >= 71 && nilai <= 80) {
//   console.log("Grade C");
// } else if (nilai <= 70) {
//   console.log("Grade D");
// } else {
//   console.log("Out of range");
// }
//switch - case
// let hari = 1;
// switch (hari) {
//   case 1: // if (hari === 1)
//     console.log("hari minggu");
//     break;
//   case 2:
//     console.log("hari senin");
//     break;
//   case 3:
//     console.log("hari selasa");
//     break;
//   case 4:
//     console.log("hari rabu");
//     break;
//   case 5:
//     console.log("hari kamis");
//     break;
//   case 6:
//     console.log("hari jumat");
//     break;
//   case 7:
//     console.log("hari sabtu");
//     break;
//   default:
//     console.log("Out of range");
// }

//2. JavaScript Looping
//for-loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//while loop
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
//do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// for (let i = 0; i < 5; i++) {
//   console.log(numbers[i]);
// }

//Array built-in method
//1. forEach()
numbers.forEach(function (value) {
  console.log(value);
});
//2. map()
let output = numbers.map(function (value) {
  return value + 2;
});

console.log(output);
//3. filter()
let filter = numbers.filter(function (value) {
  return value > 2;
});

console.log(filter);

//4. find()
let find = numbers.find(function (value) {
  return value > 2;
});

console.log(find);
