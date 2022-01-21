// console.log('main');

// let string = 'lorem4';
// console.log(string.charAt(0), 'charAt');
// console.log(string[0], '[]');

// let count = 0;
// console.log(string[i], '[] - 2');
// console.log(string.length, 'len');

// for (let i = 0; i < string.length; i++) {
  // console.log(string.charAt(i), i, 'charAt');
  // console.log(string[i], i, '[]');
  // console.log(typeof string[i], 'typeof');
// }


// -- task --
//
// let string = 'lorem  a  ipsum      ';
// let resultString = '';
//
// for (let i = 0; i < string.length; i++) {
//   // vars
//   let currentItem = string[i];
//   let prevItem = string[i - 1];
//   let nextItem = string[i + 1];
//
//   // conditions
//   let isPrevItemSpace = prevItem === ' ';
//   let isNotCurrentItemSpace = currentItem !== ' ';
//
//   if(isNotCurrentItemSpace && isPrevItemSpace && nextItem !== ' ') {
//     resultString = resultString + string[i].toUpperCase();
//   } else {
//     resultString = resultString + string[i]
//   }
// }
//
// console.log(resultString, 'resString');

// task 2
let string = 'lorem    ipsum   ';
let resultString = '';
let finalString = '';

for (let i = 0; i < string.length; i++) {
  // vars
  let currentItem = string[i];
  let prevItem = string[i - 1];
  let nextItem = string[i + 1];

  // conditions
  let isSymbol = currentItem !== ' ';
  let isNotDoubleSpace = currentItem === ' ' && nextItem !== ' ' && prevItem !== undefined && nextItem !== undefined;

  if(isSymbol || isNotDoubleSpace) {
    resultString = resultString + currentItem;
  }
}

if(resultString[0] === ' ') {
  finalString = resultString.substring(1)
} else {
  finalString = resultString;
}

console.log(finalString, 'resStr');
