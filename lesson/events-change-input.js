// -- Событие: change --
//
// <input type="text" onChange="alert(this.value)">
// <input type="button" value="Button">
//
// -- --
//
// <select onChange="alert(this.value)">
//   <option value="">Выберите что-нибудь</option>
//   <option value="1">Вариант 1</option>
//   <option value="2">Вариант 2</option>
//   <option value="3">Вариант 3</option>
// </select>
//
// -- Событие: input --
//
// <input type="text" id="input"> oninput: <span id="result"></span>
//   <script>
//     input.oninput = function() {
//     result.innerHTML = input.value;
//   };
//   </script>
//
// -- События: cut, copy, paste --
//
// <input type="text" id="input">
//   <script>
//     input.oncut = input.oncopy = input.onpaste = function(event) {
//     alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
//     return false;
//   };
//   </script>
//
// -- Метод: submit --
//
// let form = document.createElement('form');
// form.action = 'https://google.com/search';
// form.method = 'GET';
//
// form.innerHTML = '<input name="q" value="test">';
//
// // перед отправкой формы, её нужно вставить в документ
// document.body.append(form);
//
// form.submit();
