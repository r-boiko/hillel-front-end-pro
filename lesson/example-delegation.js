// <style>
//   .list__item {
//   margin-bottom: 15px;
//   background: red;
// }
// </style>
//
// <ul className="list">
//   <li className="list__item">1</li>
//   <li className="list__item">2</li>
//   // new li
// </ul>
//
// <script>
//   function handleClickListItem(e) {
//   console.log(e.target.textContent, 'text');
// }
//   // const listItems = Array.from(document.querySelectorAll('.list__item'));
//   //
//   // listItems.forEach(function (item) {
//   //   item.addEventListener('click', handleClickListItem);
//   // })
//
//   const list = document.querySelector('.list');
//   list.addEventListener('click', function (event) {
//   const currentItem = event.target;
//
//   if(currentItem.className === 'list__item') {
//   console.log(currentItem.textContent, 'log');
// }
//   // console.log(event.target.className, 'click');
// })
//
//   const newListItem = document.createElement('li');
//   newListItem.classList.add('list__item');
//   newListItem.textContent = '3';
//   // newListItem.addEventListener('click', handleClickListItem)
//
//   list.append(newListItem);
//   </script>
