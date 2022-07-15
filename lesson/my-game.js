let userName = prompt('Привет! Как тебя зовут?');

while (userName === '' || userName === null) {
  alert('Введите свое имя!');
  userName = prompt('Привет! Как тебя зовут?');
}

alert(`${userName}, я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "угадал"`)

let number = 42;
let count = 0;
let userNumber = prompt('Введите число от 1 до 100');

while (userNumber != number) {
  if (userNumber < number) {
    alert('Сорри, не угадал! Мало!');
    userNumber = prompt('Введите число от 1 до 100');

    count = count + 1;
  } else if(userNumber > number) {
    alert('Сорри, не угадал! Много!');
    userNumber = prompt('Введите число от 1 до 100');

    count = count + 1;
  }
}

alert(`Угадал! Кол-во попыток ${count}`);
