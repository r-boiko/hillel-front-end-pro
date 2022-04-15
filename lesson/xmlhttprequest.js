// В современной веб-разработке XMLHttpRequest используется по трём причинам:
// По историческим причинам: существует много кода, использующего XMLHttpRequest, который нужно поддерживать.
// Необходимость поддерживать старые браузеры и нежелание использовать полифилы (например, чтобы уменьшить количество кода).
// Потребность в функциональности, которую fetch пока что не может предоставить, к примеру, отслеживание прогресса отправки на сервер.
//
// -- Основы --
//
// // 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();
//
// // 2. Настраиваем его: GET-запрос по URL /article/.../load
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//
// // 3. Отсылаем запрос
// xhr.send();
//
// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function() {
//   if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//   } else { // если всё прошло гладко, выводим результат
//     alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//   }
// };
//
// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     alert(`Получено ${event.loaded} из ${event.total} байт`);
//   } else {
//     alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//   }
//
// };
//
// xhr.onerror = function() {
//   alert("Запрос не удался");
// };
//
// -- URL с параметрами --
//
// let url = new URL('https://google.com/search');
// url.searchParams.set('q', 'test me!');
//
// // параметр 'q' закодирован
// xhr.open('GET', url); // https://google.com/search?q=test+me%21
//
// -- Состояния запроса --
//
// UNSENT = 0; // исходное состояние
// OPENED = 1; // вызван метод open
// HEADERS_RECEIVED = 2; // получены заголовки ответа
// LOADING = 3; // ответ в процессе передачи (данные частично получены)
// DONE = 4; // запрос завершён
//
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 3) {
//     // загрузка
//   }
//   if (xhr.readyState == 4) {
//     // запрос завершён
//   }
// };
//
// -- Отмена запроса --
//
// xhr.abort(); // завершить запрос
//
// -- Синхронные запросы --
//
// let xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
//
// try {
//   xhr.send();
//   if (xhr.status != 200) {
//     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
//   } else {
//     alert(xhr.response);
//   }
// } catch(err) { // для отлова ошибок используем конструкцию try...catch вместо onerror
//   alert("Запрос не удался");
// }
