$(function(){
	$('.system_con').mouseenter(function(){
		$(this).css('background','lightgray').siblings().css('background','none');
		$(this).children('.syetem_biancheng').css('transform','translateX(10px)').siblings().css('transform','translateX(0px)');
		$(this).children('.syetem_biancheng').css('transition','0.2s');
		
	});
	
	$('.system_con').mouseleave(function(){
		$(this).css('background','none');
		$(this).children('.syetem_biancheng').css('transform','translateX(0px)')
	});
	
	
	
	goTop();

	//回到顶部
	function goTop() {
		$('.silder .goTop').click(function() {
			clearInterval(timer);
			var timer = setInterval(function() {
				var pos = window.pageYOffset;
				if(pos > 0) {
					window.scrollTo(0, pos - 40);
				} else {
					clearInterval(timer);
				}
			}, 30)
		})
	}
	
	
	fixheader();
	
	//固定导航栏
	function fixheader() {
		$(window).scroll(function() {
			if($(window).scrollTop() >0) {
				$(".header").css("position", "fixed");
				$(".header").css("top", 0);
			} else {
				console.log("o");
				$(".header").css("position", "relative");
				$(".header").css("top", 0);
			}

		})
	}
})
