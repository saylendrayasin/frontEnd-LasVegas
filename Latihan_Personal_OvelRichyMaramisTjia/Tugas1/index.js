// Nama : Ovel Richy Maramis Tjia
// Front-End Web Development - A

//JS string concat digunakan untuk menggabungkan dua string yang berbeda variabel
let teks = "Halo";
let teks2 = "Dunia";
console.log(teks.concat(" ",teks2));

//JS string includes akan mengembalikan nilai true jika string mengandung string yang dicari
teks = "Saya tidak tahu apa-apa";
console.log(teks.includes("tahu"));
console.log(teks.includes("tahu",5)); //angka 5 menunjukan pencarian dimulai dari indeks ke berapa

//JS string length untuk menghitung panjang indeks pada string
console.log(teks.length);

//JS string split untuk memisahkan string berdasarkan karakter atau simbol yang ditentukan
teks = "a, b| c"
console.log(teks.split(",")); //string hanya akan dipisah ketika sampai di tanda koma
console.log(teks.split(" "));//string hanya akan dipisah ketika sampai di tanda spasi
console.log(teks.split("|"));//string hanya akan dipisah ketika sampai di tanda pipa

//JS string slice untuk memotong bagian dari string dan return bagian tersebut salam bentuk string yang baru
console.log(teks.slice(3, 6));
console.log(teks.slice(-6, -3)); //jika angka negatif maka string yang dipotong mulai dari indeks belakang

//JS string substring sama saja dengan slice tapi parameter yang kurang dari 0 baik di start maupun end akan dihitung sebagai indeks 0;
console.log(teks.substring(2, 5));
console.log(teks.substring(-2, 3)); //contoh parameter start kurang dari 0, hasilnya akan tetap mulai dari indeks 0

//JS string toLowerCase untuk mengkonvert semua huruf dari sebuah string menjadi huruf kecil
teks = "Apa iTu iNI";
console.log(teks.toLowerCase());

//JS string toUpperCase untuk mengkonvert semua huruf dari sebuah string menjadi huruf besar
console.log(teks.toUpperCase());

//JS string trim untuk menghilangkan whitespace pada kedua sisi string
teks = "  Apa iTu iNI  ";
console.log(teks.length);
let hasil = teks.trim();
console.log(hasil.length);

//JS string valueOf tidak mengubah apa-apa pada string, ia hanya akan mengembalikan nilai primitif dan mengubah objek string menjadi string
teks = new String("Aku kamu dia");
console.log(teks.valueOf());
