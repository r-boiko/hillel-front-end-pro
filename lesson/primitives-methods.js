let str = "Привет";

alert( str.toUpperCase() ); // ПРИВЕТ

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

alert( typeof 0 ); // "число"

alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);

if (zero) {
  // zero возвращает "true", так как является объектом
  alert("zero имеет «истинное» значение?!?");
}

let num = Number("123"); // превращает строку в число

alert(null.test); // ошибка
