// -- Ширина/высота окна --
// -- Чтобы получить ширину/высоту окна, можно взять свойства clientWidth/clientHeight из document.documentElement: --
//
// alert( window.innerWidth ); // полная ширина окна
// alert( document.documentElement.clientWidth ); // ширина окна за вычетом полосы прокрутки
//
// -- Ширина/высота документа --
//
// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );
//
// alert('Полная высота документа с прокручиваемой частью: ' + scrollHeight);
//
// -- Получение текущей прокрутки --
//
// alert('Текущая прокрутка сверху: ' + window.pageYOffset);
// alert('Текущая прокрутка слева: ' + window.pageXOffset);
