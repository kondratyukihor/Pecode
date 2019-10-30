$(document).ready(function(){
	// responsive menu
	$('.header__toggle').click(function(){
		$('.header__nav-mobile').slideToggle(250);
	});

	// scroll to block
	var $page = $('html, body');
	$('.js-scroll').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 600);
	    return false;
	});
});