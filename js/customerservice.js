$(function(){

//	轮播图
	let liArr=$('li');
	var imgHeight=$('li').eq(0).height();
	var num=0;
	let box=$('.right_adver_bottom>div');
	liArr.eq(0).css('bottom', '0').siblings().css('bottom',-imgHeight);
	box.timer=setInterval(autoplay,1000);
	function autoplay(){					
		liArr.eq(num).animate({'bottom':-imgHeight},300);
		num=++num>liArr.length-1?0:num;
		liArr.eq(num).css({'bottom':imgHeight});
		liArr.eq(num).animate({'bottom':0},300)
	};				
	box.mouseenter(function(){
		clearInterval(box.timer);
	});				
	box.mouseleave(function(){
		clearInterval(box.timer);
		box.timer=setInterval(autoplay,1000);
	});
	
	//表单验证	
	var myreg =/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	$('#tel').keyup(function(){
		if($('#tel').val()==''){
			$('.tel').html('请输入手机号码');
		}else if(!myreg.test($('#tel').val())){
			$('.tel').html('请输入有效的手机');
		}else{
			$('.tel').html('');
		}
	});
	$('#btn').click(function(){
		if($('#name').val()==''){
			$('.name').html('请输入有效的姓名');
		}if($('#tel').val()==''){
			$('.tel').html('请输入手机号码');
		}if($('#con').val()==''){
			$('.con').html('不能为空');
		}
		else{
			alert('提交成功，请注意短信及电话查收！');
		}
	})
	
	
})			
