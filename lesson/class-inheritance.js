// -- extends --
//
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} стоит.`);
//   }
// }
//
// // Наследуем от Animal указывая "extends Animal"
// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} прячется!`);
//   }
// }
//
// let rabbit = new Rabbit("Белый кролик");
//
// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!
//
// -- super --
//
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   // ...
// }
//
// class Rabbit extends Animal {
//
//   constructor(name, earLength) {
//     this.speed = 0;
//     this.name = name;
//     this.earLength = earLength;
//   }
//
//   // ...
// }
//
// // Не работает!
// let rabbit = new Rabbit("Белый кролик", 10); //
//
// -- --
//
// class Animal {
//
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//
//   // ...
// }
//
// class Rabbit extends Animal {
//
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
//
//   // ...
// }
//
// // теперь работает
// let rabbit = new Rabbit("Белый кролик", 10);
// alert(rabbit.name); // Белый кролик
// alert(rabbit.earLength); // 10
