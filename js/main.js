$(document).ready(function(){

function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.

	setInterval(function () {
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < $imageEls.length ? index + 1 : 0;
		// Show the next image.
		$imageEls.eq(index).addClass('show');
		// Hide the previous image.
		$imageEls.eq(index - 1).removeClass('show');

	}, 4500);
};

// Document Ready.
$(function () {
	cycleBackgrounds();

});

$(function() {
  // scroll handler
  var scrollToAnchor = function( id ) {

    // grab the element to scroll to based on the name
      var elem = $("#" + id);

    // if the destination element exists
      if ( elem ) {

    // do the scroll
      $('html, body').animate({
        scrollTop: elem.offset().top
      }, 1250 );

        }
    }

        // bind to click event
        $("a").click(function( event ) {

                // only do this if it's an anchor link
                if ( $(this).attr("href").match("#") ) {

                        // cancel default event propagation
                        event.preventDefault();

                        // scroll to the location
                        var href = $(this).attr('href').replace('#', '')
                        scrollToAnchor( href );

                }

        });

  });
});
