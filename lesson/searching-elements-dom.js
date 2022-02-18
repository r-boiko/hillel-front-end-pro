// -- getElementById --
//
// <div id="elem">
//   <div id="elem-content">Element</div>
// </div>
//
// <script>
//   // получить элемент
//   let elem = document.getElementById('elem');
//
//   // сделать его фон красным
//   elem.style.background = 'red';
// </script>
//
// -- querySelectorAll --
//
// <ul>
//   <li>Этот</li>
//   <li>тест</li>
// </ul>
// <ul>
//   <li>полностью</li>
//   <li>пройден</li>
// </ul>
// <script>
//   let elements = document.querySelectorAll('ul > li:last-child');
//
//   for (let elem of elements) {
//   alert(elem.innerHTML); // "тест", "пройден"
// }
// </script>
//
// -- closest --
//
// <h1>Содержание</h1>
//
// <div className="contents">
//   <ul className="book">
//     <li className="chapter">Глава 1</li>
//     <li className="chapter">Глава 2</li>
//   </ul>
// </div>
//
// <script>
//   let chapter = document.querySelector('.chapter'); // LI
//
//   alert(chapter.closest('.book')); // UL
//   alert(chapter.closest('.contents')); // DIV
//
//   alert(chapter.closest('h1')); // null (потому что h1 - не предок)
// </script>
//
// -- getElementsBy* --
//
// <table id="table">
//   <tr>
//     <td>Ваш возраст:</td>
//
//     <td>
//       <label>
//         <input type="radio" name="age" value="young" checked> младше 18
//       </label>
//       <label>
//         <input type="radio" name="age" value="mature"> от 18 до 50
//       </label>
//       <label>
//         <input type="radio" name="age" value="senior"> старше 60
//       </label>
//     </td>
//   </tr>
// </table>
//
// <script>
//   let inputs = table.getElementsByTagName('input');
//
//   for (let input of inputs) {
//   alert( input.value + ': ' + input.checked );
// }
// </script>
