// -- change color for list item --
//
// <input type="color" class="inputColor">
//   <ul class="list">
//     <li class="list__item">1</li>
//     <li class="list__item">2</li>
//     <li class="list__item">3</li>
//     <li class="list__item">4</li>
//     <li class="list__item">5</li>
//   </ul>
//   <script>
//     const inputColor = document.querySelector('.inputColor');
//     const list = document.querySelector('.list');
//     let color = '';
//
//     inputColor.addEventListener('change', function (e) {
//     color = e.target.value;
//   });
//
//     list.addEventListener('click', function (e) {
//     const currentEl = e.target;
//
//     if(currentEl.classList.contains('list__item')) {
//     currentEl.style.background = color;
//   }
//   })
//   </script>
