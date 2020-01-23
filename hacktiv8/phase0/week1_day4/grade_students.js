var name = 'Budi';
var grade = 75;
var gradeLetter = '';

if (80 <= grade && 100 >= grade) {
  gradeLetter = 'A';
}
else if (65 <= grade && 79 >= grade) {
  gradeLetter = 'B';
}
else if (50 <= grade && 64 >= grade) {
  gradeLetter = 'C';
}
else if (35 <= grade && 49 >= grade) {
  gradeLetter = 'D';
}
else if (0 <= grade && 34 >= grade) {
  gradeLetter = 'E';
}

console.log(name + ': ' + gradeLetter);