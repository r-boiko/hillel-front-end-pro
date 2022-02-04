// Дан массив с числами. Найдите сумму этих чисел.
//
// let arr = [5, -3, 6, -5, 0, -7, 8, 9];
//
// let result = arr.reduce(function(sum, elem) {
//   return sum + elem;
// });
// console.log(result);

// Дан массив с числами. Найдите сумму первых N элементов до первого нуля.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
//
// let arr = [1, 2, 3, 0, 4, 5, 6];
// let zeroIndex = [1, 2, 3, 0, 4, 5, 6].indexOf(0);
// let filteredArr = arr.slice(0, zeroIndex);
//
// let result = filteredArr.reduce(function(sum, elem) {
//   return sum + elem;
// });
//
// console.log(result);
