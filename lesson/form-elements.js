// -- Навигация: формы и элементы --
//
// document.forms.my - форма с именем "my" (name="my")
// document.forms[0] - первая форма в документе
//
// <form name="my">
//   <input name="one" value="1">
//     <input name="two" value="2">
// </form>
//
// <script>
//   // получаем форму
//   let form = document.forms.my; // <form name="my"> element
//
//   // получаем элемент
//   let elem = form.elements.one; // <input name="one"> element
//
//     alert(elem.value); // 1
// </script>
//
// -- --
//
// <form>
//   <input type="radio" name="age" value="10">
//     <input type="radio" name="age" value="20">
// </form>
//
// <script>
//   let form = document.forms[0];
//
//   let ageElems = form.elements.age;
//
//   alert(ageElems[0]); // [object HTMLInputElement]
// </script>
//
// -- --
//
// <body>
// <form id="form">
//   <fieldset name="userFields">
//     <legend>info</legend>
//     <input name="login" type="text">
//   </fieldset>
// </form>
//
// <script>
//   alert(form.elements.login); // <input name="login">
//
//   let fieldset = form.elements.userFields;
//   alert(fieldset); // HTMLFieldSetElement
//
//   // мы можем достать элемент по имени как из формы, так и из fieldset с ним
//   alert(fieldset.elements.login == form.elements.login); // true
// </script>
// </body>
//
// -- Обратная ссылка: element.form --
//
// <form id="form">
//   <input type="text" name="login">
// </form>
//
// <script>
//   // form -> element
//   let login = form.login;
//
//   // element -> form
//   alert(login.form); // HTMLFormElement
// </script>
//
// -- Элементы формы --
//
// input и textarea
//
// input.value = "Новое значение";
// textarea.value = "Новый текст";
//
// input.checked = true; // для чекбоксов и переключателей
//
// select и option
//
// <select id="select">
//   <option value="apple">Яблоко</option>
//   <option value="pear">Груша</option>
//   <option value="banana">Банан</option>
// </select>
//
// <script>
//   // все три строки делают одно и то же
//   select.options[2].selected = true;
//   select.selectedIndex = 2;
//   select.value = 'banana';
// </script>
//
// -- --
//
// <select id="select" multiple>
//   <option value="blues" selected>Блюз</option>
//   <option value="rock" selected>Рок</option>
//   <option value="classic">Классика</option>
// </select>
//
// <script>
//   // получаем все выбранные значения из select с multiple
//   let selected = Array.from(select.options)
//   .filter(option => option.selected)
//   .map(option => option.value);
//
//   alert(selected); // blues,rock
// </script>

