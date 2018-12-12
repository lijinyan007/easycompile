$(function() {
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var strongRegex = new RegExp("^[0-9a-zA-Z._+-]{6,20}$");
	var mediumRegex1 = new RegExp("^[0-9]{6,20}$");
	var mediumRegex2 = new RegExp("^[0-9._+-]{6,20}$");
	var mediumRegex3 = new RegExp("^[a-zA-Z._+-]{6,20}$");
	var mediumRegex4 = new RegExp("^[0-9a-zA-Z]{6,20}$");
	var enoughRegex = new RegExp("^[0-9]{6,20}$");

	//手机验证
	$('#user').keyup(function() {
		CheckPhone();
	})

	$('#paw').keyup(function() {
		CheckPwd();
	})

	function CheckPhone() {
		if($('#user').val() == '') {
			$('.username b').html('请输入手机号码！');
			return false;
		} else if(!myreg.test($('#user').val())) {
			$('.username b').html('请输入有效的手机号码！');
			return false;
		} else {
			$('.username b').html('');
			return true;
		}
	}

	function CheckPwd() {
		let paw = $('#paw').val();
		if(paw.length < 6) {
			$('.password b').html("* 密码长度不能少于 6个字符");
			return false;
		} else if(paw.length > 20) {
			$('.password b').html("* 密码最长不得超过20个字符");
			return false;
		} else if(enoughRegex.test(paw)) {
			$('.password b').html("* 密码强度为低");
			return true;
		} else if(mediumRegex1.test(paw) || mediumRegex2.test(paw) || mediumRegex3.test(paw) || mediumRegex4.test(paw)) {
			$('.password b').html("* 密码强度为中");
			return true;
		} else if(strongRegex.test(paw)) {
			$('.password b').html("* 密码强度为高");
			return true;
		} else {
			$('.password b').html("*密码含有非法字符");
			return false;
		}
	}
	$('#paw').keyup(function() {
		CheckPwd();
	})

	//验证码倒计时
	var InterValObj; //timer变量，控制时间 
	var count = 60; //间隔函数，1秒执行 
	var curCount; //当前剩余秒数 

	$("#databtn").click(function() {

		curCount = count;
		if($('#user').val() == '') {
			$('.username b').html('请输入手机号码！');
		} else if(!myreg.test($('#user').val())) {
			$('.username b').html('请输入有效的手机号码！');
		} else {　　 //设置button效果，开始计时 
			$("#databtn").attr("disabled", "true");
			$("#databtn").val(curCount + "秒后可重新发送");
			InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次 
			　　
			//请求后台发送验证码 TODO 
		}
	})　

	//timer处理函数 
	function SetRemainTime() {
		if(curCount == 1) {
			window.clearInterval(InterValObj); //停止计时器 
			$("#databtn").removeAttr("disabled"); //启用按钮 
			$("#databtn").val("重新获取验证码");
		} else {
			curCount--;
			$("#databtn").val(curCount + "秒后可重新发送");
		}
	}
	//注册功能--本地存储服务
	var userPass = [];
	$('#registerbtn').click(function() {
		var username = $('#user');
		var password = $('#paw');
		var un = username.val();
		var pwd = password.val();
		var fail = 0;
		var json = window.localStorage.getItem('user-pass'); //获取到本地存储user-pass，是字符串类型
		var json = JSON.parse(json); //把字符串转成json数据
		if(window.localStorage.getItem('user-pass')) {
			userPass = JSON.parse(window.localStorage.getItem('user-pass'));
			for(var i = 0; i < json.length; i++) {
				if(username.val() == json[i].un && username.val()) {
					alert('该用户名已被注册');
					fail = 1;
					return;
				}
			}
		}
		if(CheckPhone() & CheckPwd()) {
			var json = {
				'un': un,
				'pwd': pwd
			};
			userPass.push(json);
			var str = JSON.stringify(userPass);
			window.localStorage.setItem('user-pass', str);
			window.location.href='login.html';
		}

	});

});