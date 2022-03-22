// -- События focus/blur --
//
// <style>
//   .invalid { border-color: red; }
//   #error { color: red }
// </style>
//
// Ваш email: <input type="email" id="input">
//
//   <div id="error"></div>
//
//   <script>
//     input.onblur = function() {
//     if (!input.value.includes('@')) { // не email
//     input.classList.add('invalid');
//     error.innerHTML = 'Пожалуйста, введите правильный email.'
//   }
//   };
//
//     input.onfocus = function() {
//     if (this.classList.contains('invalid')) {
//     // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
//     this.classList.remove('invalid');
//     error.innerHTML = "";
//   }
//   };
//   </script>
//
// -- Методы focus/blur --
//
// <style>
//   .error {
//   background: red;
// }
// </style>
//
// Ваш email: <input type="email" id="input">
//   <input type="text" style="width:280px" placeholder="введите неверный email и кликните сюда">
//
//     <script>
//       input.onblur = function() {
//       if (!this.value.includes('@')) { // не email
//       // показать ошибку
//       this.classList.add("error");
//       // ...и вернуть фокус обратно
//       input.focus();
//     } else {
//       this.classList.remove("error");
//     }
//     };
//     </script>
//
// -- Включаем фокусировку на любом элементе: tabindex --
//
// Кликните первый пункт в списке и нажмите Tab. Продолжайте следить за порядком. Обратите внимание, что много последовательных нажатий Tab могут вывести фокус из iframe с примером.
// <ul>
//   <li tabindex="1">Один</li>
//   <li tabindex="0">Ноль</li>
//   <li tabindex="2">Два</li>
//   <li tabindex="-1">Минус один</li>
// </ul>
//
// <style>
//   li { cursor: pointer; }
//   :focus { outline: 1px dashed green; }
// </style>
//
// -- События focusin/focusout --
//
// <!-- добавить класс при фокусировке на форме -->
// <form onfocus="this.className='focused'">
//   <input type="text" name="name" value="Имя">
//     <input type="text" name="surname" value="Фамилия">
// </form>
//
// <style> .focused { outline: 1px solid red; } </style>
//
// -- --
//
// <form id="form">
//   <input type="text" name="name" value="Имя">
//     <input type="text" name="surname" value="Фамилия">
// </form>
//
// <style> .focused { outline: 1px solid red; } </style>
//
// <script>
//   form.addEventListener("focusin", () => form.classList.add('focused'));
//   form.addEventListener("focusout", () => form.classList.remove('focused'));
// </script>
