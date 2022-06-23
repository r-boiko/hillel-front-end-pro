/**
 * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 */

const reverse = (array) => {
  throw new Error('Напишите здесь свое решение');
}

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]

/**
 * Решение
 */

const reverse = (array) => {
  const reversed = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    reversed.push(array[i]);
  }

  return reversed;
};
