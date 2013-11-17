function tooltipInit() {
	$.each($('.b-tooltip-parent'), function() {
		var tooltip = $(this).find('.b-tooltip');
		var link = $(this).find('.b-link');
		$(this).mouseover(function(e) {
			tooltip.show();
			tooltip.css({
				'left':0,
				'margin-left': - (tooltip.outerWidth()/2 - link.outerWidth()/2) + 'px'
			})
			stopEvent(e);
		});
		$(this).mouseout(function(e) {
			tooltip.hide();
			stopEvent(e);
		});
	})
}
function stopEvent(e) {
	if( e.preventDefault ) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	e.stopPropagation();
}

function descriptionExpand() {
	var description = $('#description');
	var expander = $('#description_expander');
	var descriptionHeight = $('#description .b-text-block').height();
	var shortHeight = '390px';
	description.height(shortHeight);
	expander.click(function () {
		if(description.hasClass('expanded')) {
			description.animate({height:shortHeight},1000, function() {
				expander.text('Ещё...');
			}).removeClass('expanded');

		} else {
			description.animate({height:descriptionHeight},1000, function() {
				expander.text('Свернуть');
			}).addClass('expanded');
		}
	});
}

$(window).ready(function(){
	tooltipInit();
})