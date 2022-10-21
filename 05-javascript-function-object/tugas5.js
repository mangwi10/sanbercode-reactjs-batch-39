//Soal 1
console.log("\n Jawaban Soal 1")
function cetakFunction() {
    return "Halo Nama saya I Nyoman Wiyana";
}

console.log(cetakFunction())


//Soal 2
console.log("\n Jawaban Soal 2")
function myFunction(a, b) {
    return a + b;
}

let angka1 = 20

let angka2 = 7

let output = myFunction(angka1, angka2)

console.log(output)


//Soal 3
console.log("\n Jawaban Soal 3")
const Hello = () => {return "Hello"};
console.log(Hello());

//Soal 4
console.log("\n Jawaban Soal 4")
let obj = {

    nama : "john",
    
    umur : 22,
    
    bahasa : "indonesia"
    
    }

console.log(obj.bahasa);


//Soal 5
console.log("\n Jawaban Soal 5")
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0], 
    jenisKelamin : arrayDaftarPeserta[1], 
    hobi : arrayDaftarPeserta[2], 
    tahunLahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)


//Soal 6
console.log("\n Jawaban Soal 6")
let buah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: "tidak", harga: "9000"},
    {nama: "Jeruk", warna: "Oranye", adaBijinya: "ada", harga: "8000"},
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "ada", harga: "10000"},
    {nama: "Pisang", warna: "Kuning", adaBijinya: "tidak", harga: "5000"},
]

let arrayBuahFilter = buah.filter(function(item){
    return item.adaBijinya == "tidak";
})

console.log(arrayBuahFilter)


//Soal 7
console.log("\n Jawaban Soal 7")
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 
 
const {name, brand, year} = phone
 
 
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(name, brand, year) 


//Soal 8
console.log("\n Jawaban Soal 8")
let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = {}
  
  // kode diatas ini jangan di rubah atau di hapus sama sekali
  
 objOutput = {...dataBukuTambahan, ...buku}

  // kode di bawah ini jangan dirubah atau dihapus
  console.log(objOutput) 


//Soal 9
console.log("\n Jawaban Soal 9")
let mobil = {

    merk : "bmw",
    
    color: "red",
    
    year : 2002
    
    }
    
     
    
    const functionObject = (param) => {
    
    return param
    
    }

    console.log(functionObject(mobil))