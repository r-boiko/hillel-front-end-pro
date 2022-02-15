function sum() {
  console.log(arguments instanceof Array); //false

  let sum = 0;

  [].forEach.call(arguments, function (el) {
    sum += el;
  });

  console.log(sum);
}
sum(1, 2, 3, 4, 5, 6); //21
// sum(10, 20, 30, 40, 50, 60, 100, 200); //510
// sum(30, 5, -15, -20); //0
