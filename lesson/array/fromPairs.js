/**
 * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
 * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 */

const fromPairs = (array) => {
  throw new Error('Напишите здесь свое решение');
}

const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }

/**
 * Решение
 */

const fromPairs = (array) => array.reduce((acc, value) => {
  if (Array.isArray(value)) {
    acc[value[0]] = value[1];
  }
  return acc;
}, {});
