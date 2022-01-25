// let func = (arg1, arg2, ...argN) => expression
//

function sum(a, b) {
  return a + b;
}

let sumArrow = (a, b) => {
  let res = a + b;
  return res;
}

// let sumArrowShort = (a, b) => a + b;

let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // при фигурных скобках для возврата значения нужно явно вызвать return
};
//
// alert( sum(1, 2) ); // 3
//
// -- --
// let sum = (a, b) => a + b;
//
// /* Более короткая форма для:
//
// let sum = function(a, b) {
//   return a + b;
// };
// */
//
// alert( sum(1, 2) ); // 3
