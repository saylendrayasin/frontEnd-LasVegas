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

// const axios = require("axios");

// const getDataUsers = async () => {
//   try {
//     // const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // const json = await response.json();
//     // json.forEach(({ name }) => console.log(name));

//     //Axios
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     response.data.forEach(({ name }) => console.log(name));
//   } catch (error) {
//     console.log(`Error to get data ${error}`);
//   }
// };

// getDataUsers();

// let condition = true;
// let helloWorld = new Promise((resolve, reject) => {
//   if (condition) {
//     // apa yang dilakukan jika promise 'fulfilled'
//     resolve("Berhasil");
//   } else {
//     // apa yang dilakukan jika promise 'rejected'
//     reject("Gagal");
//   }
// });

// helloWorld
//   .then((result) => result)
//   .then((result2) => {
//     console.log(result2);
//     setTimeout(()=>{},2000);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function helloWorld(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Hello World");
//         },2000)
//     });
// }

// const message = async ()=>{
//     const msg=await helloWorld();
//     console.log(msg);
// };
// message();

// function ambilDataUser

//Asyncronous
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
  };
  messages();
  
  // //Fetch
  // const ambilDataUser = () => {
  //   fetch("https://reqres.in/api/users")
  //     .then((response) => response.json())
  //     .then((users) => console.log(users.data))
  //     .catch((err) => console.log(`Gagal Mengambil Data ${err.message}`));
  // };
  // ambilDataUser();
  
  // //Async Await
  // const ambilDataUserAsync = async () => {
  //   try {
  //     const response = await fetch("https://reqres.in/api/users");
  //     const users = await response.json();
  //     console.log(users.data);
  //     // arr = users.data;
  //     // arr.forEach((item) => console.log(item.email));
  //   } catch (err) {
  //     console.log(`Error fetching data: ${err.message}`);
  //   }
  // };
  // ambilDataUserAsync();
  
  //Axios
  const axios = require("axios");
  const ambilDataUserAxios = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      console.log(response.data);
    } catch (error) {
      console.log(`Error to get data ${error}`);
    }
  };
  ambilDataUserAxios();
  

  

  