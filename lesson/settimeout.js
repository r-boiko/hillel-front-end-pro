// -- setTimeout --
//
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
//
// function sayHi() {
//   alert('Привет');
// }
//
// setTimeout(sayHi, 1000);
//
// -- --
//
// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }
//
// setTimeout(sayHi, 1000, "Привет", "Джон"); //
//
// -- --
//
// setTimeout("alert('Привет')", 1000);
// setTimeout(() => alert('Привет'), 1000);
//
// -- --
//
// // не правильно!
// setTimeout(sayHi(), 1000);
//
// -- clearTimeout --
//
// let timerId = setTimeout(...);
// clearTimeout(timerId);
//
// let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
// alert(timerId); // идентификатор таймера
//
// clearTimeout(timerId);
// alert(timerId); // тот же идентификатор (не принимает значение null после отмены)
