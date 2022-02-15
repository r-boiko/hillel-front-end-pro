let arr = [7, 8, 4, 5, 9];

let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);

console.log( max );   // 9
console.log( min );   // 4

/* сравним с циклом по массиву значений */
let max = -10, min = +10;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log( max );   // 9
console.log( min );   // 4
