// -- prototype --
//
// let obj = {};
//
// alert(obj.__proto__ === Object.prototype); // true
// // obj.toString === obj.__proto__.toString === Object.prototype.toString
//
// -- --
//
// let arr = [1, 2, 3];
//
// // наследует ли от Array.prototype?
// alert( arr.__proto__ === Array.prototype ); // true
//
// // затем наследует ли от Object.prototype?
// alert( arr.__proto__.__proto__ === Object.prototype ); // true
//
// // и null на вершине иерархии
// alert( arr.__proto__.__proto__.__proto__ ); // null
//
// -- --
//
// function f() {}
//
// alert(f.__proto__ == Function.prototype); // true
// alert(f.__proto__.__proto__ == Object.prototype); // true
//
// -- add new methods --
//
// String.prototype.show = function() {
//   alert(this);
// };
//
// "BOOM!".show(); // BOOM!
//
// -- --
//
// if (!String.prototype.repeat) { // Если такого метода нет
//                                 // добавляем его в прототип
//
//   String.prototype.repeat = function(n) {
//     // повторить строку n раз
//
//     // на самом деле код должен быть немного более сложным
//     // (полный алгоритм можно найти в спецификации)
//     // но даже неполный полифил зачастую достаточно хорош для использования
//     return new Array(n + 1).join(this);
//   };
// }
//
// alert( "La".repeat(3) ); // LaLaLa
//
// -- --
//
// let obj = {
//   0: "Hello",
//   1: "world!",
//   length: 2,
// };
//
// obj.join = Array.prototype.join;
//
// alert( obj.join(',') ); // Hello,world!
