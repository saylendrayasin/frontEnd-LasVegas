let person = [
  { name: "John", age: 35 },
  { name: "Billy", age: 43 },
  { name: "Bob", age: 17 },
  { name: "Jack", age: 40 },
];
//Menentukan umur paling muda dan paling tua pakai forEach
// let max = person[0];
// let min = person[0];
// person.forEach(function (value, index) {
//   if (person[index].age > max.age) {
//     max = person[index];
//   }
//   if (person[index].age < min.age) {
//     min = person[index];
//   }
// });
// console.log(max.name);
// console.log(min.name);

// person.forEach(function (value, index) {
//   console.log("isinya = ", value);
// });

//perbedaan forEach dan map
// let number = [1, 3, 2, 6, 19];
// let baru = number.forEach((value) => {
//   return value * 2;
// });

// console.log(baru);

// let baru1 = number.map((data) => {
//   return;
// });
// console.log(baru1);

//Filter mengembalikan banyak value dan berbentuk array
let cariUmur = person.filter(function (value) {
  return value.age > 20;
});
console.log(cariUmur); //perhatikan peletakkan index pada variabel

//Find mengembalikan hanya satu value
let cariUmur1 = person.find(function (value) {
  return value.name === "Billy";
});
console.log(cariUmur1.age);
