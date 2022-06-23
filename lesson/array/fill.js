/**
 * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
 * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
 */

const fill = (arraySize, value) => {
  throw new Error('Напишите здесь свое решение');
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

/**
 * Решение
 */

const fill = (arraySize, value) => new Array(arraySize).fill(value);
