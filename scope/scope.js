/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

// jumlah variable scope yang dimiliki oleh javascript :
// 1.Blocks= Blocks adalah code yang berada didalam curly braces {}.
// memiliki 2 jenis scope
// contoh:
// 1.global scope=Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file. dan di deklarasikan di luar blockchain
// contoh:
// let nama = 'yeyen'
// function namaSaya() {
//     return 'nama saya'+ nama;
// }
// console.log(nama);
// 3.Local scope = berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping.

// Maka variabel hanya bisa diakses didalam blocks saja. Tidak bisa diakses diluar blocks.
// contoh:
// function umurSaya() {
//     let age = 23
//     return age;
// }
// console.log(umurSaya);

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
let name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
console.log(printFirstName(name));

// yang tampil di console = Mariah
// karenayang di return menggunakan .split ('') dan hanya menampilkan array [0]
// dan yang di console,log nama function di isi dengan nama yang lain bukan variabel name,
// jika yang di console.log variable nama maka akan keluar hanya jhon karena di return sudah di tetapkan hanya [0] yang akan keluar
