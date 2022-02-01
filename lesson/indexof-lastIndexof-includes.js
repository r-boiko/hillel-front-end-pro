// arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
// arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
//
// let arr = [1, 0, false];
//
// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1
//
// alert( arr.includes(1) ); // true

// Кроме того, очень незначительным отличием includes является то,
// что он правильно обрабатывает NaN в отличие от indexOf/lastIndexOf:
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (должен быть 0, но === проверка на равенство не работает для NaN)
alert( arr.includes(NaN) );// true (верно)
