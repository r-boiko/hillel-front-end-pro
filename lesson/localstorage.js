// -- API --
//
// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить значение по ключу key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.
// Используйте Object.keys для получения всех ключей.
//
// -- localStorage --
//
// localStorage.setItem('test', 1);
//
// -- --
//
// alert( localStorage.getItem('test') ); // 1
//
// -- --
//
// // установить значение для ключа
// localStorage.test = 2;
//
// -- --
//
// // получить значение по ключу
// alert( localStorage.test ); // 2
//
// -- --
//
// // удалить ключ
// delete localStorage.test;
//
// -- --
//
// let key = 'length';
// localStorage[key] = 5; // Ошибка, невозможно установить length
//
// -- Перебор ключей --
//
// for(let i=0; i<localStorage.length; i++) {
//   let key = localStorage.key(i);
//   alert(`${key}: ${localStorage.getItem(key)}`);
// }
//
// -- --
//
// for(let key in localStorage) {
//   if (!localStorage.hasOwnProperty(key)) {
//     continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
//   }
//   alert(`${key}: ${localStorage.getItem(key)}`);
// }
//
// -- Только строки --
//
// sessionStorage.user = {name: "John"};
// alert(sessionStorage.user); // [object Object]
//
// -- --
//
// sessionStorage.user = JSON.stringify({name: "John"});
//
// // немного позже
// let user = JSON.parse( sessionStorage.user );
// alert( user.name ); // John
//
// -- sessionStorage --
//
// sessionStorage.setItem('test', 1);
//
// -- --
//
// alert( sessionStorage.getItem('test') ); // после обновления: 1
//
// -- onstorage --
//
// // срабатывает при обновлениях, сделанных в том же хранилище из других документов
// window.onstorage = event => {
//   if (event.key != 'now') return;
//   alert(event.key + ':' + event.newValue + " at " + event.url);
// };
//
// localStorage.setItem('now', Date.now());
