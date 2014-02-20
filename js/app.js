window.onscroll = function() {
	var spoon = $('#spoon')
    if (window.pageYOffset > 250) {
			spoon.addClass('insert-left')
    } 
    else {
      spoon.removeClass('insert-left')
    }
};

var menu = $('.quicklinks');
var menu_pos = menu.position().top - 15;

window.onscroll = function () {
	
    if (window.pageYOffset > menu_pos) {
      menu.addClass('docked');
    } 
    else if (window.pageYOffset < menu_pos ) {
      menu.removeClass('docked');
    }
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
    
});
