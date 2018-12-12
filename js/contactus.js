$(function(){
	//留言板
	var $phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	//封装验证手机号的正确性函数
	regPhone();
	var regtel=false;
	function regPhone(){
		$('.usertel').keyup(function(){
			if(!$phoneReg.test($('.usertel').val())){
				$('.usertel').parent().children('.tel_error').html('手机号不正确！');
				
			}else{
				$('.usertel').parent().children('.tel_error').html('*');
				regtel=true;
			}
		});
	}
	
	$('.contact_sub').click(function(){
		
		if($('.username').val()==''){
			$('.username').parent().children('.user_error').html('用户名不能为空！');
		}else if($('.usertel').val()==''){
			console.log(1)
			$('.usertel').parent().children('.tel_error').html('手机号不能为空！');
		}
		if($('.username').val()!=''&&$('.usertel').val()!=''&&regtel){
			alert('您的意见已提交成功')
		}
	});
	
	
	//点击微信客服，弹出遮罩
	$('.opin').click(function(){
		$('.mask').show();
	})
	//点击x遮罩隐藏
	$('.close').click(function(){
		$('.mask').hide();
	});
});