(function($){

$(function(){

	$("#block-block-9").click(function(e){

		e.preventDefault();
		$('#block-system-main-menu').slideToggle('slow');
		$(this).toggleClass('open');
	})
});

})(jQuery);
