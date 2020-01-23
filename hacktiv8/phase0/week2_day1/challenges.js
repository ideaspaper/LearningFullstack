// Challenge 1
// Asteriks looping
console.log('Asteriks looping challenge:');
let rows1 = 5;
console.log('rows1: ' + rows1);
for (let i = 0; i < rows1; i++) {
  console.log('*');
}
let rows2 = 5;
console.log('rows2: ' + rows2);
for (let i = 0; i < rows1; i++) {
  for (let j = 0; j < rows2; j++) {
    process.stdout.write('*');
  }
  console.log();
}
let rows3 = 5;
console.log('rows3: ' + rows3);
for (let i = 0; i < rows3; i++) {
  for (let j = 5; j > i; j--) {
    process.stdout.write('*');
  }
  console.log();
}
let rows4 = 5;
console.log('rows4: ' + rows4);
for (let i = 0; i < rows4; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write('*');
  }
  console.log();
}


// Challenge 2
// Balik kata
console.log('\n');
console.log('Balik kata challenge:');
let stringToReverse = 'Hacktiv8';
console.log(stringToReverse[0]);
for (let i = stringToReverse.length - 1; i >= 0; i--)
  process.stdout.write(stringToReverse[i]);


// Challenge 3
// Bandingkan angka
console.log('\n');
console.log('Bandingkan angka challenge:');
let angka1 = 4;
let angka2 = 4;
if (angka1 > angka2) {
  console.log('false');
} else if (angka1 < angka2) {
  console.log('true');
} else {
  console.log(-1);
}


// Challenge 4
// Konversi menit
console.log('\n');
console.log('Konversi menit challenge:');
let detik = 121;
console.log(Math.floor(detik / 60) + ':' + ((detik % 60) < 10 ? ('0' + (detik % 60)) : (detik % 60)));


// Challenge 5
// X dan O
console.log('\n');
console.log('X dan O challenge:');
let kata = 'xoxo';
let countX = 0;
let countO = 0;
for (let i = 0; i < kata.length; i++) {
  kata[i] === 'x' ? countX++ : {};
  kata[i] === 'o' ? countO++ : {};
}
countX === countO ? console.log('true') : console.log('false');


// Challenge 6
// Triangle
console.log('\n');
console.log('Triangle challenge:');
let num = 5;
for (let i = 0; i < num; i++) {
  //// Space
  for (let j = 0; j < (num - 1) - i; j++) {
    process.stdout.write(' ');
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    k % 2 === 0 ? process.stdout.write('x') : process.stdout.write('o');
  }
  console.log();
}