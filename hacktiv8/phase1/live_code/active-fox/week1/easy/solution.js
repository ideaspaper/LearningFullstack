function drawMagnetic(inStr) {
  inArr = inStr.split('');
  let hashTable = { 'm': [], 'i': [], '-': [] };
  for (let i = 0; i < inArr.length; i++) {
    hashTable[inArr[i]].push(i);
  }
  for (let i = 0; i < hashTable['i'].length; i++) {
    for (let j = 0; j < hashTable['m'].length - 1; j++) {
      if (hashTable['i'][i] >= hashTable['m'][j] && hashTable['i'][i] <= hashTable['m'][j + 1]) {
        let leftSide = Math.abs(hashTable['m'][j] - hashTable['i'][i]);
        let rightSide = Math.abs(hashTable['m'][j + 1] - hashTable['i'][i]);
        if (leftSide < rightSide) {
          if (leftSide <= 3) {
            hashTable['i'][i] = hashTable['m'][j] + 1;
          }
        } else if (leftSide > rightSide) {
          if (rightSide <= 3) {
            hashTable['i'][i] = hashTable['m'][j + 1] - 1;
          }
        }
      }
      else {
        if (hashTable['i'][i] < hashTable['m'][0]) {
          if (Math.abs(hashTable['i'][i] - hashTable['m'][j]) <= 3) {
            hashTable['i'][i] = hashTable['m'][j] - 1;
          }
        } else if (hashTable['i'][i] > hashTable['m'][hashTable['m'].length - 1]) {
          if (Math.abs(hashTable['i'][i] - hashTable['m'][hashTable['m'].length - 1]) <= 3) {
            hashTable['i'][i] = hashTable['m'][hashTable['m'].length - 1] + 1;
          }
        }
      }
    }
  }
  let output = [];
  for (let i = 0; i < inArr.length; i++)
    output.push('-');
  for (let i = 0; i < hashTable['i'].length; i++)
    output[hashTable['i'][i]] = 'i';
  for (let i = 0; i < hashTable['m'].length; i++)
    output[hashTable['m'][i]] = 'm';
  return output.join('');
}

console.log(drawMagnetic('m--i-m-i--m--i--m--'))
// m---imi---m--i--m--