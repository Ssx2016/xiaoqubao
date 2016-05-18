// 搜索按钮悬停效果
$('.btn-search').hover(function() {
	$(this).css({
		'background' : '#27c164'
	})
}, function() {
	$(this).css({
		'background' : '#2ed771'
	})
})
// 下载按钮悬停效果
$('.download').hover(function() {
	$(this).css({
		'background' : 'url("../images/download-2.png") center 0 no-repeat'
	})
	$(this).children('div').css({
		'display' : 'block'
	})
}, function() {
	$(this).css({
		'background' : 'url("../images/download-1.png") center 0 no-repeat'
	})
	$(this).children('div').css({
		'display' : 'none'
	})
})
// 删除按钮悬停效果
$('.list-del').hover(function() {
	$(this).css({
		'background' : 'url("../images/listdel-2.png") center 0 no-repeat'
	})
	$(this).children('div').css({
		'display' : 'block'
	})
}, function() {
	$(this).css({
		'background' : 'url("../images/listdel-1.png") center 0 no-repeat'
	})
	$(this).children('div').css({
		'display' : 'none'
	})
})
// 删除确认框效果
// $(document).ready(function(e) {
// 	var boxTop = e.clientY;
// 	$('.list-del').on('click', function(e) {
// 		var offset = $(this).offset();
// 		var newTop = e.clientY;
// 			$('.del-check').css({
// 				'display' : 'block',
// 				'top' : (boxTop) + 'px'
// 			})
// 		console.log(newTop);
// 	})
// })
// 确定、取消-悬停效果
$('.del-check div').hover(function() {
	$(this).css({
		'color' : '#fff',
		'background' : '#2ed771'
	})
}, function() {
	$(this).css({
		'color' : '#6a6868',
		'background' : '#fff'
	})
})
// 取消删除
$('.del-no').on('click', function() {
	$('.del-check').css({
		'display' : 'none'
	})
})