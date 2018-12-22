var placeholderText = new Array("你想搜点什么？", "你知道吗？热搜榜有很多热门话题", "锦城学院有2万学子，你是其中之一", "我很快能找到答案", "你好，我是锦城热搜", "让我想想");
var t;
var x = 0;

function timedCount() {
	if(x == placeholderText.length) {
		x = 0
	}
	document.getElementsByName('search')[0].placeholder = placeholderText[x];
	x++;
	t = setTimeout("timedCount()", 3000);
}

function searchEnter() {
	if(event.keyCode == 13) {
		//		alert("我一问三不知");
		document.getElementById('welcome').innerHTML = "正在搜索中...";
	}
}

function snow() {
	//    1、定义一片雪花模板
	var flake = document.createElement('div');
	// 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺
	flake.innerHTML = '❆';
	flake.style.cssText = 'position:absolute;color:#fff;';

	//获取页面的高度 相当于雪花下落结束时Y轴的位置
	var documentHieght = window.innerHeight;
	//获取页面的宽度，利用这个数来算出，雪花开始时left的值
	var documentWidth = window.innerWidth;

	//定义生成一片雪花的毫秒数
	var millisec = 50;
	//2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
	setInterval(function() { //页面加载之后，定时器就开始工作
		//随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
		var startLeft = Math.random() * documentWidth;

		//随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
		var endLeft = Math.random() * documentWidth;

		//随机生成雪花大小
		var flakeSize = 5 + 20 * Math.random();

		//随机生成雪花下落持续时间
		var durationTime = 6000 + 7000 * Math.random();

		//随机生成雪花下落 开始 时的透明度
		var startOpacity = 0.7 + 0.3 * Math.random();

		//随机生成雪花下落 结束 时的透明度
		var endOpacity = 0.1 + 0.2 * Math.random();

		//克隆一个雪花模板
		var cloneFlake = flake.cloneNode(true);

		//第一次修改样式，定义克隆出来的雪花的样式
		cloneFlake.style.cssText += `
                        left: ${startLeft}px;
                        opacity: ${startOpacity};
                        font-size:${flakeSize}px;
                        top:-25px;
                              transition:${durationTime}ms;
                      `;

		//拼接到页面中
		document.body.appendChild(cloneFlake);

		//设置第二个定时器，一次性定时器，
		//当第一个定时器生成雪花，并在页面上渲染出来后，修改雪花的样式，让雪花动起来；
		setTimeout(function() {
			//第二次修改样式
			cloneFlake.style.cssText += `
                                left: ${endLeft}px;
                                top:${documentHieght}px;
                                opacity:${endOpacity};
                            `;

			//4、设置第三个定时器，当雪花落下后，删除雪花。
			setTimeout(function() {
				cloneFlake.remove();
			}, durationTime);
		}, 0);

	}, millisec);
}
snow();