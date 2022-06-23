/**
 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 */

const isEqualDeep = (element) => {
  throw new Error(`Напишите здесь свое решение ${element}`);
};

const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false

/**
 * Решение
 */

const isEqualDeep = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length === 0 && secondObjKeys.length === 0) {
    return true;
  }

  const compareList = firstObjKeys.map((key) => {
    const valueOfFirstObject = firstObj[key];
    const valueOfSecondObject = secondObj[key];
    if ((Number.isNaN(valueOfFirstObject) && Number.isNaN(valueOfSecondObject))
      || (valueOfFirstObject === null && valueOfSecondObject === null)) {
      return true;
    }
    if (valueOfFirstObject === valueOfSecondObject) {
      return true;
    }
    if (Array.isArray(valueOfFirstObject) && Array.isArray(valueOfSecondObject)) {
      return isArraysEqualDeep(valueOfFirstObject, valueOfSecondObject);
    }
    if (typeof valueOfFirstObject === 'object' && typeof valueOfSecondObject === 'object') {
      return isEqualDeep(valueOfFirstObject, valueOfSecondObject);
    }

    return false;
  });

  return !compareList.includes(false) && !compareList.includes(undefined);
};

const isArraysEqualDeep = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const compared = firstArray.map((el, id) => {
    if (Array.isArray(el) && Array.isArray(secondArray[id])) {
      return isArraysEqualDeep(el, secondArray[id]);
    }
    if (typeof el === 'object' && typeof secondArray[id] === 'object') {
      return isEqualDeep(el, secondArray[id]);
    }

    return secondArray[id] === el;
  });

  return !compared.includes(false);
};
