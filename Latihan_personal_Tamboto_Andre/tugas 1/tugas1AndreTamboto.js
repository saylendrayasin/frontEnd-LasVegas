console.log("Tugas latihan metode-metode string");
console.log("front end")
console.log("andre tamboto")

//string concat
//METODE digunakan untuk menggabungkan string menjadi satu 
const str1 = 'HELLO';
const str2 = 'WORLD';
const str3 = ' ';

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));
console.log(str1.concat(str3, str2));


//Includes
//metode string ini melakukan pencarian peda huruf besar maupun kecil untuk menentukan apakah satu string dapat ditemukan di dalam string lain 
let str = 'JavaScript includes STRING';
console.log(str.includes('Script'));   


//Length
//metode yang digunakan untuk mencari panjang string dan menghitung jumlah huruf yang ada
let sentence = "JavaScript STRING";
let len = sentence.length;
console.log(len);    


//Split
//metode berfungsi sebagai pemisah atau pembagi di dalam string dan dikembalikan dalam bentuk array
const text = "Java script SPLIT. Java SCRIPT SPLIT.";
let pattern = ".";
let newText = text.split(pattern);
console.log(newText);  

//slice
//Metode ini berfungsi untuk mendapatkan bagian dari string atau mengekstrak dan mengembalikan bagian dari string itu ke bentuk string baru
const message = "JavaScriptSlice";
// slice the substring from index 0 to 10
let result = message.slice(7,10);
console.log(result);  



//substring
//metode ini untuk mengembalikan bagian tertentu dari string antara indeks awal dan akhir
let string = "Program JavaScript Substring";
substring = string.substring(2, 7);
console.log(substring);           


//toLowerCase
//metode ini untuk mengembalikan string yang dikonversi menjadi huruf kecil atau mengubah huruf besar menjadi huruf kecil
let lowercase_str = str.toLowerCase();
console.log(lowercase_str); // javascript string       


//toUpperCase
//metode ini mengembalikan string yang dikonversi menjadi huruf besar atau mengubah huruf kecil menjadi huruf besar
const upper_message = message.toUpperCase();
console.log(upper_message);               


//trim
//Metode ini berfungsi menghapus semua whitespace dari string yang ada di awal atau akhir string

const kalimat = "    fakultas ilmu komputer   ";

console.log(kalimat);

console.log(kalimat.trim());



//ValueOf
//metode mengembalikan nilai primitif dari objek String dimana hasilnya tetap sama asalkan nilai stringnya sama.
let strVar1 = new String("JavaScript valueof");
strVar1.valueOf();                



removed1 = person.splice(2);
console.log(person);
console.log(removed1);