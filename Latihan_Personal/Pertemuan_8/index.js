//let const dan var
// Masalah dalam var adalah bisa terjadi multiple value dalam suatu variabel
// var fullName = "John Smith";
// var fullName = "Jack";
// console.log(fullName);

//let tidak bisa double declaration
// let fullName = "John Smith";
// let fullName = "Jack";
// console.log(fullName);

//dalam const element dalam array bisa diganti
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers[1] = 10;
// console.log(numbers);

// //String Literals
// let nama = "Saylendra";
// let umur = 18;
// //  let kalimat = "Nama " + nama + " Umur " + umur + " Tahun";
// //  console.log(kalimat);
// //String Literals pada ES6
// let kalimatEs6 = `Nama ${nama} Umur ${umur} Tahun`; //syntax ${} bisa memanggil function, variabel, ataupun bisa ada ternary operator
// console.log(kalimatEs6);

//Arrow Functions
//Function Declarative
// function greetings() {
//   return "Hello";
// }

// //Function Expression
// const greetins2 = function () {
//   return "Hi";
// };

// //Function Arrow
// const greetins3 = () => {
//   return "Adios";
// };
// const greetings4 = () => "Ciao"; //Implisist return value untuk arrow function dengan 1 baris code atau langsung return value

//Default Parameter
// const greetings = (nama = "Unnamed") => `Hello ${nama}`;
// console.log(greetings());
const greetings = (nama = "Unnamed", age) => `Hello ${nama} Umur saya ${age}`; // Default Parameter sebaiknya berada diurutan belakang
const greetings2 = (nama, age = 18) => `Hello ${nama} Umur saya ${age}`; // Default Parameter sebaiknya berada diurutan belakang
console.log(greetings2("John"));
