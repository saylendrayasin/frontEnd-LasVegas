//Synchronous
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");
// console.log("Proses 5");

//Asynchronous

// 1. Multithread / Parallel

// console.log("Proses 1");
// setTimeout(() => {
//   console.log("Proses 2 (Mengambil data API)");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 3000);
// console.log("Proses 5 (Menggunakan data dari API)");

// 2. Concurent

// console.log("Proses 1");
// setTimeout(() => {
//   console.log("Proses 2 (Mengambil data API)");
//   setTimeout(() => {
//     console.log("Proses 3");
//     setTimeout(() => {
//       console.log("Proses 4");
//       setTimeout(() => {
//         console.log("Proses 5 (Menggunakan data dari API)");
//       }, 2000);
//     }, 3000);
//   }, 2000);
// }, 5000);

//Promise
// let condition = true;
// let newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     // apa yang dilakukan jika promise 'fulfilled'
//     resolve("Berhasil");
//   } else {
//     // apa yang dilakukan jika promise 'rejected'
//     reject("Gagal");
//   }
// });

// Ada 2 cara menggunakan promise
// 1. Then - Catch
// newPromise
//   .then((result) => result)
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// Async - Await
// const getData = async () => {
//   const result = await newPromise;
//   console.log(result);
// };

// getData();
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((item) => console.log(item.name));
//   });

const axios = require("axios");

const getDataUsers = async () => {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const json = await response.json();
    // json.forEach(({ name }) => console.log(name));

    //Axios
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    response.data.forEach(({ name }) => console.log(name));
  } catch (error) {
    console.log(`Error to get data ${error}`);
  }
};

getDataUsers();
