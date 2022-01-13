let userName = prompt('Enter your name');

while(!userName) {
  userName = prompt('Enter your name');
}

alert(userName + ' - game rules');

const randomNumber = '42';
let userAnswer = prompt('Please, enter your number');

while (userAnswer !== randomNumber) {
  if(userAnswer < randomNumber) {
    alert('Your number is small =(');
    userAnswer = prompt('Please, enter your number');
  } else if (userAnswer > randomNumber) {
    alert('Your number is big =(');
    userAnswer = prompt('Please, enter your number');
  }
}

alert(userAnswer + ' is correct number! =)');
