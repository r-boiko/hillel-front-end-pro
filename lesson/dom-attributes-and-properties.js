// -- elem.hasAttribute(name) – проверяет наличие атрибута. --
// -- elem.getAttribute(name) – получает значение атрибута. --
// -- elem.setAttribute(name, value) – устанавливает значение атрибута. --
// -- elem.removeAttribute(name) – удаляет атрибут. --
//
// <body>
// <div id="elem" about="Elephant"></div>
//
// <script>
//   alert( elem.getAttribute('About') ); // (1) 'Elephant', чтение
//
//   elem.setAttribute('Test', 123); // (2), запись
//
//   alert( elem.outerHTML ); // (3), посмотрим, есть ли атрибут в HTML (да)
//
//   for (let attr of elem.attributes) { // (4) весь список
//   alert( `${attr.name} = ${attr.value}` );
// }
// </script>
// </body>
//
// -- Нестандартные атрибуты, dataset --
//
// <!-- пометить div, чтобы показать здесь поле "name" -->
// <div show-info="name"></div>
// <!-- а здесь возраст "age" -->
// <div show-info="age"></div>
//
// <script>
//   // код находит элемент с пометкой и показывает запрошенную информацию
//   let user = {
//   name: "Pete",
//   age: 25
// };
//
//   for(let div of document.querySelectorAll('[show-info]')) {
//   // вставить соответствующую информацию в поле
//   let field = div.getAttribute('show-info');
//   div.innerHTML = user[field]; // сначала Pete в name, потом 25 в age
// }
// </script>
