// -- static --
//
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//
//   static createTodays() {
//     // помним, что this = Article
//     return new this("Сегодняшний дайджест", new Date());
//   }
// }
//
// let article = Article.createTodays();
//
// alert( article.title ); // Сегодняшний дайджест
//
// -- extends --
//
// class Animal {
//
//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }
//
//   run(speed = 0) {
//     this.speed += speed;
//     alert(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//
//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
//
// }
//
// // Наследует от Animal
// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} прячется!`);
//   }
// }
//
// let rabbits = [
//   new Rabbit("Белый кролик", 10),
//   new Rabbit("Чёрный кролик", 5)
// ];
//
// rabbits.sort(Rabbit.compare);
//
// rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.
