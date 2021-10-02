/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(gaji) {
  if (gaji < 5000000) {
    return ` pajak sebesar = Rp.${gaji * 0}`;
  } else if (gaji >= 5000000 && gaji < 10000000) {
    return ` pajak sebesar = Rp.${(gaji * 5) / 100}`;
  } else if (gaji >= 10000000 && gaji < 20000000) {
    return ` pajak sebesar = Rp.${(gaji * 10) / 100}`;
  } else if (gaji >= 20000000) {
    return ` pajak sebesar = Rp.${(gaji * 20) / 100}`;
  }
}
console.log(taxCalc(10000000));

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg)

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) {
  let berat = (weight / Math.pow(height, 2)) * 10000;
  if (berat < 18.5) {
    return "under weight";
  } else if (berat > 18.5 && berat < 24.9) {
    return "normal";
  } else if (berat > 25 && berat < 29.9) {
    return "over weight";
  } else if (berat > 30 && berat < 34.9) {
    return "obese";
  } else if (berat > 35) {
    return "extremely obese";
  }
}
console.log(checkBMI(170, 80));

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
  let splitSentence = sentence.split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);
  }
  return splitSentence.join(" ");
}
console.log(convToUpperCase("hello bandung"));
console.log(convToUpperCase("hello world wide"));

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let split = str.split(" ");
    if (split.length > 1) {
      return "kata tidak boleh dipisah";
    } else if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "";
}

console.log(firstNonRepeatedCharacter("hello world"));
