// Challenge 1
// Angka prima!
console.log('Angka prima! challenge:');
function angkaPrima(angka) {
  // you can only write your code here!
  if (angka <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(Math.ceil(angka)); i++) {
    if (angka % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false


// Challenge 2
// Cari median!
console.log('\n');
console.log('Cari median! challenge:');
function cariMedian(arr) {
  return arr.length % 2 === 1 ? arr[Math.floor(arr.length / 2)] : ((arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2);
}
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5


// Challenge 3
// Cari modus!
console.log('\n');
console.log('Cari modus! challenge:');
function cariModus(arr) {
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hashTable)) hashTable[arr[i]] = 1;
    else hashTable[arr[i]]++;
  }
  let modus = undefined;
  for (let prop in hashTable) modus === undefined ? modus = prop : hashTable[prop] > hashTable[modus] ? modus = prop : {};
  return hashTable[modus] === 1 ? -1 : Object.keys(hashTable).length === 1 ? -1 : modus;
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

// Challenge 4
// Mengelompokkan hewan!
console.log('\n');
console.log('Mengelompokkan hewan! challenge:');
function groupAnimals(animals) {
  for (let i = 0; i < animals.length; i++) {
    let swapped = false;
    for (let j = 0; j < animals.length - 1; j++) {
      if (animals[j] > animals[j + 1]) {
        [animals[j], animals[j + 1]] = [animals[j + 1], animals[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  let hashTable = {};
  for (let i = 0; i < animals.length; i++) {
    if (!(animals[i][0] in hashTable)) hashTable[animals[i][0]] = [animals[i]];
    else hashTable[animals[i][0]].push(animals[i]);
  }
  let result = [];
  for (var prop in hashTable) result.push(hashTable[prop]);
  return result;
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]