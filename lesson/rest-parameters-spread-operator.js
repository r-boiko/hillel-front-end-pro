// function sum(a, b, c) {
//   console.log(a, 'a');
//   return a + b + c;
// }


// function logFullName(firstName, lastName) {
//   console.log(firstName + lastName);
// }
//
// // alert( sum(1, 2, 3, 4, 5) );
// //
// function sumAll(...args) { // args — имя массива
//   console.log('args', args);
//   let sum = 0;
//
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//
//   return sum;
// }
// //
// alert( sumAll(1) ); // 1
// alert( sumAll(1, 2) ); // 3
// alert( sumAll(1, 2, 3) ); // 6
//
// function f(arg1, ...rest, arg2) { // arg2 после ...rest ?!
// // Ошибка
// }
//
function showName() {
  // alert( arguments.length );
  // alert( arguments[0] );
  // alert( arguments[1] );

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i], 'arguments[0]')
  }

  // Объект arguments можно перебирать
  // for (let arg of arguments) alert(arg);
}
//
// // Вывод: 2, Юлий, Цезарь
// showName("Юлий", "Цезарь");
//
// // Вывод: 1, Илья, undefined (второго аргумента нет)
// showName("Илья");

//
// function getPersonDetails(firstName, lastName, age, ...rest) {
//   console.log(firstName, 'firstName')
//   console.log(lastName, 'lastName')
//   console.log(age, 'age')
//
//   if(rest.length !== 0) {
//     console.log(rest, 'rest')
//   }
// }

function getPersonDetails(firstName, lastName, age) {
  console.log(firstName, 'firstName')
  console.log(lastName, 'lastName')
  console.log(age, 'age')
  console.log(arguments, 'rest')

}
