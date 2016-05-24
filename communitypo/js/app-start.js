// // 上传照片
// var thisTime = new Date();
// var textTime = thisTime.getTime();
// var fileimg = document.getElementById("fileimg");
// var upimg = document.getElementById("upimg");

// $('.upload-time .intex').eq(0).val(textTime);
// fileimg.addEventListener('change', function(e) {
//     upimg.src = window.URL.createObjectURL(this.files[0]);
//     upimg.onload = function() {
//         window.URL.revokeObjectURL(this.src);
//     }
// })
// 链接类型下拉框效果
var target = true;
$('.link-style span').on('click', function() {
	if (target) {
		$('.style-select').css({
			'display' : 'block'
		})
		target = false;
	} else {
		$('.style-select').css({
			'display' : 'none'
		})
		target = true;
	}
})
// 链接类型hover效果
$('.style-select li').hover(function() {
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
// 自定义链接-弹窗效果
$('.style-custom').on('click', function() {
	$('.custom-link').css({
		'display' : 'block'
	})
	$('.style-select').css({
		'display' : 'none'
	})
})
$('.common-hidtit').children('div').on('click', function() {
	$('.custom-link').css({
		'display' : 'none'
	})
	target = true;
})
// 话题-弹窗效果
$('.style-topic').on('click', function() {
	$('.topic-link').css({
		'display' : 'block'
	})
	$('.style-select').css({
		'display' : 'none'
	})
})
$('.common-hidtit').children('div').on('click', function() {
	$('.topic-link').css({
		'display' : 'none'
	})
})
// 删除-悬停效果
$('.tab-del').hover(function() {
	$(this).css({
		'background' : 'url("../images/appdel-2.png") center center no-repeat'
	})
	$(this).children('em').css({
		'display' : 'block'
	})
}, function() {
	$(this).css({
		'background' : 'url("../images/appdel-1.png") center center no-repeat'
	})
	$(this).children('em').css({
		'display' : 'none'
	})
})