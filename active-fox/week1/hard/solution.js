function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do currentDate = Date.now();
  while (currentDate - date < milliseconds);
}

function crossingRiver(width, length, firstRiver, secondRiver) {
  let area = [];
  if (firstRiver < 2 || secondRiver < 2 || firstRiver === length || secondRiver === length || firstRiver === secondRiver) {
    console.log('River not valid');
    return;
  }
  firstRiver > secondRiver ? [firstRiver, secondRiver] = [secondRiver, firstRiver] : {};
  for (let i = 0; i < width; i++) {
    let row = [];
    for (let j = 0; j < length; j++) {
      if (j === firstRiver - 1 || j === secondRiver - 1) row.push('| |');
      else row.push(' ');
    }
    area.push(row);
  }
  let catPos = Math.floor(Math.random() * Math.floor(width));
  let firstBridge = 0;
  let secondBridge = 0;
  area[catPos][0] = 'o';
  if (Math.abs(firstRiver - secondRiver) === 1) {
    firstBridge = Math.floor(Math.random() * Math.floor(width));
    secondBridge = firstBridge;
    area[firstBridge][firstRiver - 1] = '===';
    area[secondBridge][secondRiver - 1] = '===';
  } else {
    firstBridge = Math.floor(Math.random() * Math.floor(width));
    secondBridge = Math.floor(Math.random() * Math.floor(width));
    area[firstBridge][firstRiver - 1] = '===';
    area[secondBridge][secondRiver - 1] = '===';
  }
  let limLoop = Math.abs(firstBridge - catPos);
  for (let i = 0; i < limLoop; i++) {
    if (firstBridge > catPos) {
      area[catPos][0] = ' ';
      catPos++;
      area[catPos][0] = 'o';
    } else if (firstBridge < catPos) {
      area[catPos][0] = ' ';
      catPos--;
      area[catPos][0] = 'o';
    }
    console.clear();
    console.log(area);
    sleep(300);
  }
  limLoop = firstRiver;
  for (let i = 0; i < limLoop; i++) {
    area[catPos][i + 1] !== '===' ? (area[catPos][i + 1] = 'o') : (area[catPos][i + 1] = '=o=');
    area[catPos][i] === 'o' ? (area[catPos][i] = ' ') : (area[catPos][i] = '===');
    console.clear();
    console.log(area);
    sleep(300);
  }
  limLoop = Math.abs(secondBridge - catPos);
  for (let i = 0; i < limLoop; i++) {
    if (secondBridge > catPos) {
      area[catPos][firstRiver] = ' ';
      catPos++;
      area[catPos][firstRiver] = 'o';
    } else if (secondBridge < catPos) {
      area[catPos][firstRiver] = ' ';
      catPos--;
      area[catPos][firstRiver] = 'o';
    }
    console.clear();
    console.log(area);
    sleep(300);
  }
  limLoop = secondRiver;
  for (let i = firstRiver; i < limLoop; i++) {
    area[catPos][i + 1] !== '===' ? (area[catPos][i + 1] = 'o') : (area[catPos][i + 1] = '=o=');
    area[catPos][i] === 'o' ? (area[catPos][i] = ' ') : (area[catPos][i] = '===');
    console.clear();
    console.log(area);
    sleep(300);
  }
  return area;
}

crossingRiver(5, 6, 3, 4);