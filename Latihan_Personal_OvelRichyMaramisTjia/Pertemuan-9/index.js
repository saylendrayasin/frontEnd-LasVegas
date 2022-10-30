//Spread parameter memungkinkan kita menyalin array dan objek ke array dan objek lain
const a = [1, 3, 5, 7, 9], b = [2, 4, 6, 8, 10], c = [...a, ...b];

console.log(c);

//kombinasi dan destruc
const [satu, tiga, ...rest] = a;

console.log(satu);
console.log(tiga);
console.log(rest);

//kombinasi objek
const identitas = {
    nama: 'Hachiko',
    asal: 'Manado',
    hobi: 'Memancing'
}

const identitas1 = {
    marga: 'Lair',
    tahunLahir: 2001,
    status: 'mahasiswa'
}

const newIdentitas = {...identitas, ...identitas1};

console.log(newIdentitas);

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//   console.log(myUpdatedVehicle);