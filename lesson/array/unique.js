/**
 * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
 * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
 */

const unique = (array) => {
  throw new Error('Напишите здесь свое решение');
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]

/**
 * Решение
 */

const unique = (array) => Array.from(new Set(array));

const unique2 = (array) => array.filter((element, id) => array.indexOf(element) === id);
