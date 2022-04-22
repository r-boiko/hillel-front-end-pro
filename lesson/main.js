// console.log('main');
//
// function loadImage(src, callback, callbackError) {
//   const img = new Image();
//   img.src = src;
//   img.style.margin = '5px';
//   img.onload = function () {
//     callback.call(img);
//   };
//   img.onerror = callbackError;
// }
//
// loadImage('https://dummyimage.com/200x200/000/fff&text=1',function () {
//   document.body.appendChild(this);
//
//   loadImage('https://dummyimage.com/200x200/000/fff&text=2',function () {
//     document.body.appendChild(this);
//
//     loadImage('https://dummyimage.com/200x200/000/fff&text=3',function () {
//       document.body.appendChild(this);
//     }, function () {
//       console.log('error')
//     });
//   }, function () {
//     console.log('error')
//   });
// }, function () {
//   console.log('error');
// });

function loadImagePromise(src) {
  const img = new Image();
  img.src = src;
  img.style.margin = '5px';

  return new Promise(function (resolve, reject) {
    img.onload = function () {
      resolve(img);
    };
    img.onerror = reject;
  });
}

const img1 = loadImagePromise('https://dummyimage.com/200x200/000/fff&text=1');
const img2 = loadImagePromise('https://dummyi2mage.com/200x200/000/fff&text=2');
const img3 = loadImagePromise('https://dummyimage.com/200x200/000/fff&text=3');

Promise.allSettled([img1, img2, img3])
  .then(function (arrImg) {
    console.log(arrImg, 'all img loaded')

    arrImg.forEach(function (img) {
      if(img.value) {
        document.body.appendChild(img.value);
      }
    })
  })
  .catch(function () {
    console.log('error')
  });

// Promise.race([img1, img2, img3])
//   .then(function (img) {
//     document.body.appendChild(img);
//
//   });
