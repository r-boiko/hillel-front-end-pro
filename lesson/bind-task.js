function printPhrase(words) {
  return console.log(this.phrase + words);
};

const holidayNY = { phrase: "С Новым Годом!", };
const holiday8March = { phrase: "С 8 Марта!", };

// связываем  printPhrase() и объект holidayNY
const printNY = printPhrase.bind(holidayNY, ' друзья');
printNY(); //выведет "С Новым Годом!"

// связываем  printPhrase() и объект holiday8March
const print8March = printPhrase.bind(holiday8March, ' друзья');
print8March(); // выведет "С 8 Марта!"
