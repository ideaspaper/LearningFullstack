class NormalBeverage {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class CaffeinatedBeverage extends NormalBeverage {
  constructor(name, price, caffeineMg) {
    super(name, price);
    this.caffeineMg = caffeineMg;
  }
}

function Beverage(type, name) {
  switch (type) {
    case 'Coke':
      return new NormalBeverage(name, 15000);
    case 'Coffee':
      return new CaffeinatedBeverage(name, 18500, 40);
    case 'Tea':
      return new CaffeinatedBeverage(name, 5000, 11);
  }
}

class VendingMachine {
  constructor() {
    this._saldo = 0;
    this._minuman = {};
    this._pecahanUang = { 100000: 0, 50000: 0, 20000: 0, 10000: 0, 5000: 0, 1000: 0, 500: 0 };
  }

  getMoneyChange(input) {
    let moneyDictionariesTemp = {...this._pecahanUang}; // the same as Object.assign({}, moneyDictionaries)
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
      let outputString = 'Pecahan uang tidak cukup';
      return [false, outputString];
    } else {
      let outputString = '';
      for (let i in changesDict) {
        outputString += (`${i} ${changesDict[i]} lembar\n`);
      }
      this._pecahanUang = Object.assign({}, moneyDictionariesTemp);
      return [true, outputString];
    }
  }

  refill(input) {
    for (let index in input) {
      if (index === 'Coke' || index === 'Tea' || index === 'Coffee') {
        index in this._minuman ? {} : this._minuman[index] = [];
        for (let i = 0; i < input[index]; i++)
          this._minuman[index].push(Beverage(index, index));
      } else {
        console.log(`${index} is not a valid input`);
      }
    }
  }

  beliMinuman(input) {
    if (this._saldo < 5000) {
      console.log('Sorry, insufficient balance');
      return -3;
    } else {
      if (!(input in this._minuman)) {
        console.log(`Sorry, ${input} is unavailable for this Vending Machine`);
        return -1;
      }
      if (this._minuman[input].length === 0) {
        console.log(`Sorry, ${input} is out of stock`);
        return -2;
      }
      if (this._minuman[input][0]['price'] > this._saldo) {
        console.log('Sorry, insufficient balance');
        return -3;
      }
    }
    let getMoneyChangeReturn = this.getMoneyChange(this._saldo - this._minuman[input][0]['price']);

    let output = '';
    if (getMoneyChangeReturn[0]) {
      this._minuman[input].shift();
      output = `Enjoy your drink: ${input}.\n`;
      output += 'Your change(s):\n';
      output += getMoneyChangeReturn[1];
    }
    else {
      output = getMoneyChangeReturn[1];
    }
    console.log(output);
    return 1;
  }

  set inputUang(input) {
    input >= 5000 ? this._saldo = input : console.log('Balance input is too small');
  }

  set pecahanUang(input) {
    let nominalUang = 0;
    let lembarUang = 1;
    let inputArr = input.split(';');
    for (let index in inputArr) {
      this._pecahanUang[inputArr[index].split('=')[nominalUang]] += Number(inputArr[index].split('=')[lembarUang]);
    }
  }

  get pecahanUang() {
    return this._pecahanUang;
  }
}


let vendingMachine = new VendingMachine();
vendingMachine.pecahanUang = '100000=5;50000=5;20000=5;10000=5;5000=5;1000=5;500=5';
vendingMachine.refill({ Coke: 1, Tea: 1, Coffee: 1 });
vendingMachine.inputUang = 4000;
vendingMachine.beliMinuman('Coffee');