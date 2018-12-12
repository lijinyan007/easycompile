$(function() {
	var json = [{
			data: '少儿编程培训的好处不容忽视1',
			time: '2018-09-25'
		},
		{
			data: '关于少儿编程，家长必须知道这几件事！1',
			time: '2018-09-12'
		},
		{
			data: '少儿编程教育到底要教什么呢1',
			time: '2018-09-02'
		},
		{
			data: '少儿编程：盘点那些通过编程改变世界的人1',
			time: '2018-08-25'
		},
		{
			data: '少儿学习编程对未来工作有哪些帮助1',
			time: '2018-08-16'
		},
		{
			data: '小孩子为什么选择学习编程?1',
			time: '2018-08-05'
		},
		{
			data: '厉害！大连7所中学杀入全国500强名单！1',
			time: '2018-07-25'
		},
		{
			data: '酷叮猫少儿编程走进五四路小学开展公益讲堂活动1',
			time: '2018-07-03'
		},
		{
			data: '大连少儿编程：教会孩子有趣学算法的方法2',
			time: '2018-09-25'
		},
		{
			data: '学习少儿编程的这六大好处你一定要知道！2',
			time: '2018-09-12'
		},
		{
			data: '少儿编程教育孩子的五个有效方法2',
			time: '2018-09-02'
		},
		{
			data: '易编程简单几步教你如何搭建个人网站？2',
			time: '2018-08-16'
		},
		{
			data: '学编程与不学编程的孩子有什么区别？2',
			time: '2018-07-03'
		},
		{
			data: '孩子究竟需要什么样的少儿编程课程？2',
			time: '2018-08-16'
		},
		{
			data: '信息学奥赛的各个级别，您了解一下？2',
			time: '2018-07-03'
		},
		{
			data: '关于少儿编程，家长必须知道这几件事！2',
			time: '2018-09-25'
		},
		{
			data: 'Scratch-韩信点兵3',
			time: '2018-09-12'
		},
		{
			data: 'Python 快速排序3',
			time: '2018-09-02'
		},
		{
			data: 'Scratch-检测回文数3',
			time: '2018-08-25'
		},
		{
			data: 'Scratch-求解猴子吃桃问题3',
			time: '2018-08-16'
		},
		{
			data: 'Python Tex格式的引号转换3',
			time: '2018-08-05'
		},
		{
			data: 'Scratch-阶乘求和3',
			time: '2018-07-03'
		},
		{
			data: 'Python 冰雹猜想3',
			time: '2018-09-02'
		},
		{
			data: 'Python 蛇形填数3',
			time: '2018-07-01'
		},
		{
			data: '编程游戏_塔防4',
			time: '2018-09-02'
		},
		{
			data: '编程游戏_去重4',
			time: '2018-08-25'
		},
		{
			data: '编程游戏_倒序4',
			time: '2018-08-16'
		},
		{
			data: '编程游戏_美图4',
			time: '2018-08-05'
		},
		{
			data: '编程游戏_换图4',
			time: '2018-07-03'
		},
		{
			data: '编程游戏_飞车4',
			time: '2018-09-02'
		},
		{
			data: '编程游戏_象棋4',
			time: '2018-07-01'
		},
		{
			data: '编程游戏_王者4',
			time: '2018-07-01'
		},
		{
			data: '教会孩子有趣学算法的方法5',
			time: '2018-07-01'
		},
		{
			data: '教会孩子开心的学习5',
			time: '2018-07-01'
		},
		{
			data: '编程法则5',
			time: '2018-07-01'
		},
		{
			data: '如何更好地编程5',
			time: '2018-07-01'
		}
	];
	var pageSize=8;//每页的显示的条数
	var pageSum=Math.ceil(json.length/pageSize);//总页数
	var indexPage=1;//记录当前的页数
	var num=8//创建li的个数
	
	
	$('.left_title li').mouseenter(function() {
		var $this = $(this);
			index = $this.index();
			indexPage=index+1;
		for(var i in json){
		$('.left_main_current li p a').eq(i).html(json[i].data);
		$('.left_main_current li span').eq(i).html(json[i].time);
	}
		$this.addClass("selected").siblings('li').removeClass('selected');
		$('.left_main_current').eq(index).addClass('active').siblings().removeClass('active');
	});

	fixheader();

	//固定导航栏
	function fixheader() {
		$(window).scroll(function() {
			if($(window).scrollTop() > 0) {
				$(".header").css("position", "fixed");
				$(".header").css("top", 0);
			} else {
				$(".header").css("position", "relative");
				$(".header").css("top", 0);
			}

		})
	}

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
	creatli();
//	将所有数据渲染到页面
	for(var i in json){
		$('.left_main_current li p a').eq(i).html(json[i].data);
		$('.left_main_current li span').eq(i).html(json[i].time);
	}
	
	//创建页码数
	for(var i=1;i<=pageSum;i++){
		$('.news_next').before('<span class="news_box_btn1"><a href="javascript:;">'+i+'</a></span>');
	}
	//创建li的个数
	function creatli(){
		for(var i=0;i<num;i++){
			$('.left_main_current').prepend('<li><p><a href="#"></a></p><span></span></li>')
		}
	}
	
	//下一页
	$('.news_next').click(function(){
		indexPage++;
		if(indexPage<pageSum){
			$('.left_main_current li').remove();
			creatli();
			for(i=0;i<pageSize;i++){
				$('.left_main_current li p a').eq(i).html(json[pageSize*(indexPage-1)+i].data);
				$('.left_main_current li span').eq(i).html(json[pageSize*(indexPage-1)+i].time);
			}
		}
		else if(indexPage==pageSum){
			num=json.length-(indexPage-1)*pageSize;
			$('.left_main_current li').remove();
			creatli();
			for(i=0;i<num;i++){
				$('.left_main_current li p a').eq(i).html(json[pageSize*(indexPage-1)+i].data);
				$('.left_main_current li span').eq(i).html(json[pageSize*(indexPage-1)+i].time);
			}
			num=pageSize;
		}
		else{
			return false;
		}
	});
	//上一页
	$('.news_prev').click(function(){
		if(indexPage>=2){
			num=pageSize;
			$('.left_main_current li').remove();
			creatli();
			for(i=0;i<pageSize;i++){
				$('.left_main_current li p a').eq(i).html(json[pageSize*(indexPage-2)+i].data);
				$('.left_main_current li span').eq(i).html(json[pageSize*(indexPage-2)+i].time);
			}
		}else{
			return false;
		}
		indexPage--;
	});
	
	//点击页码跳转
	$('.news_box_btn1').on('click',function(){
		indexPage=$(this).text();
		if($(this).text()<pageSum){
			num=pageSize;
			$('.left_main_current li').remove();
			creatli();
		}
		if($(this).text()==pageSum){
			num=json.length-(indexPage-1)*pageSize;
			$('.left_main_current li').remove();
			creatli();
		}
		for(i=0;i<num;i++){
				$('.left_main_current li p a').eq(i).html(json[pageSize*(indexPage-1)+i].data);
				$('.left_main_current li span').eq(i).html(json[pageSize*(indexPage-1)+i].time);
			}
	})
	//尾页
	$('.lastpage').click(function(){
		indexPage=pageSum;
		num=json.length-(indexPage-1)*pageSize;
		$('.left_main_current li').remove();
		creatli();
		for(i=0;i<num;i++){
				$('.left_main_current li p a').eq(i).html(json[pageSize*(indexPage-1)+i].data);
				$('.left_main_current li span').eq(i).html(json[pageSize*(indexPage-1)+i].time);
			}
	})
	//首页
	$('.firstpage').click(function(){
		indexPage=1;
		num=pageSize;
		$('.left_main_current li').remove();
		creatli();
		for(i=0;i<num;i++){
				$('.left_main_current li p a').eq(i).html(json[pageSize*(indexPage-1)+i].data);
				$('.left_main_current li span').eq(i).html(json[pageSize*(indexPage-1)+i].time);
			}
	})

})