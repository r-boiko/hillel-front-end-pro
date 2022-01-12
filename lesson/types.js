// -- number --
// let n = 123;

// -- BigInt --
// символ "n" в конце означает, что это BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// -- string --
// let str = "Привет";
// let str2 = 'Одинарные кавычки тоже подойдут';
// let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// -- boolean --
// let nameFieldChecked = true; // да, поле отмечено
// let ageFieldChecked = false; // нет, поле не отмечено

// let isGreater = 4 > 1;
// alert( isGreater ); // true (результатом сравнения будет "да")

// -- null --
// let age = null;

// -- undefined --
// let age;
// alert(age); // выведет "undefined"

// -- object --
// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };

// -- symbol --
// Создаём символ id с описанием (именем) "id"
// let id = Symbol("id");

// -- Оператор typeof --
// typeof undefined // "undefined"
// typeof 0 // "number"
// typeof 10n // "bigint"
// typeof true // "boolean"
// typeof "foo" // "string"
// typeof Symbol("id") // "symbol"
// typeof Math // "object"  (1)
// typeof null // "object"  (2)
// typeof alert // "function"  (3)
