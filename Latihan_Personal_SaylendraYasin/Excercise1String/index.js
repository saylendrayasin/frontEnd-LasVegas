// concat
let text1 = "Hello";
let text2 = "Yuhuu";
let text3 = text1.concat(" ", text2); //Gabungkan text1 dan text2  dan dipisahkan dengan spasi
console.log(text3);

//Includes
let exampleIncludes = "Lorem Ipsum Is Simply";
console.log(exampleIncludes.includes("rem")); //Mengecek apakah 'rem' ada pada text atau tidak

//Length
let exampleLength =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(exampleLength.length); //Menghitung jumlah karakter dalam text

//Split
let exampleSplit = "How are you doing today?";
const arraySplit = exampleSplit.split(" "); //Split kalimat menjadi perkata
let resultSplit = arraySplit[3];
console.log(resultSplit);

//Slice
let exampleSlice = "Lorem Ipsum is simply";
let part = exampleSlice.slice(5); //Mengambil suatu value dari range karakter tertentu
console.log(part);

//substring
let exampleSubstr = "Hello world!";
let resultSubstr = exampleSubstr.substring(4, 7); //Mengambil substring tertentu
console.log(resultSubstr);

//Lowercase
let exampleLowercase = "Hello world!";
let resultLowercase = exampleLowercase.toLocaleLowerCase(); //Convert ke lowercase
console.log(resultLowercase);

//uppercase
let exampleUppercase = "Hello World!";
let resultUppercase = exampleUppercase.toLocaleUpperCase(); //Convert ke uppercase
console.log(resultUppercase);

//trim
let exampleTrim = "       Hello World!        ";
let resultTrim = exampleTrim.trim(); //Menghilangkan/Menghapus spasi
console.log(resultTrim);

//valueOf
let exampleValueof = "Hola!";
let resultValueof = exampleValueof.valueOf(); //Mangambil nilai dari exampleValueof
console.log(resultValueof);
