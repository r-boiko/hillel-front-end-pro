// -- add --
//
// $( "li" ).add( "p" );
//
// -- children --
//
// $( "ul.level-2" ).children()
//
// -- closest --
//
// $( "li.item-a" ).closest( "ul" )
//
// -- each --
//
// ( "li" ).each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
// });
//
// -- eq --
//
// $( "li" ).eq( 2 )
//
// -- filter --
//
// $( "li" ).filter( ":nth-child(2n)" )
//
// -- find --
//
// $( "li.item-ii" ).find( "li" )
//
// -- is --
//
// $( "ul" ).click(function( event ) {
//   var target = $( event.target );
//   if ( target.is( "li" ) ) {
//     target.css( "background-color", "red" );
//   }
// });
