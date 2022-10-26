//Synchronous proses dieksekusi secara berurutan
// console.log("Baris 1");
// console.log("Baris 2");
// console.log("Baris 3");

//Asynchronous memungkinkan melakukan proses lain sambil menunggu proses yang berjalan sebelumnya
// setTimeout(() => {  //cara panggil
//     console.log("Cuci baju");
// }, 2000);

// console.log("Menyapu");
// console.log("Mengepel");
// console.log("Memasak");

// setTimeout(()=>{
//     console.log("get data");
//     setTimeout(()=>{
//         console.log("use data");
//     },3000);
// }, 5000);

//promise
// let condition = true;
// let newPromise = new Promise((resolve, reject) => {
//     if(condition){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
// });

//promise way 1. then - catch
// newPromise
// .then((result)=>result)
// .then((result2)=>{
//     console.log(result2);
// })
// .catch((error) => {
//     console.log(error);
// });

//promise way 2. async - await
// const getData=async()=>{
//     const result = await newPromise;
//     console.log(result);
// };
// getData();