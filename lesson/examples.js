// some
//
// function isBiggerThan10(element, index, array) {
//   return element > 10;
// }
// [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
// [12, 5, 8, 1, 4].some(isBiggerThan10); // true

// every
//
// function isBigEnough(element, index, array) {
//   return element >= 10;
// }
// let res1 = [12, 5, 8, 130, 44].every(isBigEnough);   // false
// let res2 = [12, 54, 18, 130, 44].every(isBigEnough); // true
//
// console.log(res1, 'res1')
// console.log(res2, 'res2')

// reduce
// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
//
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10
//
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15
