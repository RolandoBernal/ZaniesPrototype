'use strict';

$(document).ready(function() {

		var $artist = $('.artist-section');
		var $showtimes = $('.showtimes-section');
		var $purchase = $('.purchase-section');

	$( ".artist-section" ).on( "click", function() {
	  console.log("You clicked artist");
		$artist.hide();
		$showtimes.show();
		$purchase.hide();
	});


	$( ".showtimes-section" ).on( "click", function() {
	  console.log("You clicked shotimes");
		$artist.hide();
		$showtimes.hide();
		$purchase.show();
	});

	$( ".purchase-section" ).on( "click", function() {
	  console.log("You clicked purchase");
		$artist.show();
		$showtimes.hide();
		$purchase.hide();
	});

});
