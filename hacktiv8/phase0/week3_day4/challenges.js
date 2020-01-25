// Challenge 1
// Shopping time!
console.log('Shopping time! challenge:');
function shoppingTime(memberId, money) {
  let saleGoods = { 'Sepatu Stacattu': 1500000, 'Baju Zoro': 500000, 'Baju H&N': 250000, 'Sweater Uniklooh': 175000, 'Casing Handphone': 50000 };
  let result = {};
  if (memberId === undefined || memberId.length === 0) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money === undefined || money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }
  result['memberId'] = memberId;
  result['money'] = money;
  let shopList = [];
  let moneyLeft = money;
  for (const key in saleGoods) {
    if (moneyLeft >= saleGoods[key]) {
      moneyLeft -= saleGoods[key];
      shopList.push(key);
    }
  }
  result['listPurchased'] = shopList;
  result['changeMoney'] = moneyLeft;
  return result;
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


// Challenge 2
// Toko X
console.log('\n');
console.log('Toko X challenge:');
function countProfit(shoppers) {
  let listBarang = [['Sepatu Stacattu', 1500000, 10],
  ['Baju Zoro', 500000, 2],
  ['Sweater Uniklooh', 175000, 1]
  ];
  // you can only write your code here!
  if (shoppers.length === 0) {
    return '[]';
  }
  let productName = 0;
  let productPrice = 1;
  let productQty = 2;
  let report = [];
  for (let i = 0; i < listBarang.length; i++) {
    report.push({ 'product': listBarang[i][productName], 'shoppers': [], 'leftOver': listBarang[i][productQty], 'totalProfit': 0 });
  }
  for (let i = 0; i < shoppers.length; i++) {
    for (let j = 0; j < report.length; j++) {
      if (shoppers[i]['product'] === report[j]['product']) {
        if (shoppers[i]['amount'] <= report[j]['leftOver']) {
          report[j]['shoppers'].push(shoppers[i]['name']);
          report[j]['leftOver'] -= shoppers[i]['amount'];
          report[j]['totalProfit'] += shoppers[i]['amount'] * listBarang[j][productPrice];
        }
      }
    }
  }
  return report;
}
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]