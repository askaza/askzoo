$(function() {

// Tabs


$( "#tabs" ).tabs();

$( "#tabs-pseudo" ).tabs( {
    collapsible: true,
    active: false
});



// Tabs-pseudo



// Accordion

    $('.accordion-arrow').click(function() {
	$(this).parents('.accordion').find('.standard-element__content').toggleClass('standard-element__content_visible');
	$(this).find('.ico').toggleClass('ico_content_arrow-up');
	StartCarousel();
    });

    StartCarousel();


// Likes

    $('.like-box').each(function() {
	$(this).click(function() {
		$(this).toggleClass('like-box_ready');
	});

    });



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

