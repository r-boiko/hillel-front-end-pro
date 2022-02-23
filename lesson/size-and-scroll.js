// -- offsetParent, offsetLeft/Top --
//
// <main style="position: relative" id="main">
//   <article>
//     <div id="example" style="position: absolute; left: 180px; top: 180px">...</div>
//   </article>
// </main>
// <script>
//   alert(example.offsetParent.id); // main
//   alert(example.offsetLeft); // 180 (обратите внимание: число, а не строка "180px")
//   alert(example.offsetTop); // 180
// </script>
//
// -- offsetWidth/Height --
//
// offsetWidth = 390 – внешняя ширина блока, её можно получить сложением CSS-ширины (300px), внутренних отступов (2 * 20px) и рамок (2 * 25px).
// offsetHeight = 290 – внешняя высота блока.
//
// -- clientTop/Left --
//
// clientLeft = 25 – ширина левой рамки
// clientTop = 25 – ширина верхней рамки
//
// -- clientWidth/Height --
// -- scrollWidth/Height --
//
// scrollHeight = 723 – полная внутренняя высота, включая прокрученную область.
// scrollWidth = 324 – полная внутренняя ширина, в данном случае прокрутки нет, поэтому она равна clientWidth.
//
// -- scrollLeft/scrollTop --
//
// Свойства scrollLeft/scrollTop – ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.
// Следующая иллюстрация показывает значения scrollHeight и scrollTop для блока с вертикальной прокруткой.
