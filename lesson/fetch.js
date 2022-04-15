// let promise = fetch(url, [options])
// url – URL для отправки запроса.
// options – дополнительные параметры: метод, заголовки и так далее.
//
// fetch(url, options)
//   .then(response => response.json())
//   .then(result => /* обрабатываем результат */)
//
// -- json --
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//
// Output
//
// [
//   { id: 1, title: '...' /* ... */ },
//   { id: 2, title: '...' /* ... */ },
//   { id: 3, title: '...' /* ... */ },
//   /* ... */
//   { id: 100, title: '...' /* ... */ },
// ];
//
// -- text --
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.text())
//   .then((text) => console.log(text));
//
// Output
//
// [
//   { id: 1, title: '...' /* ... */ },
//   { id: 2, title: '...' /* ... */ },
//   { id: 3, title: '...' /* ... */ },
//   /* ... */
//   { id: 100, title: '...' /* ... */ },
// ];
//
// -- blob --
//
// fetch('https://i.imgur.com/IBItATn.png')
//   .then((response) => response.blob())
//   .then((blob) => {
//     // создаём <img>
//     let img = document.createElement('img');
//     img.style = 'position:fixed;top:10px;left:10px;width:100px';
//     document.body.append(img);
//
//     // выводим на экран
//     img.src = URL.createObjectURL(blob);
//
//     setTimeout(() => { // прячем через три секунды
//       img.remove();
//       URL.revokeObjectURL(img.src);
//     }, 3000);
//   });
//
// -- POST --
//
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//
// Output
//
// {
//   id: 101,
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }
//
// -- PUT --
//
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//
// Output
//
// {
//   id: 1,
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }
//
// -- DELETE --
//
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });
//
// -- Filtering --
//
// // This will return all the posts that belong to the first user
// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
