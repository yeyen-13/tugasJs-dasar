/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error =kesalahan ini muncul ketika jenis (angka, string, dan sebagainya) yang Anda coba gunakan atau akses tidak kompatibel, seperti mengakses properti dalam jenis variabel yang tidak ditentukan .
/// - Reference Error = Ini sesederhana ketika Anda mencoba menggunakan variabel yang belum dideklarasikan,
/// - Range Error=  membuat /menggunakan angka /objek dengan panjang tertentu dan  yang tidak valid
/// - Syntax Error=  ini terjadi ketika Anda memiliki sesuatu yang tidak dapat diuraikan dalam hal sintaksis,

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
// hasilnya akan undefined
//

/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
//  katagori Reference Error.

/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi
// karena console.log diminta menampilkan hasil  dari vaiabel.tapi variabelbelnya di bawah console.log
// console.log menjalankan hasil yang ada di atasnya
// tapi jika console di pindahkan ke bawah variabel makaa isi variabel akan muncul/ dapat di temukan

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithConst);
console.log(salaryWithVar);
var salaryWithVar = 15000000;

const salaryWithConst = 15000000;
