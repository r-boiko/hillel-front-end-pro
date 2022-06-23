/**
 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 */

const isEmpty = (object) => {
  throw new Error(`Напишите здесь свое решение ${object}`);
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

/**
 * Решение
 */

const isEmpty = (object) => {
  const objectKeys = Object.keys(object);
  if (objectKeys.length === 0) {
    return true;
  }

  return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
};
