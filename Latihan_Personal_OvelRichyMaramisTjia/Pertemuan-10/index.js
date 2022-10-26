// let person = ['John Doe', 'Manado', 33, true];

//destruc manual
// let fullname = person[0];
// let address = person[1];

//destruc
// let [ fullname, address, ...rest] = person;
// console.log(fullname, rest);
// console.log(address);

// let obj = {
//     title: "Title",
//     subTitle: "Sub Title",
//     image: "Image"
// };

// function header({title, image: gambar}){
//     console.log(title);
//     console.log(gambar);
// }

// function subHeader({subTitle: subJudul}){
//     console.log(subJudul);
// }

// header(obj);
// subHeader(obj);

let buah = "Pisang";
let baju = {
    merek: "cresida",
    ukuran: "s",
    warna: "ungu"
};
function beli(importt){
    console.log(`produk ${importt}`);
};

export {buah as fruit, baju, beli};