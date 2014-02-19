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
});

(function($, window, undefined) {
    function scrollingSlider(selector, beginpos, endpos) {
        var slide,
            timeout = 0;
        slide = function () {
            var scrollpos;
            window.clearTimeout(timeout);
            timeout = 0,
                scrollpos = $(window).scrollTop();
            $(selector).each(function () {
                var $this = $(this),
                    margintarget,
                    margin = parseInt($this.css('margin-left'), 10),
                    step;
                if (scrollpos <= beginpos) {
                    margintarget = -1000;
                } else if (scrollpos >= endpos) {
                    margintarget = 0;
                } else {
                    margintarget = Math.round(-1000 * (endpos - scrollpos) / (endpos - beginpos));
                }
                if (margintarget === margin) {
                    return; // nothing more to do
                }
                step = margintarget - margin;
                if (Math.abs(step) > 25) {
                    step = 25 * (step < 0 ? -1 : 1);
                }
                $this.css('margin-left', margin + step);
                if (!timeout && (margin + step) !== margintarget) {
                    timeout = window.setTimeout(slide, 10);
                }
            });
        };
        $(window).on('scroll', slide);
    }
    $(document).ready(function (){
        scrollingSlider('.post-129, .post-169', 100, 300);
    });
}(jQuery, window));