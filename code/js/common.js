$(function() {

// Tabs

	$('.tabs-title').on('click', '.tabs-title__item:not(.tabs-title__item_current)', function() {
		$(this).addClass('tabs-title__item_current').siblings().removeClass('tabs-title__item_current')
			.parents('.tabs').find('.tab-content').eq($(this).index()).fadeIn(150).siblings('.tab-content').hide();
	});

	var tabIndex = window.location.hash.replace('#tab','')-1;
	if (tabIndex != -1) $('.tabs-title .tabs-title__item').eq(tabIndex).click();

	$('.tabs-title__item a[href*=#tab]').click(function() {
		var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
		$('.tabs-title__item .tabs-title__item').eq(tabIndex).click();
	});


	    $('.accordion-arrow').click(function() {
		$(this).parents('.accordion').find('.standard-element__content').toggleClass('standard-element__content_visible');
		$(this).find('.ico').toggleClass('ico_content_arrow-up');
		 StartCarousel();
	    });

	    StartCarousel();

});

function StartCarousel() {
    $('.gallery-carousel').each(function(){
	var galleryWidth = $(this).width();
	var galleryItemsCount = $(this).find('.thumbnails__item').size() * $(this).find('.thumbnails__item').width();

	if ( galleryWidth < galleryItemsCount) {
	    if ($(this).children('.next-advice').size() < 1 ) {
		$(this).append('<span class="next-advice"><i class="ico ico_content_arrow-next"></i></span>');
	    }


	    $(this).find('.thumbnails').carouFredSel({
		items: 'auto',
		auto : false,
		next : ".next-advice",

		items   : {
		    height:50,
		    width:50,
		},

		scroll: {
		    items: 1,
		    duration:500
		}
	    });
	}
    });
}

