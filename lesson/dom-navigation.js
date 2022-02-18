// -- head, body --
//
// <html>
//
// <head>
//   <script>
//     alert( "Из HEAD: " + document.body ); // null, <body> ещё нет
//   </script>
// </head>
//
// <body>
//
// <script>
//   alert( "Из BODY: " + document.body ); // HTMLBodyElement, теперь он есть
// </script>
//
// </body>
// </html>
//
// -- childNodes --
//
// <html>
// <body>
// <div>Начало</div>
//
// <ul>
//   <li>Информация</li>
// </ul>
//
// <div>Конец</div>
//
// <script>
//   for (let i = 0; i < document.body.childNodes.length; i++) {
//   alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
// }
// </script>
// ...какой-то HTML-код...
// </body>
// </html>
//
// children – коллекция детей, которые являются элементами.
// firstElementChild, lastElementChild – первый и последний дочерний элемент.
// previousElementSibling, nextElementSibling – соседи-элементы.
// parentElement – родитель-элемент.
