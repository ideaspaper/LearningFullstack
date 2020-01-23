// Challenge 1
// Play with string
console.log('Play with string challenge:');
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);


// Challenge 2
// Cafe visitation
console.log('\n');
console.log('Cafe visitation challenge:');
var name = 'Budi';
var age = 10;
var money = 812345;
var order = 'juice';
var priceAnggur = 300000;
var priceJuice = 50000;
var menuAnggur = 'anggur';
var menuJuice = 'juice';
//// Name validation [return number]
function nameValidation(nameInput) {
  if (nameInput == null || nameInput == undefined || nameInput.length == 0) {
    return -1; //// Empty error
  } else {
    nameInput = nameInput.trim()
    if (nameInput == null || nameInput == undefined || nameInput.length == 0)
      return -2; //// Only whitespaces error
    return 1;
  }
}
//// Wine age condition [return boolean]
function wineAge(ageInput) {
  return ageInput < 17 ? false : true;
}
//// Transaction calculation [return number]
function transaction(moneyInput, orderInput) {
  switch (orderInput) {
    case menuAnggur:
      return moneyInput - priceAnggur;
    case menuJuice:
      return moneyInput - priceJuice;
  }
}
//// Main function
function main() {
  switch (nameValidation(name)) {
    case -1:
      console.log('Name empty, ' + 'Anda tidak boleh masuk!');
      return;
    case -2:
      console.log('Name cannot consists of only whitespaces, ' + 'Anda tidak boleh masuk!');
      return;
  }
  switch (order) {
    case 'anggur':
      if (wineAge(age)) {
        let transactionResult = transaction(money, menuAnggur);
        if (transactionResult > 0) {
          console.log('Anda bisa pesan minum. Sisa uang anda: ' + transactionResult);
        } else {
          console.log('Uang tidak cukup. Anda harus pulang.');
        }
      } else {
        console.log('Maaf ' + name + ', Anda masih terlalu muda.')
      }
      break;
    case 'juice':
      let transactionResult = transaction(money, menuJuice);
      if (transactionResult > 0) {
        console.log('Anda bisa pesan minum. Sisa uang anda: ' + transactionResult);
      } else {
        console.log('Uang tidak cukup. Anda harus pulang.');
      }
      break;
  }
}
main();


// Chalenge 3
// Gacha
console.log('\n');
console.log('Gacha challenge:');
//// String template
var strTemplate1 = 'coba lagi ya'
var strTemplate2 = 'selamat kamu mendapatkan kupon sebanyak ';
var strTemplate3 = 'WOW, kamu menang jackpot! Selamat!!'
//// Random number generator function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
//// Run the gacha
switch (getRandomInt(5)) {
  case 1:
    console.log(strTemplate1);
    break;
  case 2:
    console.log(strTemplate2 + 5);
    break;
  case 3:
    console.log(strTemplate2 + 15);
    break;
  case 4:
    console.log(strTemplate2 + 50);
    break;
  case 5:
    console.log(strTemplate3);
    break;
}


// Challenge 4
// Laundry day (in pseudocode)
////
//// INIT jumlahBaju to 0
//// DO
////   READ from USER_INPUT and SET jumlahBaju to jumlahBaju+USER_INPUT
//// WHILE jumlahBaju != 20
//// CALL cuciBaju


// Challenge 5
// I love coding
console.log('\n');
console.log('I love coding challenge:');
console.log('LOOPING FOR PERTAMA');
for (let i = 0; i < 20; i++) {
  console.log(i + ' - I love coding');
}
console.log('LOOPING FOR KEDUA');
for (let i = 20; i > 0; i--) {
  console.log(i + ' - I will become fullstack developer');
}
console.log('LOOPING WHILE PERTAMA');
var i = 2;
while (i <= 20) {
  console.log(i + ' - I love coding');
  i += 2;
}
console.log('LOOPING WHILE KEDUA');
var i = 20;
while (i > 0) {
  console.log(i + ' - I will become fullstack developer');
  i -= 2;
}


// Challenge 6
// Odd even numbers
console.log('\n');
console.log('Odd even numbers challenge:');
console.log('OUTPUT:\n--------');
for (let i = 1; i <= 100; i += 3) {
  console.log(i + (i % 2 == 1 ? ' - ganjil' : ' - genap'));
}
console.log('OUTPUT:\n--------');
for (let i = 50; i <= 200; i += 5) {
  console.log(i + (i % 3 !== 0 ? ' - tidak bisa dibagi 3' : ' - faktor 3'));
}
console.log('OUTPUT:\n--------');
for (let i = 100; i <= 200; i += 7) {
  i % 8 !== 0 ? {} : console.log(i);
}


// Challenge 7
// Pasangan angka terbesar
console.log('\n');
console.log('Pasangan angka terbesar:');
var angka = 79918293;
var angkaString = angka.toString();
var biggestAngka = 0;
for (let i = 0; i < angkaString.length - 1; i++) {
  let windowedAngkaString = Number(angkaString[i] + angkaString[i + 1]);
  biggestAngka = windowedAngkaString > biggestAngka ? Number(windowedAngkaString) : biggestAngka;
}
console.log(biggestAngka);


// Challenge 8
// Ubah huruf
console.log('\n');
console.log('Ubah huruf:');
var kata = 'i love javascript';
var kataclone = kata;
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}
for (let i = 0; i < kata.length; i++) {
  switch (kata[i]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      kata = kata.substring(0, i) + '$' + kata.substring(i + 1, kata.length);
  }
}
console.log(kata);