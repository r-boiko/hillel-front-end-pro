// -- loadImage --
//
function loadImage(src, callback, callbackError) {
  const img = new Image();
  img.src = src;
  img.style.margin = '5px';
  img.onload = function () {
    callback.call(img);
  };
  img.onerror = callbackError;
}

loadImage('https://dummyimagde.com/200x200/000/fff&text=1', function () {
  console.log('1');
  document.body.appendChild(this);
}, function () {
  console.log('error');
});
loadImage('https://dummyimage.com/200x200/000/fff&text=2', function () {
  console.log('2');
  document.body.appendChild(this);
});
loadImage('https://dummyimage.com/200x200/000/fff&text=3', function () {
  console.log('3');
  document.body.appendChild(this);
});
