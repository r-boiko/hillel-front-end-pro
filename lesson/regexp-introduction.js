// regex online - https://regex101.com/
//
// regexp = new RegExp("шаблон", "флаги");
//
// regexp = /шаблон/; // без флагов
// regexp = /шаблон/gmi; // с флагами gmi (будут описаны далее)
//
// -- Флаги --
//
// i - не зависит от регистра: нет разницы между A и a
// g - ищет все совпадения, без него – только первое
// m - многострочный режим
// s - включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n
// u - включает полную поддержку юникода
// y - режим поиска на конкретной позиции в тексте
//
// -- Поиск: str.match --
//
// let str = "Любо, братцы, любо!";
// alert( str.match(/любо/gi) ); // Любо,любо (массив из 2х подстрок-совпадений)
//
// -- --
//
// let str = "Любо, братцы, любо!";
//
// let result = str.match(/любо/i); // без флага g
//
// alert( result[0] );     // Любо (первое совпадение)
// alert( result.length ); // 1
//
// // Дополнительная информация:
// alert( result.index );  // 0 (позиция совпадения)
// alert( result.input );  // Любо, братцы, любо! (исходная строка)
//
// -- --
//
// let matches = "JavaScript".match(/HTML/);
//
// if (!matches.length) {
//   alert("Совпадений нет"); // теперь работает
// }
//
// -- Замена: str.replace --
//
// // без флага g
// alert( "We will, we will".replace(/we/i, "I") ); // I will, we will
//
// // с флагом g
// alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will
//
// -- Проверка: regexp.test --
//
// let str = "Я ЛюБлЮ JavaScript";
// let regexp = /люблю/i;
//
// alert( regexp.test(str) ); // true
