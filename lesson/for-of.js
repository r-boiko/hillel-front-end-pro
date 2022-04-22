// -- For...of --
//
// -- Синтаксис цикла for...of --
//
// for (var i of arr) //for (переменная of объект)
//   arr[i] = "something value"
//
// -- Примеры --
//
// Object.prototype.objCustom = function() {};
// Array.prototype.arrCustom = function() {};
//
// let iterable = [3, 5, 7];
// iterable.foo = 'hello';
//
// for (let i in iterable)
//   console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
//
// for (let i in iterable) {
//   if (iterable.hasOwnProperty(i))
//     console.log(i); // выведет 0, 1, 2, "foo"
// }
//
// for (let i of iterable)
//   console.log(i); // 3, 5, 7
