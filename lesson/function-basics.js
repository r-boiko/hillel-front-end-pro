// -- Объявление функции --
// function имя(параметры) {
// ...тело...
// }
//
// function showMessage() {
//   alert( 'Всем привет!' );
// }
//
// showMessage();
//
// function showMessage() {
//   alert( 'Всем привет!' );
// }
//
// showMessage();
// showMessage();

// -- Локальные переменные --
// function showMessage() {
//   let message = "Привет, я JavaScript!"; // локальная переменная
//
//   alert( message );
// }
//
// showMessage(); // Привет, я JavaScript!
//
// alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

// -- Внешние переменные --
// let userName = 'Вася';
//
// function showMessage() {
//   let message = 'Привет, ' + userName;
//   alert(message);
// }
//
// showMessage(); // Привет, Вася

// -- Параметры --
// function showMessage(from, text) { // аргументы: from, text
//   alert(from + ': ' + text);
// }
//
// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

// -- Параметры по умолчанию --
// function showMessage(from, text = "текст не добавлен") {
//   alert( from + ": " + text );
// }
//
// showMessage("Аня"); // Аня: текст не добавлен

// -- Возврат значения --
// function sum(a, b) {
//   return a + b;
// }
//
// let result = sum(1, 2);
// alert( result ); // 3
