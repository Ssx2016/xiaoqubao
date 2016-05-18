// 链接类型效果
var target = true;
$('.app-link span').on('click', function() {
	if (target) {
		$('.applink-style').css({
			'display' : 'block'
		})
		target = false;
	} else {
		$('.applink-style').css({
			'display' : 'none'
		})
		target = true;
	}
})
// 链接类型hover效果
$('.applink-style li').hover(function() {
	$(this).css({
		'background' : '#4b9bff',
		'color' : '#fff'
	})
}, function() {
	$(this).css({
		'background' : '#fff',
		'color' : '#3a424a'
	})
})
// 自定义链接
$('.link-custom').on('click', function() {
	$('.applink-style').css({
		'display' : 'none'
	})
	$('.custom').css({
		'display' : 'block'
	})
})
$('.custom-tit div').on('click', function() {
	$('.custom').css({
		'display' : 'none'
	})
})
// 话题
$('.topic').on('click', function() {
	$('.applink-style').css({
		'display' : 'none'
	})
	$('.app-topic').css({
		'display' : 'block'
	})
})
$('.topic-tit div').on('click', function() {
	$('.app-topic').css({
		'display' : 'none'
	})
})
// 发布按钮-悬停
$('.btn-release').hover(function() {
	$(this).css({
		'background' : '#27c164'
	})
}, function() {
	$(this).css({
		'background' : '#2ed771'
	})
})
// 垃圾桶删除效果
$('.app-del').hover(function() {
	$(this).css({
		'background' : 'url("../images/appdel-2.png") center 0 no-repeat'
	})
	$(this).children('div').css({
		'display' : 'block'
	})
}, function() {
	$(this).css({
		'background' : 'url("../images/appdel-1.png") center 0 no-repeat'
	})
	$(this).children('div').css({
		'display' : 'none'
	})
})
// 删除确认框
$('.app-del').on('click', function(e) {
	var boxTop = e.clientY;
	// var boxLeft = e.clientX;
	console.log(boxTop);
	console.log(boxLeft);
	$('.del-check').css({
		'display' : 'block',
		// 'left' : (boxLeft - 110) + 'px',
		'top' : (boxTop + 225) + 'px'
	})
})
// 自定义类型拖拽-原生
var custom = document.getElementById('custom');
var newX = 0,
	newY = 0;
custom.onmousedown = function(e) {
	document.onmousemove = function(e) {
		newX = e.clientX;
		newY = e.clientY;
		custom.style.left = (newX - custom.offsetWidth / 2) + 'px';
		custom.style.top = (newY - custom.offsetHeight / 4) + 'px';
	}
}
document.onmouseup = function() {
	document.onmousemove = null;
}