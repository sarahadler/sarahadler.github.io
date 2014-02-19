function scrollToInformation(event) {
    event.preventDefault();
    var diff = $(document).height() - $(window).height();
    var dest = ($(this.hash).offset().top > diff) ? diff : $(this.hash).offset().top;
    if (dest <= 480) { dest = 0; }
        $('html, body').animate({scrollTop: dest}, 800, 'swing');
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
