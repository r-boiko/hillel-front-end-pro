// Задание: удалить лишние пробелы
// Первый вариант
// let string = '  lorem     ipsum  2 ';
// let resultString = '';
//
// for (let i = 0; i < string.length - 1; i++) {
//   // elements
//   let currentElement = string[i];
//   let prevElement = string[i - 1];
//   let nextElement = string[i + 1];
//
//   // conditions
//   let isDoubleSpace = (currentElement === ' ' && prevElement === ' ');
//   let isSpaceBeforeStart = (currentElement === ' ' && prevElement === undefined);
//   let isSpaceAfterEnd = (currentElement === ' ' && nextElement === undefined);
//
//   if(isDoubleSpace || isSpaceBeforeStart || isSpaceAfterEnd) {
//
//   } else {
//     resultString += currentElement;
//   }
// }
//
// console.log(resultString, 'resStr');

// Второй вариант
let string = ' s      s ';
let resultString = '';

for (let i = 0; i < string.length; i++) {
  // elements
  let currentElement = string[i];
  let prevElement = string[i - 1];
  let nextElement = string[i + 1];

  // conditions
  let isSymbol = currentElement !== ' ';
  let isNotDoubleSpace = currentElement === ' ' && nextElement !== ' ' && nextElement !== undefined && prevElement !== undefined;

  if(isSymbol || isNotDoubleSpace) {
    resultString += currentElement;
  }
}

console.log(resultString, 'resStr');
