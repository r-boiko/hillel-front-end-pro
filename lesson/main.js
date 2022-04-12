console.log('main');

function foo() {
  console.log('1');

  setTimeout(function () {
    console.log('2');
  }, 0)

  Promise.resolve("Success").then(function(value) {
    console.log('4');
  })

  console.log('3');
}

foo();
