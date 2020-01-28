let moneyDictionaries = {
  100000: 1,
  50000: 3,
  20000: 0,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
}

function getMoneyChange(input) {
  let moneyDictionariesTemp = {...moneyDictionaries}; // the same as Object.assign({}, moneyDictionaries)
  let moneyKeys = Object.keys(moneyDictionariesTemp);
  let changes = [];
  for (let i = moneyKeys.length - 1; i >=0; i--) {
    while(input >= moneyKeys[i] && moneyDictionariesTemp[moneyKeys[i]] > 0) {
      changes.push(moneyKeys[i]);
      moneyDictionariesTemp[moneyKeys[i]]--;
      input -= moneyKeys[i];
    }
  }

  let changesDict = {};
  changes.forEach((change) => {
    if (!changesDict[change]) {
      changesDict[change] = 0;
    }
    changesDict[change]++;
  });

  if (input > 0) {
    console.log('Pecahan uang tidak cukup');
  } else {
    for (let i in changesDict) {
      console.log(`${i} ${changesDict[i]} lembar`);
    }
    moneyDictionaries = Object.assign({}, moneyDictionariesTemp);
  }
}

getMoneyChange(175000);
getMoneyChange(25000);
getMoneyChange(175000);

console.log(moneyDictionaries);