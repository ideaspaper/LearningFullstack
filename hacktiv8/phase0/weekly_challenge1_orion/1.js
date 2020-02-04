/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
 */

/*
PSEUDOCODE

INIT steps TO USER_INPUT
INIT mine TO USER_INPUT
INIT results TO EMPTY_ARRAY
FOR i = 0 AND i < mine.length INCR i BY 1
  FOR j = 0 AND j < mine[i].length INCR j BY 1
    IF mine[i][j] NOT EQUAL TO '#'
      INIT exists TO ''
      SWITCH mine[i][j]
        CASE 'c'
          SET exists TO 'copper'
          BREAK;
        CASE 's'
          SET exists TO 'silver'
          BREAK;
        CASE 'g'
          SET exists TO 'gold'
          BREAK;
        CASE 'd'
          SET exists TO 'diamond'
          BREAK;
      IF (results.length EQUAL TO 0) OR (call(isResultExist(exists)) EQUAL TO FALSE)
        call(pushMineResult(mine[i][j], results))
      ELSE
        results[exists][0]++
    SET mine[i][j] = ' '
    steps--
    IF steps < 0
      BREAK;
RETURN results
*/


function pushMineResult(input, array) {
  switch (input) {
    case 'c':
      array.push([1, 'copper']);
      break;
    case 's':
      array.push([1, 'silver']);
      break;
    case 'g':
      array.push([1, 'gold']);
      break;
    case 'd':
      array.push([1, 'diamond']);
      break;
  }
}

function isResultExist(input, array) {
  for (k = 0; k < array.length; k++) {
    if (array[k][1] === input) {
      return k;
    }
  }
  return false;
}

function mineTycoon(mine, steps) {
  //implementasi function disini!
  let results = [];
  for (let i = 0; i < mine.length; i++) {
    for (let j = 0; j < mine[i].length; j++) {
      if (mine[i][j] !== '#') {
        let exists = isResultExist((mine[i][j] === 'c' ? 'copper' : mine[i][j] === 's' ? 'silver' : mine[i][j] === 'g' ? 'gold' : mine[i][j] === 'd' ? 'diamond' : {}), results);
        if (results.length === 0 || exists === false) {
          pushMineResult(mine[i][j], results);
        } else {
          results[exists][0]++;
        }
      }
      mine[i][j] = ' ';
      steps--;
      if (steps < 0) {
        break;
      }
    }
  }
  return results;
}

var mine1 = [
  ['#', 'h', 's', '#', '#', '#', 'g'],
  ['u', '#', 'c', '#', 'd', '#', '#'],
  ['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
  ['#', '#', '#', '#', '#', 'w', '#'],
  ['r', '#', 'c', '#', 'd', '#', '#'],
  ['#', 't', '#', 'c', '#', '#', '#'],
  ['#', '#', 's', 'g', '#', '#', '#'],
  ['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
  ['d', 'c', '#', 's', '#', 'w', '#'],
  ['r', 'b', 'c', '#', '#', '#', 'g'],
  ['#', 't', '#', 'c', '#', '#', '#'],
  ['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]