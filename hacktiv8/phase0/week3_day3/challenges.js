// Challenge 1
// Change Me!
console.log('Change Me! challenge:');
function changeMe(arr) {
  let temp = {};
  for (let i = 0; i < arr.length; i++) {
    console.log((i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');
    temp['firstName'] = arr[i][0];
    temp['lastName'] = arr[i][1];
    temp['gender'] = arr[i][2];
    temp['age'] = arr[i][3] === undefined ? 'Invalid Birth Year' : 2020 - arr[i][3];
    console.log(temp);
  }
  if (arr.length === 0) {
    console.log('');
  }
}
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""


// Challenge 2
// Count me!
console.log('\n');
console.log('Count Me! challenge:');
function countMe(input) {
  let hashTable = [[], []];
  let strOut = '';
  for (let i = 0; i < input.length; i++) {
    if (hashTable[0].includes(input[i])) {
      hashTable[1][hashTable[0].indexOf(input[i])]++;
    } else {
      hashTable[0].push(input[i]);
      hashTable[1].push(1);
    }
  }
  let temp = {};
  for (let i = 0; i < hashTable[0].length; i++)
    temp[hashTable[0][i]] = hashTable[1][i];
  return temp;
}
console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
// { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }
console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }


// Challenge 3
// Highest score
console.log('\n');
console.log('Highest score challenge:');
function highestScore(students) {
  let temp = {};
  for (let i = 0; i < students.length; i++) {
    if (!(students[i].class in temp)) {
      temp[students[i].class] = {};
    }
  }
  for (let i = 0; i < students.length; i++) {
    if (Object.keys(temp[students[i].class]).length === 0) {
      temp[students[i].class]['name'] = students[i].name;
      temp[students[i].class]['score'] = students[i].score;
    }
    else if (temp[students[i].class]['score'] < students[i].score) {
      temp[students[i].class]['name'] = students[i].name;
      temp[students[i].class]['score'] = students[i].score;
    }
  }
  return temp;
}
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));
// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));
// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
console.log(highestScore([])); //{}


// Challenge 4
// Graduates
console.log('\n');
console.log('Graduates challenge:');
function graduates (students) {
  let temp = {};
  for (let i = 0; i < students.length; i++) {
    if (!(students[i].class in temp)) {
      temp[students[i].class] = [];
    }
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 75) {
      temp[students[i].class].push({'name':students[i].name, 'score':students[i].score});
    }
  }
  return temp;
}
console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));
// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }
console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));
// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }
console.log(graduates([])); //{}