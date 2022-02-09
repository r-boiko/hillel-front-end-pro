// -- копирование по значению --
// let message = "Привет!";
// let phrase = message;
//
// -- копирование по ссылке --
// let user = { name: 'Иван' };
// let admin = user;
// admin.name = 'Петя'; // изменено по ссылке из переменной "admin"
// console.log(user.name); // 'Петя', изменения видны по ссылке из переменной "user"
//
// -- сравнение объектов --
// let a = {};
// let b = a; // копирование по ссылке
// console.log( a == b ); // true, т.к. обе переменные ссылаются на один и тот же объект
// console.log( a === b ); // true
//
// let a = {};
// let b = {}; // два независимых объекта
// console.log( a == b ); // false
//
// -- копирование объектов --
// let user = {
//   name: "Иван",
//   age: 30
// };
//
// let clone = {}; // новый пустой объект
//
// // скопируем все свойства user в него
// for (let key in user) {
//   clone[key] = user[key];
// }
//
// // теперь в переменной clone находится абсолютно независимый клон объекта
// clone.name = "Пётр"; // изменим в нём данные
//
// console.log( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.
//
// -- Object.assign --
// let user = { name: "Иван" };
//
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
//
// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2); // теперь user = { name: "Иван", canView: true, canEdit: true }
