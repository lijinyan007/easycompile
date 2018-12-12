$(function(){
	fixheader();
	goTop();
	
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
	
	//点击微信客服，弹出遮罩
	$('.opin').click(function(){
		$('.mask').show();
	})
	//点击x遮罩隐藏
	$('.close').click(function(){
		$('.mask').hide();
	});
	
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
	};
})
