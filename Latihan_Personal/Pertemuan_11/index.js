//Asynchronus
console.log("Memasak");

//setTimeout merupakan fungsi asynchronous dan fungsi ini akan dijalankan dengan diatur berdasarkan waktu yang ditentukan
setTimeout(() => {
  console.log("Mencuci");
}, 5000);

console.log("Menyapu");
console.log("Merapikan");

//Function callback
function sapa(nama) {
  console.log(`Hello ${nama}`);
}
function intro(fName, lName, callback) {
  const fullName = `${fName} ${lName}`;

  callback(fullName);
}

intro("Saylendra", "Yasin", sapa);

//Asynchronus dalam case dimana kita akan menjalankan fungsi tapi hasilnya bergantung dari fungsi lain
function processed() {
  console.log("Use data API");
}

function processing(callback) {
  setTimeout(() => {
    console.log("Mengambil data dari API");
    setTimeout(() => {
      callback();
    }, 2000);
  }, 2000);
}

processing(processed);

//Promises
let condition = false;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    //Yang terjadi jika promise terpenuhi
    resolve("Berhasil");
  } else {
    //Yang terjadi jika promise tidak terpenuhi
    reject("Gagal");
  }
});

newPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
