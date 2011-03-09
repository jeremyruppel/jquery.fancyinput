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
      // default no-file text
      var nofile = "No file selected.";
      
      // hide the original input
      input.css( { visibility : 'hidden', position : 'absolute', top : -9999 } );
      
      // create our fancy button container
      var fancy = $( '<div class="fancy-input"></div>' );
      
      // create a label to mimic the input's label
      var label = $( '<div class="fancy-input-label"></div>' ).css( { display : 'inline', 'margin-left' : 10 } ).text( nofile );
      
      // method to update the label
      var update = function( )
      {
        var text = input.val( );
        
        label.text( text.length > 0 ? text : nofile );
      };
      
      // bind any changes in the input text to the button
      input.bind( 'change', update );
      
      // don't risk it, update that label whenever the user interacts with it
      fancy.bind( 'mouseout', update );
      
      // forward on the click event from the input
      button = $( button ).click( function( ){ input.click( ); } );
      
      // insert the fancy button before the input
      input.parent( ).prepend( fancy.append( button ).append( label ) );
      
    } )( $( this ) );
  };
  
} )( jQuery );