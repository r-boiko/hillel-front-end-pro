// -- swap list item --
//
// <ul className="list">
//   <li className="list__item">1</li>
//   <li className="list__item">2</li>
//   <li className="list__item">3</li>
//   <li className="list__item">4</li>
//   <li className="list__item">5</li>
// </ul>
// <script>
//   const list = document.querySelector('.list');
//
//   list.addEventListener('click', function (e) {
//   const currentEl = e.target;
//
//   if(currentEl.classList.contains('list__item')) {
//     currentEl.nextElementSibling.insertAdjacentHTML('afterend', currentEl.outerHTML);
//     currentEl.remove();
//   }
// })
// </script>
