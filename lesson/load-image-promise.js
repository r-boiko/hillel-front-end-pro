// -- loadImagePromise --
//
// function loadImagePromise(src) {
//   const img = new Image();
//   img.src = src;
//   img.style.margin = '5px';
//
//   const promise = new Promise(function (resolve, reject) {
//     img.onload = function () {
//       resolve(img);
//     };
//     img.onerror = reject;
//   })
//
//   return promise;
// }
//
// -- --
//
// loadImagePromise('https://dummyimage.com/200x200/000/fff&text=1')
//   .then(function (img) {
//     document.body.appendChild(img);
//   })
// loadImagePromise('https://dummyimage.com/200x200/000/fff&text=2')
//   .then(function (img) {
//     document.body.appendChild(img);
//   })
// loadImagePromise('https://dummyimage.com/200x200/000/fff&text=3')
//   .then(function (img) {
//     document.body.appendChild(img);
//   })
//
// -- --
//
// loadImagePromise('https://dummyimage.com/200x200/000/fff&text=1')
//   .then(function (img) {
//     document.body.appendChild(img);
//
//     return loadImagePromise('https://dummyimage.com/200x200/000/fff&text=2')
//   })
//   .then(function (img) {
//     document.body.appendChild(img);
//
//     return loadImagePromise('https://dummyimage.com/200x200/000/fff&text=3')
//   })
//   .then(function (img) {
//     document.body.appendChild(img);
//   })
//   .catch(function (error) {
//     console.log(error, 'error');
//   })
//   .finally(function () {
//     console.log('finally');
//   })
//
// -- Promise.all --
//
// const img1 = loadImagePromise('https://dummyimage.com/200x200/000/fff&text=1');
// const img2 = loadImagePromise('https://dummyimage.com/200x200/000/fff&text=2');
// const img3 = loadImagePromise('https://dummyimage.com/200x200/000/fff&text=3');
//
// Promise.all([img1, img2, img3])
//   .then(function (arrImg) {
//     arrImg.forEach(function (img) {
//       document.body.appendChild(img);
//     })
//   })
//   .catch(function (error) {
//     console.log(error, 'error');
//   })
//   .finally(function () {
//     console.log('finally');
//   })
//
// -- Promise.race --
//
// const img1 = loadImagePromise('https://dummyimage.com/200x200/000/fff&text=1');
// const img2 = loadImagePromise('https://dummyimage.com/200x200/000/fff&text=2');
// const img3 = loadImagePromise('https://dummyimage.com/200x200/000/fff&text=3');
//
// Promise.race([img1, img2, img3])
//   .then(function (img) {
//     document.body.appendChild(img);
//   })
//   .catch(function (error) {
//     console.log(error, 'error');
//   })
//   .finally(function () {
//     console.log('finally');
//   })

