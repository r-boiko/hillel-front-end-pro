// let user = {
//   name: "Джон",
//   age: 30
// };
//
// user.sayHi = function() {
//   console.log("Привет!");
// };
//
// user.sayHi();
//
// -- --
//
// user.sayHi(); // Привет!
//
// // эти объекты делают одно и то же (одинаковые методы)
// let user = {
//   sayHi: function() {
//     alert("Привет");
//   }
// };
//
// // сокращённая запись выглядит лучше, не так ли?
// user = {
//   sayHi() { // то же самое, что и "sayHi: function()"
//     console.log('hello');
//   }
// };
//
// -- this --
//
// let user = {
//   name: "Джон",
//   age: 30,
//
//   sayHi() {
//     // this - это "текущий объект"
//     console.log(this.name);
//   }
//
// };
//
// user.sayHi(); // Джон
//
// -- --
//
// let user = {
//   name: "Джон",
//   age: 30,
//
//   sayHi() {
//     alert(user.name); // используем переменную "user" вместо ключевого слова "this"
//   }
//
// };
//
// -- --
//
// let user = {
//   name: "Джон",
//   age: 30,
//
//   sayHi() {
//     alert( user.name ); // приведёт к ошибке
//   }
//
// };
//
//
// let admin = user;
// user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
//
// admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!
//
// -- this dynamic --
//
//
// let sayHiFunc = function() {
//   console.log( this.name );
// }
//
// let user = {
//   name: "Джон",
//   sayHi: sayHiFunc,
// };
// let admin = {
//   name: "Админ",
//   sayHi: sayHiFunc,
// };
//
//
//
// используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.sayHi(); // Джон  (this == user)
// admin.sayHi(); // Админ  (this == admin)
//
// -- this == undefined --
//
// function sayHi() {
//   console.log(this);
// }
//
// sayHi(); // undefined
//
// -- this error --
//
// let user = {
//   name: "Джон",
//   hi: function () { console.log(this.name); }
// };
//
// // разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi;
// hi(); // Ошибка, потому что значением this является undefined
//
// -- this arrow --
//
// let user = {
//   firstName: "Илья",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   }
// };
//
// user.sayHi(); // Илья
