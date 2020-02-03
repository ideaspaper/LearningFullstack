/**

 * 
 * ================
 * 2 Digit Oddities
 * ================
 * 
 * '1234987566710'
 * 
 * 
 * Pada program ini, kalian harus mengimplementasikan function oddFinder() yang menerima input berupa 'string' berisi angka.
 * String ini pasti diisi oleh angka dan tidak akan diisi oleh huruf/karakter lainnya.
 * Untuk setiap angka 2 digit yang bisa dibentuk dari kiri ke kanan, carilah angka ganjil yang paling besar.
 * Jika tidak ada angka ganjil di dalam string tersebut, maka function akan return 'Tidak ada yang ganjil'
 * 
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN METHOD / FUNCTION KECUALI Number .parseInt
 * - HARUS MENULIS PSEUDOCODE / ALGORITMA, TIDAK MENULIS = 0!
     */


/*
PSEUDOCODE

INIT ganjilTerbesar as 0
INIT stringArr as convertToArray(string)
FOR i = 0, i < LENGTH OF stringArr - 1, i++
  SET temp as NUMBER OF (CONCATENATE(stringArr[i], stringArr[i + 1]))
  IF temp MOD 2 = 1
    IF ganjilTerbesar < temp
      ganjilTerbesar = temp

IF ganjilTerbesar = 0
  RETURN 'Tidak ada yang ganjil'
ELSE
  return ganjilTerbesar
*/

function oddFinder(string) {
  //tulis kode disini
  let ganjilTerbesar = 0;
  let stringArr = string.split('');
  for (let i = 0; i < stringArr.length - 1; i++) {
    let temp = Number(stringArr[i] + stringArr[i + 1]);
    temp % 2 === 1 ? ganjilTerbesar < temp ? ganjilTerbesar = temp : {} : {};
  }
  return ganjilTerbesar === 0 ? 'Tidak ada yang ganjil' : ganjilTerbesar;
}


console.log(oddFinder('1234987566710')); //87
console.log(oddFinder('246804422')); //Tidak ada yang ganjil