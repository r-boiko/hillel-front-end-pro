// Задание: удалить со строки все пробелы

let string = '    lorem     ipsum    ';
let resultString = '';

for (let i = 0; i < string.length; i++) {
  let currentItem = string[i];

  if(currentItem !== ' ') {
    resultString += currentItem;
  }
}

console.log(resultString);
