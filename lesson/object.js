// -- create object --
// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {};  // синтаксис "литерал объекта"
//
// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };
//
// -- get prop from obj --
// console.log( user.name ); // John
// console.log( user.age ); // 30
//
// -- add new prop --
// user.isAdmin = true;
//
// -- delete prop from obj --
// delete user.age;
//
// -- add key with several words --
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
// };
//
// -- create with const --
// const user = {
//   name: "John"
// };
// user.name = "Pete"; // (*)
// console.log(user.name); // Pete
//
// -- use [] --
// let user = {};
// user["likes birds"] = true; // set prop
// console.log(user["likes birds"]); // get prop
// delete user["likes birds"]; // delete prop
//
// -- create obj from func --
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     job: 'programmer',
//     // ...other props
//   };
// }
//
// let user = makeUser("John", 30);
// console.log(user.name); // John
//
// -- "key" in object --
// let user = { name: "John", age: 30 };
// console.log( "age" in user ); // true, user.age present
// console.log( "blabla" in user ); // false, user.blabla absent
//
// -- for in --
// for (key in object) {
//   // body
// }
//
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };
//
// for (let key in user) {
//   // keys
//   console.log( key );  // name, age, isAdmin
//   // keys value
//   console.log( user[key] ); // John, 30, true
// }
