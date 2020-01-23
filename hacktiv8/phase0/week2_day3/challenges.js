// Challenge 1
// Shape of I
console.log('Shape of I challenge:');
let num = 7;
if (num >= 4 && num <= 10) {
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === num - 1) {
      for (let i = 0; i < num; i++) {
        process.stdout.write('#');
      }
    } else {
      let j = 0;
      if (num % 2 === 1) {
        j = (num - 1) / 2;
      } else {
        j = (num / 2) - 1;
      }
      for (k = 0; k < j; k++) {
        process.stdout.write(' ');
      }
      for (k = 0; k < (num % 2 === 0 ? 2 : 1); k++) {
        process.stdout.write('|');
      }
    }
    console.log();
  }
} else {
  console.log('Invalid number');
}


// Challenge 2
// Interesting ladder
console.log('\n');
console.log('Interesting ladder challenge:');
let word = 'hacktiv8';
for (let i = word.length - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    process.stdout.write(' ');
  }
  let temp = word.slice(i);
  if (i % 2 === 0) {
    console.log(word.slice(i));
  } else {
    console.log(word.slice(i).split('').reverse().join(''));
  }
}