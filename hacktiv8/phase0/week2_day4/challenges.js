// Challenge 1
// Mengenal penggunaan function 1
console.log('Mengenal penggunaan function 1 challenge:');
function shoutOut() {
  return 'Halo function!'
}
console.log(shoutOut());


// Challenge 2
// Mengenal penggunaan function 2
console.log('\n');
console.log('Mengenal penggunaan function 2 challenge:');
function calculateMultiply(in1, in2) {
  return in1 * in2;
}
let num1 = 5;
let num2 = 6;
let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);


// Challenge 3
// Mengenal penggunaan function 3
console.log('\n');
console.log('Mengenal penggunaan function 3 challenge:');
function processSentence(name, age, address, hobby) {
  return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);


// Challenge 4
// Built in function
console.log('\n');
console.log('Mengenal penggunaan function 3 challenge:');
let arrayInput = ['Budi', 'Sitorus'];
function antrian(line, person) {
  line.push(person);
}
function panggilAntrian(line) {
  line.shift();
  return line;
}
function tumpukan(line, title) {
  line.unshift(line, title);
  return line;
}
antrian(arrayInput, 'Acong');
console.log(arrayInput);
console.log(panggilAntrian(arrayInput));
console.log(tumpukan(arrayInput, 'title'));