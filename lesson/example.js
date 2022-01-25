// lorem = merol
function reverseString(string) {
  let resultString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    let currentItem = string[i];

    // resultString = resultString + currentItem;
    resultString += currentItem;
  }

  return resultString;
}

console.log(reverseString('lorem'));
