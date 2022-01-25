// function sayHi() {
//   alert( "Привет" );
// }
//
// alert( sayHi ); // выведет код функции

// -- --
// let myFunc = function () {
//   console.log('hello');
// }

// function sayHi() {   // (1) создаём
//   alert( "Привет" );
// }
//
// let func = sayHi;    // (2) копируем
//
// func(); // Привет    // (3) вызываем копию (работает)!
// sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)

// -- Function Expression в сравнении с Function Declaration --
// Function Declaration
// function sum(a, b) {
//   return a + b;
// }
//
// // Function Expression
// let sum = function(a, b) {
//   return a + b;
// };

// -- --
sayHi("Вася"); // Привет, Вася

function sayHi(name) {
  alert( 'Привет, ' + name );
  alert( `Привет, ${name}` );
}

sayHi("Вася"); // ошибка!

let sayHi = function(name) {  // (*) магии больше нет
  alert( `Привет, ${name}` );
};


