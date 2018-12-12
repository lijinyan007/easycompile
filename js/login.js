$(function(){
	logintype();
	login();
});
//1.选择不同的方式登录
function logintype(){
	$('.login_title li').eq(0).css({'border-color':'#FFC501'});
	$('.login_title li').click(function(){
		//把所有的下边框的样式设置为初始值
		$('.login_title li').each(function(){
			$(this).css({'border-color':'#ccc'});
		});
		//点击的那一个变颜色
		$(this).css({'border-color':'#FFC501'});
		var index=$(this).index();
		//相应的登录方式显示
		$('.login_con ul').eq(index).show().siblings().hide();
	});
	
}
//2.验证身份登录
function login(){
	var $phone=$('.login_phone');
	var $email=$('.login_email');
	var $school=$('.login_school');
	var $phoneLog = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	var $emailLog=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	//
	validate($('#user_phone'),$('.phone_error'),$phoneLog,'手机号');
	validate($('#user_email'),$('.email_error'),$emailLog,'邮箱');
	//学校账号验证
	objblur($('#user_school'),$('.school_error'),'学校账号');
	
	//密码不能为空
	objblur($('#pwd1'),$('.ph_pwd_error'),'密码');
	objblur($('#pwd2'),$('.email_pwd_error'),'密码');
	objblur($('#pwd3'),$('.school_pwd_error'),'密码');
	//获取到本地存储user-pass，是字符串类型
	var json = window.localStorage.getItem('user-pass'); 
	//把字符串转成json数据
	json = JSON.parse(json);
	$('.login_btn').click(function(){
		success($('#user_phone'),$('#pwd1'));
	});
	function success(username,pwd){
		var fail=0;
		//验证账号和密码是否存在
			for(var i = 0; i < json.length; i++) {
				if(username.val() == json[i].un&&username.val()&&pwd.val()==json[i].pwd) {
					
					username.val('');
					pwd.val('');
					window.location.href='index.html';
					return;
				}else{
					var fail=1;
				}
			}
			if(fail){
				alert('用户名或密码错误');
			}
			
	}

}
//封装正则验证函数
function validate(obj,errobj,validateval,erroval){
		$(obj).keyup(function(){
			if($(this).val()!=null||$(this).val()!=''){
				if(!validateval.test($(this).val())){
					$(errobj).html(erroval+'不正确').show();
					$(this).parent().css({'marginBottom':'0px'});
				}else{
					$(errobj).html('').hide();
					$(this).parent().css({'marginBottom':'20px'});
				}
			}
			
	});
	
	objblur(obj,errobj,erroval);
}
function objblur(obj,errobj,erroval){
	//失去焦点
	$(obj).blur(function(){
		if($(this).val()==null||$(this).val()==''){
			$(errobj).html(erroval+'不能为空').show();
			$(this).parent().css({'marginBottom':'0px'});
		}else{
			$(errobj).html('').hide();
			$(this).parent().css({'marginBottom':'20px'});
		}
		
	});
}
