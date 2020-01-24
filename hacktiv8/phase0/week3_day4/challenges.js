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
