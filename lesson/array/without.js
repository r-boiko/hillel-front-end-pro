/**
 * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
 * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
 */

const without = (array, ...args) => {
  throw new Error('Напишите здесь свое решение');
}

const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]

/**
 * Решение
 */

const without = (array, ...args) => {
  let filteredArray = [...array];

  for (let i = 0; i < args.length; i += 1) {
    filteredArray = filteredArray.filter((el) => el !== args[i]);
  }

  return filteredArray;
};
