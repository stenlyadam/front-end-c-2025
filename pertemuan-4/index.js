//JavaScript Function
//Cara 1. Function declaration
// function greetings(){
//     console.log("Hello World")
// }
// greetings() // Function call

//Cara 2. Function expression
// const greetings2 = function () {
//     console.log("Hello World")
// }
// greetings2()

//Function with input value (argument & parameter) and return value (output)
// Cara 1
//                 parameter
// function greetings(fullName){
//     return "Hello " + fullName
// }
// //                      argument
// let output = greetings("John Doe")
// console.log(output)
// // Cara 2
// const greetings2 = function (fullName){
//     return "Hello " + fullName
// }
// let output2 = greetings2("Jane Doe")
// console.log(output2)

//Global, Local, dan Block Scope dari Variable
let x = 10 //Global Variabel
console.log(x) //10
function func1(){
    let y = 20 //Local Variabel
    console.log(x)//10
    console.log(y) //20
    if(true){
        let z = 30 //Block Variable
        console.log(x) //10
        console.log(y) //20
        console.log(z) //30
    }
    // console.log(z) //ERROR
}
// console.log(y) //ERROR
func1()

//Mini Exercise
//Modifikasi mini exercise terakhir ttg menghitung BMI
//Buatlah dengan menggunakan fungsi dimana berat dan tinggi 
//dimasukan sbg argument dan outputnya adalah BMI

function calculateBMI(berat, tinggi){
    const bmi = berat / (tinggi * tinggi)
    return bmi > 25 ? "BMI anda adalah " + bmi + ": kelebihan berat badan" : "BMI anda adalah " + bmi + ": berat badan normal"
}

let output = calculateBMI(65, 1.77)
console.log(output)

//Pelajari dirumah tentang IIFE & callback function

