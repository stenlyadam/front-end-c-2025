//Array & Object in JavaScript
//1. Array
//Cara deklarasi Array
//Cara 1. Array literal
let students = ["John", "Jack", "Peter", "Bob"];
let john = ["John", 30, true, [80, 90, 100]];
//Cara 2. Kata kunci "new"
let employees = new Array("John", "Jack", "Peter", "Bob");

//Menampilkan semua element array sekaligus
console.log(students);
//Menampilkan element dlm array melalui index
console.log(students[2]);
//Merubah element dlm array melalui index
john[2] = false;
console.log(john);
//Menampilkan element terakhir dalam array
console.log(john.length);
console.log(students[students.length - 1]);

//Array Method
let array = [1, 2, 3, "Hello", false, true];
//1. toString()
console.log(array.toString());
//2. join()
console.log(array.join("-"));
console.log(array.join(" "));
console.log(array.join("#"));
//3. pop() - hapus element terakhir
array.pop();
console.log(array);
//4 push() - tambah element terakhir
array.push("Selamat Siang");
console.log(array);
//5. shift() - hapus element pertama
array.shift();
console.log(array);
//6. unshift() - tambah element pertama
array.unshift("Selamat Siang");
console.log(array);
//7. splice() - tambah/hapus element ditengah2
array.splice(3, 0, 4);
console.log(array);
//8. slice()
let numbers = array.slice(1, 4);
console.log(numbers);
//9. concat() - menggabungkan array
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combineNumbers = num1.concat(num2, num3);
console.log(combineNumbers);

//2. Object
//   Memiliki property & nilai
let johnObj = {
  fullName: "John Doe",
  age: 30,
  isActive: true,
  grade: [80, 90, 100],
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
  },
  sayHello: function () {
    console.log("Hello my name is " + this.fullName);
  },
};
//Cara Mengakses element dlm Object
//Cara 1. Dot notation
console.log(johnObj.fullName);
console.log(johnObj.grade[1]);
console.log(johnObj.address.street);
johnObj.sayHello();
//Cara 2. Bracket notation
console.log(johnObj["fullName"]);
console.log(johnObj["grade"][1]);
console.log(johnObj["address"]["street"]);
johnObj["sayHello"]();

johnObj.job = "Programmer"; //Jika tidak ada, maka akan ditambah property baru
delete johnObj.isActive; //hapus property dalam object
console.log(johnObj);
