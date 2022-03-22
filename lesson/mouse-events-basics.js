// -- Модификаторы: shift, alt, ctrl и meta --
//
// shiftKey: Shift
// altKey: Alt (или Opt для Mac)
// ctrlKey: Ctrl
// metaKey: Cmd для Mac
//
// <button id="button">Нажми Alt+Shift+Click на мне!</button>
//
// <script>
//   button.onclick = function(event) {
//   if (event.altKey && event.shiftKey) {
//   alert('Ура!');
// }
// };
// </script>
//
// -- Координаты: clientX/Y, pageX/Y --
//
// Все события мыши имеют координаты двух видов:
// Относительно окна: clientX и clientY.
// Относительно документа: pageX и pageY.
//
// <input onMouseMove="this.value=event.clientX+':'+event.clientY" value="Наведи на меня мышь">
//
// -- Отключаем выделение --
//
// <span ondblclick="alert('dblclick')">Сделайте двойной клик на мне</span>
//
// -- Предотвращение копирования --
//
// <div onCopy="alert('Копирование запрещено!');return false">
//   Уважаемый пользователь,
//   Копирование информации запрещено для вас.
//   Если вы знаете JS или HTML, вы можете найти всю нужную вам информацию в
//   исходном коде страницы.
// </div>
