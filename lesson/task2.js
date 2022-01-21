// Задание: смена символов на верхний регистр
let string = '  lorem  a   ipsum  ';
let resultString = '';

for (let i = 0; i < string.length; i++) {
  let currentItem = string[i];
  let prevItem = string[i - 1];

  if(currentItem !== ' ' && prevItem === ' ') {
    resultString += currentItem.toUpperCase();
  } else {
    resultString += currentItem;
  }
}

console.log(resultString, 'res');


