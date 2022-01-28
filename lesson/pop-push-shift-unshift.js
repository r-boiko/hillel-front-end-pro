// Методы pop/push, shift/unshift
//
// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.
//
// -- pop --
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// let removedItem = fruits.pop();
// console.log( removedItem ); // удаляем "Груша" и выводим его
// console.log( fruits ); // Яблоко, Апельсин
//
// -- push --
// let fruits = ["Яблоко", "Апельсин"];
// fruits.push("Груша");
// console.log( fruits ); // Яблоко, Апельсин, Груша
//
// -- shift --
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// let removedItem = fruits.shift();
// console.log( removedItem ); // удаляем Яблоко и выводим его
// console.log( fruits ); // Апельсин, Груша
//
// -- unshift --
// let fruits = ["Апельсин", "Груша"];
// fruits.unshift('Яблоко');
// console.log( fruits ); // Яблоко, Апельсин, Груша
