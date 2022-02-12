// -- var --
// {
//   var a = 5;
// }
// console.log("a =", a);  // a = 5
// //
// // // условная конструкция
// if(true){
//   var b = 6;
// }
// console.log("b =", b);  // b = 6
//
// // цикл
// for(var i = 0; i < 5; i++){
//   var c = 7;
// }
// console.log("c =", c);  // c = 7
//
// -- let, const --
//
// {
//   let a = 5;
// }
// console.log("a =", a);  // Uncaught ReferenceError: a is not defined
// //
// {
//   const b = 5;
// }
// console.log("b =", b);  // Uncaught ReferenceError: b is not defined
//
// -- example 1 --
//
// var a = 10;
//
// function sayHello() {
//   var a,b,c;
//   if(a) {
//     a = 20;
//     b = 20;
//     c = 20;
//     console.log(a);
//   } else {
//     console.log(a);
//   }
// }
//
// sayHello()
// //
// // -- example 2 --
// //
// let a = 10;
//
// function sayHello() {
//   if(a) {
//     console.log(a);
//     let a = 20;
//   } else {
//     console.log(a);
//   }
// }
//
// sayHello()

