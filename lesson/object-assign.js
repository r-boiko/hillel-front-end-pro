// -- Object.assign() --
//
// -- Пример: клонирование объекта --
//
// var obj = { a: 1 };
// var copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }
//
// -- Пример: слияние объектов --
//
// var o1 = { a: 1 };
// var o2 = { b: 2 };
// var o3 = { c: 3 };
//
// var obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.
