
var menu = $('.quicklinks');
menu_init = menu.position().top;

var stickynav = function(menu_init){
		console.log(menu_init);
	if ( parseInt( window.pageYOffset ) <= ( menu_init ) ) {
		menu.removeClass('docked');
	};
	if ( parseInt( window.pageYOffset ) >= ( menu_init )) {
		menu.addClass('docked');
	};
};

document.onscroll = function () {
	stickynav(menu_init);
};



function scrollToInformation(event) {
	event.preventDefault();
	var diff = $(document).height() - $(window).height();
	var dest = ($(this.hash).offset().top > diff) ? diff : $(this.hash).offset().top;
	if (dest <= 480) { dest = 0; }
	$('html, body').animate({scrollTop: dest}, 500, 'swing');
}

$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});

	$('.quicklinks a').on('click', scrollToInformation);
	

	stickynav(menu_init);
	console.log(menu_init);


	$(window).resize(function() {
		if ( menu.position().top != 0 ) {
			menu_init = menu.position().top;
		}
		stickynav(menu_init);
		console.log(menu_init);
	});

});


