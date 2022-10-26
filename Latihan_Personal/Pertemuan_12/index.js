// //1. Multithread / parallel atau dijalankan secara bersama
// setTimeout(() => {
//   console.log("Proses 1");
// }, 4000);

// console.log("Proses 2");

// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);

// setTimeout(() => {
//   console.log("Proses 4");
// }, 2000);

// console.log("Proses 5");

// //2. Concurenct Menunggu yang diatas selesai dulu baru dipakai dibawah seperti konsep mengambil dan menggunakan data API
// setTimeout(() => {
//   console.log("Proses 1 Mendapat data dari API");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3 Menggunakan data API");
//       setTimeout(() => {
//         console.log("Proses 4 Menghilangkan data API");
//       }, 3000);
//     }, 2000);
//   }, 4000);
// }, 4000);

//3. Promise
// let condition = true;
// let newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     //Yang terjadi jika promise terpenuhi
//     resolve("Berhasil");
//   } else {
//     //Yang terjadi jika promise tidak terpenuhi
//     reject("Gagal");
//   }
// });
//2-Cara Menggungakn Promise
//(1)Then Catch
// newPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// newPromise
//   .then((result) => result)
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//(2)Async - Await
// const getData = async () => {
//   const result = await newPromise;
//   console.log(result);
// };

// getData();

//4. Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((item) => console.log(item.name));
//   });

// const getData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const json = await response.json();
//     // console.log(json);
//     json.forEach((item) => console.log(item.name));
//   } catch (err) {
//     console.log(`Error fetching data: ${err.message}`);
//   }
// };

// getData();

const getData1 = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    console.log(users.data);
  } catch (err) {
    console.log(`Error fetching data: ${err.message}`);
  }
};
getData1();

// function ambilDataUser() {
//   fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then((users) => console.log(users.data));
// }

// ambilDataUser();
