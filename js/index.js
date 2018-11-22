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