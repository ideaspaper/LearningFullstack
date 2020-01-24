// Challenge 1
// Deret geometri
console.log('Deret geometri challenge:');
function tentukanDeretGeometri(arr) {
  let mull = undefined;
  for (let i = 0; i < arr.length - 1; i++) {
    let mullTemp = arr[i + 1] / arr[i];
    if (mull === undefined) {
      mull = mullTemp;
    } else {
      if (mullTemp !== mull) {
        return false;
      }
    }
  }
  return true;
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


// Challenge 2
// Target terdekat
console.log('\n');
console.log('Target terdekat challenge:');
function targetTerdekat(arr) {
  let xLoc = [];
  let oLoc = 0;
  let result = arr.length;
  for (let i = 0; i < arr.length; i++) {
    arr[i] === 'x' ? xLoc.push(i) : {};
    arr[i] === 'o' ? oLoc = i : {};
  }
  for (let i = 0; i < xLoc.length; i++) {
    absDistance = Math.abs(xLoc[i] - oLoc);
    result > absDistance ? result = absDistance : {};
  }
  return xLoc.length === 0 ? 0 : result;
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


// Challenge 3
// Mengelompokkan angka
console.log('\n');
console.log('Mengelompokkan angka challenge:');
function mengelompokkanAngka(arr) {
  let result = [[], [], []];
  count = 0;
  let limloop = arr.length;
  for (let i = 0; i < limloop; i++) {
    if (arr[i - count] % 3 === 0) {
      result[2].push(arr[i - count]);
      arr.shift();
      count++;
    } else if (arr[i - count] % 2 === 1) {
      result[1].push(arr[i - count]);
      arr.shift();
      count++;
    } else if (arr[i - count] % 2 === 0) {
      result[0].push(arr[i - count]);
      arr.shift();
      count++;
    }
  }
  return result;
}
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// Challenge 4
// Tabel perkalian
console.log('\n');
console.log('Tabel perkalian challenge:');
function tabelPerkalian(angka) {
  let result = []
  let lastMultiplier = undefined;
  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      let multiplicand = Math.floor(angka / i);
      if (lastMultiplier !== multiplicand) {
        lastMultiplier = i;
      } else {
        break;
      }
      result.push(i.toString() + 'x' + multiplicand.toString());
    }
  }
  return result;
}
console.log(tabelPerkalian(24)); // [ '1x24', '2x12', '3x8', '4x6' ]
console.log(tabelPerkalian(90)); // [ '1x90', '2x45', '3x30', '5x18', '6x15', '9x10' ]
console.log(tabelPerkalian(20)); // [ '1x20', '2x10', '4x5']
console.log(tabelPerkalian(179)); // [ '1x179' ]
console.log(tabelPerkalian(1)); // [ '1x1' ]


// Challenge 5
// Password generator
console.log('\n');
console.log('Password generator challenge:');
function changeVocals(str) {
  let vocal =    ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let vocalSub = ['b', 'f', 'j', 'p', 'v', 'B', 'F', 'J', 'P', 'V'];
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    let index = vocal.indexOf(strArr[i]);
    index === -1 ? {} : strArr[i] = vocalSub[index];
  }
  return strArr.join('');
}
function reverseWord(str) {
  let strArr = [];
  for (let i = 0; i <= str.length; i++) {
    strArr.push(str[str.length - i]);
  }
  return strArr.join('');
}
function setLowerUpperCase(str) {
  let strArr = str.split('');
  for (let i = 0; i < str.length; i++) {
    strArr[i] == strArr[i].toUpperCase() && strArr[i] != strArr[i].toLowerCase() ? strArr[i] = strArr[i].toLowerCase() : strArr[i] = strArr[i].toUpperCase();
  }
  return strArr.join('');
}
function removeSpaces(str) {
  return str.split(' ').join('');
}
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'