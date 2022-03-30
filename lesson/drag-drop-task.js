// -- Drag'n'Drop --
//
// <div id="ball">ball</div>
// <script>
//   ball.onmousedown = function(event) { // (1) отследить нажатие
//
//   // (2) подготовить к перемещению:
//   // разместить поверх остального содержимого и в абсолютных координатах
//   ball.style.position = 'absolute';
//   ball.style.zIndex = 1000;
//   // переместим в body, чтобы мяч был точно не внутри position:relative
//   document.body.append(ball);
//   // и установим абсолютно спозиционированный мяч под курсор
//
//   moveAt(event.pageX, event.pageY);
//
//   // передвинуть мяч под координаты курсора
//   // и сдвинуть на половину ширины/высоты для центрирования
//   function moveAt(pageX, pageY) {
//   ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//   ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
// }
//
//   function onMouseMove(event) {
//   moveAt(event.pageX, event.pageY);
// }
//
//   // (3) перемещать по экрану
//   document.addEventListener('mousemove', onMouseMove);
//
//   // (4) положить мяч, удалить более ненужные обработчики событий
//   ball.onmouseup = function() {
//   document.removeEventListener('mousemove', onMouseMove);
//   ball.onmouseup = null;
// };
//
// };
// </script>
