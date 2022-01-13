// -- || --
// let result = a || b;
//
// let hour = 12;
// let isWeekend = true;
//
// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'Офис закрыт.' ); // это выходной
// }
//
// let currentUser = null;
// let defaultUser = "John";
//
// let name = currentUser || defaultUser || "unnamed";
//
// alert( name ); // выбирается "John" – первое истинное значение

// -- && --
// result = a && b;
//
// let hour = 12;
// let minute = 30;
//
// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }
//
// alert( 1 && 2 && 3 ); // 3 Когда все значения верны, возвращается последнее

// -- ! --
// result = !value;
//
// alert( !true ); // false
// alert( !0 ); // true
//
// alert( !!"non-empty string" ); // true
// alert( !!null ); // false
