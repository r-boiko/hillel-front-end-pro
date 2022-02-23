// -- Свойство tagName есть только у элементов Element. --
// -- Свойство nodeName определено для любых узлов Node --
//
// <body><!-- комментарий -->
//
// <script>
//   // для комментария
//   alert( document.body.firstChild.tagName ); // undefined (не элемент)
//   alert( document.body.firstChild.nodeName ); // #comment
//
//   // for document
//   alert( document.tagName ); // undefined (не элемент)
//   alert( document.nodeName ); // #document
// </script>
// </body>
//
// -- innerHTML: содержимое элемента --
//
// <body>
// <p>Параграф</p>
// <div>DIV</div>
//
// <script>
//   alert( document.body.innerHTML ); // читаем текущее содержимое
//   document.body.innerHTML = 'Новый BODY!'; // заменяем содержимое
// </script>
//
// </body>
//
// -- outerHTML: HTML элемента целиком --
//
// <div>Привет, мир!</div>
//
// <script>
//   let div = document.querySelector('div');
//
//   // заменяем div.outerHTML на <p>...</p>
//   div.outerHTML = '<p>Новый элемент</p>'; // (*)
//
//   // Содержимое div осталось тем же!
//   alert(div.outerHTML); // <div>Привет, мир!</div> (**)
// </script>
//
// -- Свойство «hidden» --
//
// <div>Оба тега DIV внизу невидимы</div>
//
// <div hidden>С атрибутом "hidden"</div>
//
// <div id="elem">С назначенным JavaScript свойством "hidden"</div>
//
// <script>
//   elem.hidden = true;
// </script>
