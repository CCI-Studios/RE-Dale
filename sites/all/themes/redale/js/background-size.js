(function($){

$(function(){

	boxHeight(0.4,0.7);
	var imgSrc1 = $('.view-banner .views-field-field-image-banner img').attr('src');
	var current2 = $('.view-banner .views-field-field-image-banner');
	$('.view-banner .views-field-field-image-banner img').remove();
	$(current2).append('<div class="backbg"></div>');
	$('.view-banner .views-field-field-image-banner .backbg').css('background-image', 'url(' + imgSrc1 + ')');  

	var imgSrc1 = $('#header-image img').attr('src');
	var current2 = $('#header-image');
	$('#header-image img').remove();
	$(current2).append('<div class="backbg"></div>');
	$('#header-image .backbg').css('background-image', 'url(' + imgSrc1 + ')');  


	function boxHeight(w,h)
	{
		var height=$(window).height();
	  	var width=$(window).width();
	  	$('#block-views-team-bio-block').css({'height':h*height});
	  	$('#block-views-team-bio-block').css({'width':w*width});
	}
	
	if($(window).width()<950)
  	{
  		boxHeight(0.7,0.6);
  	}  
  	if($(window).width()<767)
  	{
  		boxHeight(0.8,0.7);
  	}

  	$(window).resize(function(){

	  	boxHeight(0.4,0.7);

	  	if($(window).width()<950)
	  	{
	  		boxHeight(0.7,0.6);
	  	}

	  	if($(window).width()<767)
	  	{
	  		boxHeight(0.8,0.7);
	  	}

  	});
});

})(jQuery);
