// -- Скобочные группы --
//
// -- Пример: gogogo --
//
// alert( 'Gogogo now!'.match(/(go)+/i) ); // "Gogogo"
//
// -- Пример: домен --
//
// let regexp = /(\w+\.)+\w+/g;
// alert( "site.com my.site.com".match(regexp) ); // site.com,my.site.com
//
// -- Пример: email --
//
// let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
// alert("my@mail.com @ his@site.com.uk".match(regexp)); // my@mail.com, his@site.com.uk
