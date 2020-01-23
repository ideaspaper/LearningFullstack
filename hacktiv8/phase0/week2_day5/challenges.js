// Challenge 1
// Slice and dice!
console.log('Slice and dice! challenge:');
function slice(data, start, end) {
  if (start === undefined) {
    return data;
  } else if (start > data.length) {
    return [];
  }
  return data.slice(start, end);
}
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); // []


// Challenge 2
// Interesting ladder array multidimensi
console.log('\n');
console.log('Interesting Ladder Array Multidimensi challenge:');
let inKata = 'hacktiv8';
function ladder(word) {
  let wordArr = word.split('');
  let tempArr = [];
  for (let i = 0; i < word.length; i++) {
    tempArr.push(inKata.split('').slice(0, word.length - i));
  }
  return tempArr;
}
console.log(ladder(inKata));


// Challenge 3
// Vocal seeker
console.log('\n');
console.log('Vocal seeker challenge:');
function vocalSeeker(inBoard) {
  let vocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;
  let found = '';
  for (let i = 0; i < inBoard.length; i++) {
    for (let j = 0; j < inBoard[i].length; j++) {
      if (vocals.includes(inBoard[i][j])) {
        found += inBoard[i][j];
        count++;
      }
    }
  }
  return 'Vokal ditemukan ' + count + ' dan kumpulan vokal adalah ' + found;
}
let board = [
  ['*', '*', '*', 10],
  ['*', '*', -5, -10, '*', 100],
  ['a', 'A', 'o', 'b']
];
console.log(vocalSeeker(board));


// Challenge 4
// Sitting arrangement
console.log('\n');
console.log('Sitting arrangement challenge:');
function sittingArrangement(person, column) {
  let tempArr = [];
  let tempSmallArr = [];
  if (column <= 0) {
    return 'Invalid number';
  }
  let looplim = Math.ceil(person.length / column);
  for (let i = 0; i < looplim; i++) {
    tempSmallArr = [];
    for (let j = 0; j < column; j++) {
      let getPerson = person.shift();
      if (getPerson === undefined) {
        tempSmallArr.push('Kursi Kosong');
      } else {
        tempSmallArr.push(getPerson);
      }
    }
    tempArr.push(tempSmallArr);
  }
  return tempArr;
}
console.log(sittingArrangement(['A', 'B', 'C'], 0)); //Invalid number
console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4)); // [ [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ], [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ] ]


// Challenge 5
// Urutkan abjad
console.log('\n');
console.log('Urutkan abjad challenge:');
function urutkanAbjad(c) {
  let cArr = c.split('');
  for (let i = 0; i < c.length; i++) {
    let swapped = false;
    for (let j = 0; j < c.length - 1; j++) {
      if (cArr[j] > cArr[j + 1]) {
        [cArr[j], cArr[j + 1]] = [cArr[j + 1], cArr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return cArr.join('');
}
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'


// Challenge 6
// Tukar ukuran
console.log('\n');
console.log('Tukar ukuran challenge:');
function isUpper(c) {
  return c == c.toUpperCase() && c != c.toLowerCase();
}
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
function tukarBesarKecil(kalimat) {
  let kalimatArr = kalimat.split('');
  for (let i = 0; i < kalimat.length; i++) {
    isLetter(kalimatArr[i]) ? isUpper(kalimatArr[i]) ? kalimatArr[i] = kalimatArr[i].toLowerCase() : kalimatArr[i] = kalimatArr[i].toUpperCase() : {};
  }
  return kalimatArr.join('');
}
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


// Challenge 7
// Sorting!
console.log('\n');
console.log('Sorting! challenge:');
function sorting(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}
console.log(sorting([2, 4, 6, 8, 2, 3])); // [ 2, 2, 3, 4, 6, 8 ]
function sortingByType(array) {
  let arrayType = [];
  let arrayReturn = [];
  for (let i = 0; i < array.length; i++) {
    if (!arrayType.includes(typeof (array[i]))) {
      arrayType.push(typeof (array[i]));
    }
  }
  for (let i = 0; i < arrayType.length; i++) {
    arrayReturn.push([]);
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arrayReturn.length; j++) {
      if (arrayReturn[j].length === 0) {
        arrayReturn[j].push(array[i]);
        break;
      } else if (typeof (arrayReturn[j][0]) === typeof (array[i])) {
        arrayReturn[j].push(array[i]);
        break;
      }
    }
  }
  for (let i = 0; i < arrayReturn.length; i++) {
    arrayReturn[i] = sorting(arrayReturn[i]);
  }
  return arrayReturn;
}
console.log(sortingByType([1, 3, 'array', -45, true, false, 'big'])); // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
function sortAllClean(array) {
  let limloop = array.length;
  let count = 0;
  for (let i = 0; i < limloop; i++) {
    if (typeof (array[i - count]) === 'undefined' ||
      array[i - count] === null ||
      array[i - count].toString() === NaN.toString() ||
      Array.isArray(array[i - count]) && (array[i - count].length === 0)) {
      array.splice(i - count, 1);
      count++;
    }
  }
  return sortingByType(array.length === 1 ? array[0] === undefined ? [] : array : array);
}
console.log(sortAllClean([undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false])); // [ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
console.log(sortAllClean([NaN, undefined])); // []