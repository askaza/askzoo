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
		$(this).parents('.accordion').find('.standard-element__content').slideToggle();
		$(this).find('.ico').toggleClass('ico_content_arrow-up');
	    });


});

