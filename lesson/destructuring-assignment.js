// -- Destructuring assignment --
//
// -- Разбор массивов --
//
// var foo = ["one", "two", "three"];
//
// // без деструктурирования
// var one   = foo[0];
// var two   = foo[1];
// var three = foo[2];
//
// // с деструктурированием
// var [one, two, three] = foo;
//
// -- Обмен значений переменных --
//
// var a = 1;
// var b = 3;
//
// [a, b] = [b, a];
//
// -- Разбор объектов --
//
// var o = {p: 42, q: true};
// var {p, q} = o;
//
// console.log(p); // 42
// console.log(q); // true
//
// // Объявление новых переменных
// var {p: foo, q: bar} = o;
//
// console.log(foo); // 42
// console.log(bar); // true
