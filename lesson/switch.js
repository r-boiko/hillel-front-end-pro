// -- switch --
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//   ...
//     [break]
//
//   case 'value2':  // if (x === 'value2')
//   ...
//     [break]
//
//   default:
//   ...
//     [break]
// }
//
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}
