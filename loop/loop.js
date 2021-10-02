/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (index = 2; index <= 100; index++) {
  if (index >= 2) {
    prima = true;

    for (angka = 2; angka < index; angka++) {
      if (index % angka == 0) {
        prima = false;
      }
    }
  }

  if (prima == true) {
    console.log(" " + index + " ");
  }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
// let primeCounter = 0;
// let fiftiethPrime;
// let index = 2;
// EDIT HERE
// let input;
// let output = 0;
// let primeCounter = 2;
// while (output < input) {
//   let jumlah_factor = 0;
//   for (let i = 1; i <= primeCounter; i++) {
//     if (primeCounter % i == 0) {
//       jumlah_factor++;
//     }
//   }
//   if (jumlah_factor == 2) {
//     output++;
//   }
//   primeCounter++;
// }
// console.log(jumlah_factor(50));

let primeCounter = 0;
let fiftiethPrime;
let i = 2;
while (primeCounter < 50) {
  let Prime = true;
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && i !== j) {
      Prime = false;
    }
  }
  if (Prime === true) {
    primeCounter++;
    fiftiethPrime = i;
  }
  i++;
}
console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let a = 1;
do {
  if (a % 2 === 1) {
    oddCounter++;
    fiftiethOdd = a;
  }
  a++;
} while (oddCounter < 50);
console.log(fiftiethOdd);
