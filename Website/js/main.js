'use strict';

$(document).ready(function() {

		var $home = $('.homeSection');
		var $showtimes = $('.showtimes-section');
		var $purchase = $('.purchase-section');

  //On Click Functions for the li buttons to reveal content below

  function onClickSelect(button, section) {
    $('.button').removeClass('active');
    button.addClass('active');
  }


  $('.home').click(function() {
    onClickSelect($(this), $('.homeSection'));
    $home.show();
		$showtimes.hide();
		$purchase.hide();
  });
  $('.showtimes').click(function() {
    onClickSelect($(this), $('.showtimes-section'));
		$home.hide();
		$showtimes.show();
		$purchase.hide();
  });
	$('.purchase').click(function() {
		onClickSelect($(this), $('.purchase-section'));
		$home.hide();
		$showtimes.hide();
		$purchase.show();
	});

});
