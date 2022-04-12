// -- setInterval --
//
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
//
// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);
//
// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
//
// -- Вложенный setTimeout --
//
// /** вместо:
//  let timerId = setInterval(() => alert('tick'), 2000);
//  */
//
// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
//
// -- --
//
// let delay = 5000;
//
// let timerId = setTimeout(function request() {
// ...отправить запрос...
//
//   if (ошибка запроса из-за перегрузки сервера) {
//     // увеличить интервал для следующего запроса
//     delay *= 2;
//   }
//
//   timerId = setTimeout(request, delay);
//
// }, delay);
//
// -- Сборка мусора и колбэк setTimeout/setInterval --
//
// // функция остаётся в памяти до тех пор, пока планировщик обращается к ней
// setTimeout(function() {...}, 100);
//
// -- setTimeout с нулевой задержкой --
//
// setTimeout(() => alert("Мир"));
//
// alert("Привет");
