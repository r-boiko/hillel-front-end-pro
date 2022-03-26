// -- Якоря: начало строки ^ и конец $ --
//
// let str1 = "Mary had a little lamb";
// alert( /^Mary/.test(str1) ); // true
//
// -- --
//
// let str1 = "it's fleece was white as snow";
// alert( /snow$/.test(str1) ); // true
//
// -- Проверка на полное совпадение --
//
// let goodInput = "12:34";
// let badInput = "12:345";
//
// let regexp = /^\d\d:\d\d$/;
// alert( regexp.test(goodInput) ); // true
// alert( regexp.test(badInput) ); // false
