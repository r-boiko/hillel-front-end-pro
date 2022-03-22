// -- События keydown и keyup --
//
// event.code и event.key
//
// document.addEventListener('keydown', function(event) {
//   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//     alert('Отменить!')
//   }
// });
//
// -- Действия по умолчанию --
//
// Появление символа (самое очевидное).
// Удаление символа (клавиша Delete).
// Прокрутка страницы (клавиша PageDown).
// Открытие диалогового окна браузера «Сохранить» (Ctrl+S)
// …и так далее.
//
// <script>
//   function checkPhoneKey(key) {
//   return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
// }
// </script>
// <input onKeyDown="return checkPhoneKey(event.key)" placeholder="Введите телефон" type="tel">
//
// -- --
//
// <script>
//   function checkPhoneKey(key) {
//   return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
//   key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
// }
// </script>
// <input onKeyDown="return checkPhoneKey(event.key)" placeholder="Введите телефон" type="tel">
