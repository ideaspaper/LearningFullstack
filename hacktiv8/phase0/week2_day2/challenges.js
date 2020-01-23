// Challenge 1
// Data type
console.log('Data type challenge:');
let input = 'budi';
if (typeof (input) === typeof ('')) {
  if (input.length == 0) {
    console.log('Invalid data');
  } else {
    console.log('username ' + input)
  }
} else if (typeof (input) === typeof (0)) {
  if (input === 0) {
    console.log('Invalid data');
  } else {
    console.log('age ' + input);
  }

} else if (typeof (input) === 'undefined') {
  console.log('Invalid data');
}


// Challenge 2
// Menghitung jumlah kata
console.log('\n');
console.log('Menghitung jumlah kata challenge:');
let kalimat = 'I believe I can code';
console.log(kalimat.split(' ').length);


// Challenge 3
// Menghitung jumlah kata
console.log('\n');
console.log('Palindrome challenge:');
let word = 'katak';
let wordReverse = '';
for (let i = word.length - 1; i >= 0; i--) {
  wordReverse += word[i];
}
word === wordReverse ? console.log('true') : console.log('false');


// Challenge 4
// Palindrome angka
console.log('\n');
console.log('Palindrome angka challenge:');
function palindrome(inNum) {
  return parseInt(inNum.toString().split('').reverse().join('')) === inNum ? true : false;
}
let inputNumber = 10;
let inputNumberReverse = '';
while (true) {
  if (palindrome(inputNumber)) {
    console.log(inputNumber);
    break;
  }
  inputNumber++;
}