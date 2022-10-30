// let fullNa = "John Doe";

// let fullN = "Jack";

// // var tidak mengenal blockscop

// console.log(fullN);

// const numbers = [1, 2, 3, 4, 5];
// numbers[3] = 100;

// console.log(numbers);

// // string literals

// let nama = "John"
// let age = "19"

// let greet = "Hallo nama saya " + nama + ". Umur saya " + age + " tahun";
// console.log(greet);
// let greet2 = `hello nama saya ${nama}, umur saya ${age + 4} tahun`;
// console.log(greet2);

// // arrow function

// //function declaration
// function greetings(){
//     return "Hello World";
// }

// //function expression
// const greetings2 = function(){
//     return "Hello World2";
// }

// //arrow function
// const greetings3 = (nama) =>{
//     return `Hello ${nama}`;
// }

// console.log(greetings());
// console.log(greetings3("John"));

// Default parameter

const greetings = (nama = "Unnamed", age) => `Hello ${nama}. Umur saya ${age}`;

console.log(greetings());
console.log(greetings(30));