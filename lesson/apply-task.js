function printPhrase(words) {
  return console.log(this.phrase + words);
};

const holidayNY = { phrase: "С Новым Годом!", };
const holiday8March = { phrase: "С 8 Марта!", };

// связываем  printPhrase() и объект holidayNY
printPhrase.apply(holidayNY, [' друзья']); //выведет "С Новым Годом!"

// связываем  printPhrase() и объект holiday8March
printPhrase.apply(holiday8March, [' друзья']); //выведет "С 8 Марта!"
