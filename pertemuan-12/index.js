//Asynchronous JavaScript

//Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); //Proses yg memakan waktu yg lama
// console.log("Proses 4");

//Asynchronous -> multi thread -> non blocking
//1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 4000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 3000);

//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//         setTimeout(() => {
//           console.log("Proses 5");
//           setTimeout(() => {
//             console.log("Proses 6");
//             setTimeout(() => {
//               console.log("Proses 7");
//             }, 5000);
//           }, 5000);
//         }, 5000);
//       }, 5000);
//     }, 5000);
//   }, 5000);
// }, 5000);

//Promise
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });
//Cara menggunakan Promise
//1. then - catch
// newPromise
//   .then((result) => `${result} !!!`) //Proses 1
//   .then((result2) => console.log(result2)) //Proses 2
//   .catch((error) => console.log(error));

//2. async / await
//Harus menggunakan fungsi

// const getPromise = async () => {
//   const result = await newPromise;
//   console.log(result);
// };

// getPromise();

//Ambil data dari API menggunakan promise fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

//Mini Exercise
//Rubah then - catch diatas menggunakan async/await dan
//tampilkan field nama saja
const getDataJSON = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users"); //proses 1
    const json = await result.json(); //proses 2
    json.forEach(({ name }) => {
      console.log(name);
    });
  } catch (error) {
    console.log(error);
  }
};

getDataJSON();
