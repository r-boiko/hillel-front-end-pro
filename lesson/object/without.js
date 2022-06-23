/**
 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 */

const without = (object, ...args) => {
  throw new Error(`Напишите здесь свое решение ${object} ${args}`);
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, 'b', 'c')); // { a: 1 }

/**
 * Решение
 */

const without = (object, ...args) => {
  const newObject = { ...object };

  args.forEach((arg) => {
    delete newObject[arg];
  });

  return newObject;
};
