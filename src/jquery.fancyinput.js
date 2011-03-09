( function( $ )
{
  /**
   *
   *
   *
   */
  $.fn.fancyinput = function( button )
  {
    ( function( input )
    {
      // hide the original input
      input.css( { visibility : 'hidden' } );
      
      // create our fancy button container
      var fancy = $( '<div class="fancy-input"></div>' );
      
      // create a label to mimic the input's label
      var label = $( '<div class="fancy-input-label">No file selected.</div>' ).css( { display : 'inline', 'margin-left' : 10 } );
      
      // bind any changes in the input text to the button
      input.bind( 'change mouseout', function( ){ label.text( input.val( ) ); } );
      
      // forward on the click event from the input
      button = $( button ).click( function( ){ input.click( ); } );
      
      // insert the fancy button before the input
      input.parent( ).prepend( fancy.append( button ).append( label ) );
      
    } )( $( this ) );
  };
  
} )( jQuery );