$(function(){
	movetop();
	goTop();
	function movetop(){
		$('.expert_msg_con li').mouseenter(function(){
		$(this).children().children('.slide').stop().animate({'top':0},500);
		$(this).children().children('.slide').children('h1').css({color:'lightskyblue'});
	}).mouseleave(function(){
		$(this).children().children('.slide').stop().animate({'top':220},500);
		$(this).children().children('.slide').children('h1').css({color:'gray'});
	})
	}
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
		$('.silder .img').click(function() {
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
})
