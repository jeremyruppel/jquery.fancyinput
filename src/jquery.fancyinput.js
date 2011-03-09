( function( $ )
{
  /**
   * jquery fancyinput plugin
   * 
   * Author: jeremy ruppel
   * Homepage: https://github.com/jeremyruppel/jquery.fancyinput
   *
   * About:
   *
   * jquery.fancyinput is a quick little plugin for styling file input fields.
   * the technique was inspired heavily from this blog post by David:
   *
   * http://blog.vworld.at/2008/08/21/styling-an-input-typefile-using-jquery/
   *
   * Usage:
   *
   * $( 'input[type=file]' ).fancyinput( '<a class="my-new-button">Upload yer filez!</a>' );
   *
   */
  $.fn.fancyinput = function( button )
  {
    ( function( input )
    {
      // hide the original input
      // TODO there may be something else we can do here to truly hide it,
      // like absolutely position it off the page
      input.css( { visibility : 'hidden' } );
      
      // create our fancy button container
      var fancy = $( '<div class="fancy-input"></div>' );
      
      // create a label to mimic the input's label
      var label = $( '<div class="fancy-input-label">No file selected.</div>' ).css( { display : 'inline', 'margin-left' : 10 } );
      
      // bind any changes in the input text to the button
      input.bind( 'change', function( ){ label.text( input.val( ) ); } );
      
      // don't risk it, update that label whenever the user interacts with it
      fancy.bind( 'mouseout', function( ){ label.text( input.val( ) ); } );
      
      // forward on the click event from the input
      button = $( button ).click( function( ){ input.click( ); } );
      
      // insert the fancy button before the input
      input.parent( ).prepend( fancy.append( button ).append( label ) );
      
    } )( $( this ) );
  };
  
} )( jQuery );