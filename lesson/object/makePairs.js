/**
 * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
 * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 */

const makePairs = (object) => {
  throw new Error(`Напишите здесь свое решение ${object}`);
};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]

/**
 * Решение
 */

const makePairs = (object) => Object.entries(object);

const makePairs2 = (object) => Object.keys(object).map((el) => [el, object[el]]);
