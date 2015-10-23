(function($){

$(function(){

	var count = $('.view-engineering-services .view-content .views-row').length;
	var i=0;

	var num=Math.round(count/2);


			for(i=0;i<num;i++)
			{
				$('.view-engineering-services .view-content .views-row').eq(i).addClass('first');
			}

			for(i=count;i>=num;i--)
			{
				$('.view-engineering-services .view-content .views-row').eq(i).addClass('second');
			}	
			$('.view-engineering-services .view-content .first').wrapAll('<div class="firstbox">');

			$('.view-engineering-services .view-content .second').wrapAll('<div class="secondbox">');
	
});

})(jQuery);
