// DOMContentLoaded – браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены.
// load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.).
// beforeunload/unload – пользователь покидает страницу.
//
// -- DOMContentLoaded --
//
// <script>
//   function ready() {
//   alert('DOM готов');
//
//   // изображение ещё не загружено (если не было закешировано), так что размер будет 0x0
//   alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
// }
//
//   document.addEventListener("DOMContentLoaded", ready);
// </script>
//
// <img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
//
// -- onload --
//
// <script>
//   window.onload = function() {
//   alert('Страница загружена');
//
//   // к этому моменту страница загружена
//   alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
// };
// </script>
//
// <img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
//
// -- window.onunload --
//
// let analyticsData = { /* объект с собранными данными */ };
//
// window.addEventListener("unload", function() {
//   navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
// });
//
// -- window.onbeforeunload --
//
// window.onbeforeunload = function() {
//   return "Есть несохранённые изменения. Всё равно уходим?";
// };
