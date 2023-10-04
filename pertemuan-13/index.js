// class in JS
// -----------

// Object Literal
// const mobil = {
//     transmisi : 'manual',
//     bahanbakar : 'Bensin',
//     mesin : 1500,
//     nyalakanMesin : function(){
//         console.log('mobil ${this.transmisi}')
//     }
// };

// const mobil2 = {
//     transmisi : 'Automatic',
//     BahanBakar : 'Solar',
//     mesin : 2000,
//     nyalakanMesin : function(){
//         console.log('mobil ${this.transmisi}')
//     },
// };

// class Mobil {
//     constructor(transmisi, bahanBakar, mesin){
//         this.transmisi = transmisi
//         this.bahanBakar = bahanBakar
//         this.mesin = mesin
//     }
//     nyalakanMesin(){
//         ;console.log('Mobil ${this, this.transmisi} nyalakan')
//     }
// }

// const mobil1 = new Mobil("Manual", "bensin", 1500)
// mobil1.nyalakanMesin()
// const mobil2 = new Mobil("Automatic", "solar", 1500)
// mobil2.nyalakanMesin()
// console.log(mobil1, mobil2) 

class Honda extends Mobil{
    constructor(merek, warna, bahanBakar, transmisi, mesin){
        super(transmisi, bahanBakar, mesin)
        this.merek = merek
        this.warna = warna
    }
};

const Civic = new Honda('Civic', 'Pulih', 'Automatic', 'bensin', 2500);
Civic.nyalakanMesin();
console.log(Civic)
