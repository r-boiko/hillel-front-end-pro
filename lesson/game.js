let name = prompt('Hello! What is your name?');
while (name === '' || name == null) {
  name = prompt('Hello! What is your name?');
}

alert(name + ', I guessed a number from 1 to 100. Try to guess it in the least number of attempts. After each attempt, I will say "little", "much" or "guessed".');

// let number = 42;
let number = generateRandomNumber(100);
let guess = prompt('What number did I guess?');
let count = 0;

while (number != guess) {
  if (guess > number) {
    guess = prompt('Your number is big. Try again =)');
    count = count + 1;
  }

  if (guess < number) {
    guess = prompt('Your number is small. Try again =)');
    count = count + 1;
  }
}

alert('You guessed it! This number is ' + number + '. It took you ' + count + ' tries.');
