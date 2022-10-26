let person = [
  { name: "John", age: 35 },
  { name: "Billy", age: 43 },
  { name: "Bob", age: 17 },
  { name: "Jack", age: 40 },
];

//Menentukan umur tertua dan termuda

// // Cara Pertama
// let old = Math.max(person[0].age, person[1].age, person[2].age, person[3].age);

// for (let i = 0; i < person.length; i++) {
//   if (person[i].age == old) {
//     console.log(person[i].name);
//   }
// }

// let young = Math.min(
//   person[0].age,
//   person[1].age,
//   person[2].age,
//   person[3].age
// );

// for (let i = 0; i < person.length; i++) {
//   if (person[i].age == young) {
//     console.log(person[i].name);
//   }
// }

//Cara Kedua
let max = person[0];
let min = person[0];

for (let i = 0; i < person.length; i++) {
  if (person[i].age > max.age) {
    max = person[i];
  }
  if (person[i].age < min.age) {
    min = person[i];
  }
}
console.log(max.name);
console.log(min.name);

//Looping Pakai forEach
// let numbers = [9, 5, 4, 7, 8, 10, 19];
// numbers.forEach(function (nilai, urutan, array) {
//   //default function (value, index, array)
//   console.log("index ke: ", urutan, " ", nilai, " ", array);
// });
