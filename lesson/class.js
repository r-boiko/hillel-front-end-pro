// -- class --
//
// class User {
//
//   constructor(name) {
//     this.name = name;
//   }
//
//   sayHi() {
//     alert(this.name);
//   }
//
// }
//
// // Использование:
// let user = new User("Иван");
// user.sayHi();
//
// -- перепишем класс User на чистых функциях --
//
// // 1. Создаём функцию constructor
// function User(name) {
//   this.name = name;
// }
// // каждый прототип функции имеет свойство constructor по умолчанию,
// // поэтому нам нет необходимости его создавать
//
// // 2. Добавляем метод в прототип
// User.prototype.sayHi = function() {
//   alert(this.name);
// };
//
// // Использование:
// let user = new User("Иван");
// user.sayHi();
//
// -- get, set --
//
// class User {
//
//   constructor(name) {
//     // вызывает сеттер
//     this.name = name;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   set name(value) {
//     if (value.length < 4) {
//       alert("Имя слишком короткое.");
//       return;
//     }
//     this._name = value;
//   }
//
// }
//
// let user = new User("Иван");
// alert(user.name); // Иван
//
// user = new User(""); // Имя слишком короткое.
//
// -- property --
//
// class User {
//   name = "Аноним";
//
//   sayHi() {
//     alert(`Привет, ${this.name}!`);
//   }
// }
//
// new User().sayHi();
