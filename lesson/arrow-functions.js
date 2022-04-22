// -- Arrow functions --
//
// -- Базовый синтаксис --
//
// (param1, param2, …, paramN) => { statements }
// (param1, param2, …, paramN) => expression
// // эквивалентно: (param1, param2, …, paramN) => { return expression; }
//
// // Круглые скобки не обязательны для единственного параметра:
// (singleParam) => { statements }
// singleParam => { statements }
//
// // Функция без параметров нуждается в круглых скобках:
// () => { statements }
// () => expression
// // Эквивалентно: () => { return expression; }
//
// -- Расширенный синтаксис --
//
// // Когда возвращаете литеральное выражение объекта, заключите тело в скобки
// params => ({foo: bar})
//
// // Rest параметры и параметры по умолчанию поддерживаются
// (param1, param2, ...rest) => { statements }
// (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
//
// // Деструктуризация тоже поддерживается
// var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
// f();  // 6
