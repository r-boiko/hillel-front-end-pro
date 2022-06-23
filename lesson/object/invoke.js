/**
 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 */

const invoke = (object, path, func, args) => {
  throw new Error(`Напишите здесь свое решение ${object} ${path} ${func} ${args}`);
};

const data = { a: { b: [1, 2, 3] } }
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

/**
 * Решение
 */

const invoke = (object, path, func, args) => {
  const splittedPath = path.split('.');

  const target = splittedPath.reduce((acc, key) => {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});

  return Array.prototype[func].apply(target, args);
};
