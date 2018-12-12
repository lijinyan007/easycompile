$(function(){
	
	//轮播图部分
	let bannerbox=$('.left');
	let liArr=$('.left ul li');
	let prev=$('.prev');
	let next=$('.next');
	let focus=$('.focus');
	var num=0;
	var imgWidth=liArr.eq(0).width();
	liArr.each(function(index,dom){
		$('<span>'+index+'</span>').appendTo($('.focus'));
	})
	$('.focus span').eq(0).addClass('active').siblings().removeClass('active');
	liArr.eq(0).css({'left':0}).siblings().css({'left':imgWidth});	
	//自动轮播
	bannerbox.timer=setInterval(autoplay,3000);
	function autoplay(){
		liArr.eq(num).animate({'left':-imgWidth},300);
		num=++num>liArr.length-1?0:num;
		liArr.eq(num).css({'left':imgWidth});
		liArr.eq(num).animate({'left':0},300);
		light();
	}
//	点击上一张
	prev.click(function(){
		liArr.eq(num).animate({'left':imgWidth},300);
		num=--num<0?liArr.length-1:num;
		liArr.eq(num).css({'left':-imgWidth});
		liArr.eq(num).animate({'left':0},300);
		light();		
	});
	//点击下一张
	next.click(function(){
		autoplay();		
	});
	//点亮焦点	
	function light(){
		$('.focus span').eq(num).addClass('active').siblings().removeClass('active');
	}
	//点击焦点切换
	$('.focus span').click(function(){
		var index=$(this).html();//焦点的数字
		if(num>index){
			liArr.eq(index).css({'left':-imgWidth}).animate({'left':0},300);
			liArr.eq(num).animate({'left':imgWidth},300);
		}else if(num<index){
			liArr.eq(index).css({'left':imgWidth}).animate({'left':0},300);
			liArr.eq(num).animate({'left':-imgWidth},300);
		}
		num=index;
		light();
	});
	//鼠标悬停时，停止自动轮播
	bannerbox.mouseenter(function(){
		clearInterval(bannerbox.timer);
	})
	bannerbox.mouseleave(function(){
		clearInterval(bannerbox.timer);
		bannerbox.timer=setInterval(autoplay,3000);
	})
})