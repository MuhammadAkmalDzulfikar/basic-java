

// menghitung luas persegi
var sisi = prompt ('masukkan nilai sisi = ')
var luas = sisi*sisi;
console.log ("Luas persegi adalah = " + luas);


// menghitung umur berdasarkan tahun lahir
var tahun = prompt ('masukkan tahun Anda lahir = ')
var umur = new Date (). getFullYear()- tahun
console.log (` umur Anda sekarang adalah ${umur} `)

//menghitung keliling lingkaran
const jari = prompt ('masukkan jari-jari = ')
const keliling =2*Math.phi.jari
console.log (`keliling lingkaran adalah ${keliling}`)

// menghitung luas persegi panjang
const panjang = prompt ('masukkan panjang = ')
const lebar = prompt ('masukkan lebar')
const luas = panjang*lebar
console.log (`Luas persegi panjang adalah ${luas}`)

//menghitung volume kubus
const sisi = prompt ('masukkan sisi = ')
const volume = sisi*sisi*sisi
console.log(`volume kubus adalah ${volume}`)

//menghitung suhu

const suhu = prompt ('masukkan suhu = ')
const fahrenheit = (suhu*(9/5))+32;
console.log(`suhu fahrenheit adalah ${fahrenheit}`)

//aplikasi sederhana menghitung uang kembalian dari total telur

var hargaPerKg = 28000;
var jumlahTelur = prompt("Masukkan jumlah telur (kg):");
var uangDibayar = prompt("Masukkan total uang yang dibayarkan:");
var totalHarga = jumlahTelur * hargaPerKg;
var uangKembalian = uangDibayar - totalHarga;

console.log("Jumlah Telur (kg): " + jumlahTelur);
console.log("Total Bayar: Rp" + totalHarga);
console.log("Uang Kembalian: Rp" + uangKembalian);
