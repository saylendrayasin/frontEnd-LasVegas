//Class in JS

//Object Literal
// const mobil = {
//   warna: "Biru",
//   merek: "Honda",
//   transmisi: "Manual",
// };
// console.log(mobil);

//Class
class mobill {
  constructor(warna, merek, transmisi) {
    this.warna = warna;
    this.merek = merek;
    this.transmisi = transmisi;
  }
  nyalakanMobill() {
    console.log(`Mobil merek ${this.merek} dinyalakan`);
  }
}
let mobil1 = new mobill("Merah", "Toyota", "Matic");
console.log(mobil1);
mobil1.nyalakanMobill();

//Inheritance atau Pewarisan (is-a relationship)
class Honda extends mobill {
  constructor(warna, merek, transmisi, mesin, bahanBakar) {
    super(warna, merek, transmisi);
    this.mesin = mesin;
    this.bahanBakar = bahanBakar;
  }
  // Override
  nyalakanMobill() {
    console.log(`Mobil merek ${this.merek} dinyalakan (Override)`);
  }

  matikanMobill() {
    console.log(`Mobil merek ${this.merek} dimatikan`);
  }
}
const jazz = new Honda("hitam", "honda", "manual", "1200cc", "bensin");
console.log(jazz);
jazz.nyalakanMobill();
jazz.matikanMobill();
