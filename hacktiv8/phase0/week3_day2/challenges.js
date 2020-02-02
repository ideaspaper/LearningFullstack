// Challenge 11
// Deep sum
console.log('Deep sum challenge:');
function deepSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        total += arr[i][j][k];
      }
    }
  }
  return total === 0 ? 'No number' : total;
}
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316
console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156
console.log(deepSum([])); // No number


// Challenge 2
// Most frequest largest number
console.log('\n');
console.log('Most frequent largest number challenge:');
function sorting(arrNumber) {
  return arrNumber;
}
function getTotal(arrNumber) {
  let hashTable = [[], []];
  for (let i = 0; i < arrNumber.length; i++) {
    if (hashTable[0].includes(arrNumber[i])) {
      hashTable[1][hashTable[0].indexOf(arrNumber[i])]++;
    } else {
      hashTable[0].push(arrNumber[i]);
      hashTable[1].push(1);
    }
  }
  let largestValue = 0;
  for (let i = 0; i < hashTable[0].length; i++) {
    largestValue < hashTable[0][i] ? largestValue = hashTable[0][i] : {};
  }
  return arrNumber.length !== 0 ? 'angka paling besar adalah ' + largestValue + ' dan jumlah kemunculan sebanyak ' + hashTable[1][hashTable[0].indexOf(largestValue)] + ' kali' : '';
}
function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
console.log(mostFrequentLargestNumbers([]));
//''


// Challenge 3
// Melee ranged
console.log('\n');
console.log('Melee ranged challenge:');
function splitting(str) {
  return str.split(',');
}
function meleeRangedGrouping(str) {
  let heroes = [[], []];
  let strSplitComma = splitting(str);
  for (let i = 0; i < strSplitComma.length; i++) {
    let strSplitDash = strSplitComma[i].split('-');
    strSplitDash[1] === 'Ranged' ? heroes[0].push(strSplitDash[0]) : heroes[1].push(strSplitDash[0]);
  }
  return str.length === 0 ? [] : heroes;
}
// console.log(splitting('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []


// Challenge 4
// Damage calculation
console.log('\n');
console.log('Damage calculation challenge:');
function attack(damage) {
  return damage - 2;
}
function damageCalculation(numberOfAttacks, damagePerAttack) {
  let damageTotal = 0;
  for (let i = 0; i < numberOfAttacks; i++) {
    damageTotal += attack(damagePerAttack);
  }
  return damageTotal;
}
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90