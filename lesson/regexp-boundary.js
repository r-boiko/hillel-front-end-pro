// -- Граница слова: \b --
//
// alert( "Hello, Java!".match(/\bJava\b/) ); // Java
// alert( "Hello, JavaScript!".match(/\bJava\b/) ); // null
//
// -- --
//
// alert( "Hello, Java!".match(/\bHello\b/) ); // Hello
// alert( "Hello, Java!".match(/\bJava\b/) );  // Java
// alert( "Hello, Java!".match(/\bHell\b/) );  // null (нет совпадения)
// alert( "Hello, Java!".match(/\bJava!\b/) ); // null (нет совпадения)
