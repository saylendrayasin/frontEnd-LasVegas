//class
// const mobil = {
//     warna: "Merah",
//     merek: "Honda",
//     transmisi: "manual"
// };

// const mobil2 = {
//     warna: "Ungu",
//     merek: "Yamaha",
//     transmisi: "manual"
// };

// console.log(mobil, mobil2);

class Mobil{
    constructor(warna, merek, transmisi){
        this.warna = warna;
        this.merek = merek;
        this.transmisi = transmisi;
    }
    nyalakanMobil(){
        console.log(`Mobil ${this.merek} menyala`);
    }
}

// const honda = new Mobil("merah", "honda", "manual");
// const toyota = new Mobil("hijau", "toyota", "manual");
// console.log(honda, toyota);
// honda.nyalakanMobil();
// toyota.nyalakanMobil();

// inheritance
class Toyota extends Mobil{
    constructor(warna, merek, transmisi, mesin, bahanBakar){
        super(warna, merek, transmisi)
        this.mesin = mesin;
        this.bahanBakar = bahanBakar;
    }
    matikanMobil(){
        console.log(`Mobil ${this.merek} mati`);
    }
}

const agya = new Toyota("Putih", "agya", "matic", "1200cc", "Bensin")
console.log(agya);
agya.nyalakanMobil();
agya.matikanMobil();