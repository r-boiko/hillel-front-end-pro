/**
 * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
 * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
 */

const isPlainObject = (element) => {
  throw new Error(`Напишите здесь свое решение ${element}`);
};

const data = { a: 1 };
console.log(isPlainObject(data)); // true

/**
 * Решение
 */

const isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;
