// -- F.prototype --
//
// let animal = {
//   eats: true
// };
//
// function Rabbit(name) {
//   this.name = name;
// }
//
// Rabbit.prototype = animal;
//
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
//
// alert( rabbit.eats ); // true
//
// -- constructor --
//
// function Rabbit() {}
// // по умолчанию:
// // Rabbit.prototype = { constructor: Rabbit }
//
// let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}
//
// alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)
