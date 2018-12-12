$(function() {
	goTop();
	slider();
	move();
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
	//轮播图
	var imgWidth = $('.imgbox ul li img').width(); //获取轮播图图片的宽度
	//将所有图片置于可视区右边,并将第一张图片放到可视区中
	$('.imgbox ul li').each(function(index, obj) {
		$(obj).css("left", imgWidth);
	})
	//将第一张图片放置在当前位置
	$('.imgbox ul li').eq(0).css("left", 0);

	function slider() {

		//开启定时器自动轮播
		var num = 0; //记录当前显示的图片下标
		var timer = null;

		function autoplay() {
			timer = setInterval(play, 2000);
		}
		autoplay();

		function play() {
			$('.imgbox ul li').eq(num).animate({
				"left": -imgWidth
			}, 500);
			num = ++num > $('.imgbox ul li').length - 1 ? 0 : num;
			$('.imgbox ul li').eq(num).css('left', imgWidth).animate({
				"left": 0
			}, 500);
			light();
		}
		//鼠标移入移入
		$('.slider').mouseenter(function() {
			clearInterval(timer);
		}).mouseleave(function() {
			clearInterval(timer);
			timer = setInterval(play, 2000);
		})
		//下一张
		var oldtime = new Date();
		$('.right').click(function() {
			if(new Date() - oldtime > 400) {
				play();
			} else {
				return false;
			}
			light();
			oldtime = new Date();
		})
		//上一张
		$('.left').click(function() {
			if(new Date() - oldtime > 400) {
				$('.imgbox ul li').eq(num).animate({
					"left": imgWidth
				}, 500);
				num = --num < 0 ? $('.imgbox ul li').length - 1 : num;
				$('.imgbox ul li').eq(num).css('left', -imgWidth).animate({
					"left": 0
				}, 500);
			} else {
				return false;
			}
			light();
			oldtime = new Date();
		})
		//创建焦点
		$('.imgbox ul li').each(function(index, obj) {
			var span = $('<span class="slider_ctrl_con">' + index + '</span>');
			$('.num').append(span);
		})
		//点亮小圆点
		function light() {
			$('.num').children(".slider_ctrl_con").eq(num).addClass('current').siblings().removeClass('current');
		}
		light();
		//点击小圆点切换图片
		$('.slider_ctrl_con').each(function(index, obj) {
			$(this).click(function() {
				if(num > index) {
					$('.imgbox ul li').eq(index).css("left", -imgWidth).animate({
						"left": 0
					}, 500);
					$('.imgbox ul li').eq(num).animate({
						"left": imgWidth
					}, 500);
					num = index;
					light();
				} else if(num < index) {
					$('.imgbox ul li').eq(index).css("left", imgWidth).animate({
						"left": 0
					}, 500);
					$('.imgbox ul li').eq(num).animate({
						"left": -imgWidth
					}, 500);
					num = index;
					light();
				} else {
					return false;
				}
			})
			light();
		})

	}
	//新闻中心图片动态
	function move() {
		$('.new_center_con>li').mouseenter(function() {
			$(this).stop().animate({
				'top': -20
			}).siblings().stop().animate({
				'top': 0
			});
		}).mouseleave(function() {
			$(this).stop().animate({
				'top': 0
			});
		})
		$('.title_box .more').mouseenter(function() {
			$(this).stop().animate({
				'bottom': 20
			}).parent().siblings().children('more').animate({
				'bottom': 10
			});
		}).mouseleave(function() {
			$(this).stop().animate({
				'bottom': 10
			})
		})
	}
})