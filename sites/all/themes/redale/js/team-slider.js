(function($) {
	var active = 0;
	var min = 0;
	var max = 0;
	var timer;

	$(function()
	{
		init();	
		
	});

	function init()
	{
		
		$(".prev").click(clickPrevious);
		$(".next").click(clickNext);
		$(".view-team-bio .views-row").click(stop);
		max = rows().length;
		$('body').append('<div id="shadowbox"></div>');
		var $first = rows().eq(0).clone();
		container().append($first);

		$('.view-team .views-row').click(function(){

			$('#block-views-team-bio-block').fadeIn();
			$('#shadowbox').fadeIn();
			var i=$(this).index();
			clickIndicator(i);
		});

		$(document).bind("mouseup touchend", function(e){
		
			var container =$('#block-views-team-bio-block');
			if (!container.is(e.target)
	        && container.has(e.target).length === 0) 
		    {
		        container.fadeOut();
		        $('#shadowbox').fadeOut();
		    }
		});

	
		setTimeout(layout, 50);
		$(window).resize(layout);
		
	}
	
	function createIndicators()
	{
		var $ul = $("<ul class='indicators' />");
		rows().each(function(i){
			if (i < max)
			{
				var $li = $("<li>"+i+"</li>");
				$li.click(clickIndicator);
				$ul.append($li);
			}
		});
		$ul.find(":first-child").addClass("active");
		$(".view-team-bio").append($ul);
	}

	function start()
	{
		timer = setInterval(timerNext, 8000);
	}

	function container()
	{
		return $(".view-team-bio .view-content");
	}
	function rows()
	{
		return container().find(".views-row");
	}
	function indicators()
	{
		return $(".view-team-bio .indicators li");
	}

	function layout()
	{
		var numRows = rows().length;
		var containerWidth = numRows * rowWidth();
		var width = 1/numRows*100
		container().width(containerWidth+"%");
		rows().width(width+"%");
	}

	function moveContainer()
	{
		var left = "-" + (active*rowWidth()) + "%";
		container().stop(false, false).animate({"left":left},1500);
		setActiveIndicator(active);
	}
	function jumpToEnd()
	{
		var active = rows().length-rowsPerPage();
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function jumpToBeginning()
	{
		var active = min;
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function rowWidth()
	{
		return 100/rowsPerPage();
	}
	function rowsPerPage()
	{
		if (isMobile())
		{
			return 1;
		}
		else if (isTablet())
		{
			return 1;
		}
		
		return 1;
	}

	function isMobile()
	{
		return $(window).width() < 540;
	}
	
	function isTablet()
	{
		return $(window).width() < 1220;
	}

	function previous()
	{
		active--;
		if (active < min)
		{
			jumpToEnd();
			active = max-1;
		}
		moveContainer();
	}

	function next()
	{
		active++;
		if (active > max)
		{
			jumpToBeginning();
			active = min+1;
		}
		moveContainer();
	}

	function gotoIndex(i)
	{
		active = i;
		var left = "-" + (active*rowWidth()) + "%";
		container().stop(false, false).animate({"left":left},0);
		setActiveIndicator(active);
		//moveContainer();
	}

	function clickPrevious()
	{
		previous();
		stop();
		return false;
	}

	function clickNext()
	{	
		next();
		stop();
		return false;
	}

	function clickIndicator(i)
	{
		
		setActiveIndicator(i);
		gotoIndex(i);
	
		
		stop();
	}

	function setActiveIndicator(i)
	{
		if (i >= max)
		{
			i = 0;
		}
	}

	function stop()
	{
		clearInterval(timer);
	}

	function timerNext()
	{
		next();
		layout();
	}



}(jQuery));
