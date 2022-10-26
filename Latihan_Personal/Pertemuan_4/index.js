let a = 1;
let b = 2;

console.log(a == b);

let umur = 17;
let hasil = umur >= 18 ? "Bisa buat sim" : "Belum bisa buat sim";
console.log(hasil);

//function test
function test() {
  console.log("Hello world!");
}

test();
//function test 2
let print = function () {
  console.log("Hallo!");
};

print();
//function test 3
let print2 = function () {
  return "Hello Returned!";
};

let testPrint = print2();
console.log(testPrint);
//function test 4
function Intro() {
  return "Hallo";
}

console.log(Intro() + " Nama kamu siapa?");

// functio test 5
let age = 17;
function nama(first, last) {
  return first + " " + last + " umur " + age + " tahun";
}

console.log("Hallo " + nama("John", "Doe"));
//Perhatikan lokal dan global variable yang dipisahkan dengan scope tanda kurung
