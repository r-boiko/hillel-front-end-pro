// События мыши:
//
// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.
//
// События на элементах управления:
//
// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>.
// Клавиатурные события:
//
// keydown и keyup – когда пользователь нажимает / отпускает клавишу.
// События документа:
//
// DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
// CSS events:
//
// transitionend – когда CSS-анимация завершена.
//
// <script>
//   function countRabbits() {
//   for(let i=1; i<=3; i++) {
//   alert("Кролик номер " + i);
// }
// }
// </script>
//
// <input type="button" onClick="countRabbits()" value="Считать кроликов!">
//
// <input id="elem" type="button" value="Нажми меня!">
//   <script>
//     elem.onclick = function() {
//     alert('Спасибо');
//   };
//   </script>
//
// // правильно
// button.onclick = sayThanks;
//
// // неправильно
// button.onclick = sayThanks();
//
// -- this --
// <button onClick="alert(this.innerHTML)">Нажми меня</button>
//
// -- addEventListener --
//
// input.onclick = function() { alert(1); }
// // ...
// input.onclick = function() { alert(2); } // заменит предыдущий обработчик
//
// element.addEventListener(event, handler[, options]);
// element.removeEventListener(event, handler[, options]);
//
// function handler() {
//   alert( 'Спасибо!' );
// }
//
// input.addEventListener("click", handler);
// // ....
// input.removeEventListener("click", handler);
//
// <input id="elem" type="button" value="Нажми меня"/>
//
// <script>
//   function handler1() {
//   alert('Спасибо!');
// };
//
//   function handler2() {
//   alert('Спасибо ещё раз!');
// }
//
//   elem.onclick = () => alert("Привет");
//   elem.addEventListener("click", handler1); // Спасибо!
//   elem.addEventListener("click", handler2); // Спасибо ещё раз!
// </script>
//
// -- Объект события --
//
// <input type="button" value="Нажми меня" id="elem">
//
//   <script>
//     elem.onclick = function(event) {
//     // вывести тип события, элемент и координаты клика
//     alert(event.type + " на " + event.currentTarget);
//     alert("Координаты: " + event.clientX + ":" + event.clientY);
//   };
//   </script>
//
