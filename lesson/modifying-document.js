// -- createElement --
//
// <style>
//   .alert {
//   padding: 15px;
//   border: 1px solid #d6e9c6;
//   border-radius: 4px;
//   color: #3c763d;
//   background-color: #dff0d8;
// }
// </style>
//
// <script>
//   let div = document.createElement('div');
//   div.className = "alert";
//   div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
//
//   document.body.append(div);
// </script>
//
// -- append, prepend --
//
// <ol id="ol">
//   <li>0</li>
//   <li>1</li>
//   <li>2</li>
// </ol>
//
// <script>
//   ol.before('before'); // вставить строку "before" перед <ol>
//   ol.after('after'); // вставить строку "after" после <ol>
//
//   let liFirst = document.createElement('li');
//   liFirst.innerHTML = 'prepend';
//   ol.prepend(liFirst); // вставить liFirst в начало <ol>
//
//   let liLast = document.createElement('li');
//   liLast.innerHTML = 'append';
//   ol.append(liLast); // вставить liLast в конец <ol>
// </script>
//
// -- insertAdjacentHTML/Text/Element --
//
// <div id="div"></div>
// <script>
//   div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
//   div.insertAdjacentHTML('afterend', '<p>Пока</p>');
// </script>
//
// -- remove --
//
// <style>
//   .alert {
//   padding: 15px;
//   border: 1px solid #d6e9c6;
//   border-radius: 4px;
//   color: #3c763d;
//   background-color: #dff0d8;
// }
// </style>
//
// <script>
//   let div = document.createElement('div');
//   div.className = "alert";
//   div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
//
//   document.body.append(div);
//   setTimeout(() => div.remove(), 1000);
// </script>
//
// -- cloneNode --
//
// <style>
//   .alert {
//   padding: 15px;
//   border: 1px solid #d6e9c6;
//   border-radius: 4px;
//   color: #3c763d;
//   background-color: #dff0d8;
// }
// </style>
//
// <div className="alert" id="div">
//   <strong>Всем привет!</strong> Вы прочитали важное сообщение.
// </div>
//
// <script>
//   let div2 = div.cloneNode(true); // клонировать сообщение
//   div2.querySelector('strong').innerHTML = 'Всем пока!'; // изменить
//   клонированный элемент
//
//   div.after(div2); // показать клонированный элемент после существующего div
// </script>
//
// -- DocumentFragment --
//
// <ul id="ul"></ul>
//
// <script>
//   function getListContent() {
//   let fragment = new DocumentFragment();
//
//   for(let i=1; i<=3; i++) {
//   let li = document.createElement('li');
//   li.append(i);
//   fragment.append(li);
// }
//
//   return fragment;
// }
//
//   ul.append(getListContent()); // (*)
// </script>
