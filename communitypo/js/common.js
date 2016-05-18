// 导航栏信息提醒框颜色
var spanNav = document.getElementById('comNav').getElementsByTagName('span');
var arrNav = ['#eb6100','#ff0000','#00b7ee','#32b16c'];
var lenNav = spanNav.length;
for(var i = 0; i < lenNav; i++) {
	spanNav[i].style.backgroundColor = arrNav[i];
}
// 二级标题栏伸缩
function telescopic() {
	var arr = [],
		comLenth = $('.common-tit').children('div').length,
		oldHeight = $('.common-tit').children('div').height(),
		selParent = $('.select').parents('ul').parent('div').index();
	$('.common-tit').css({
		'min-height' : $('.common-tailcon').height()
	})
	for (var i = 0; i < comLenth; i++) {
		arr.push('true');
	}
	$('.select').parents('ul').parent('div').css({
		'height' : $('.select').parents('ul').height() + oldHeight
	})
	if (selParent != -1) {
		arr.splice(selParent, 1, 'false');
	}
	$('.common-tit div').children('h2').click(function(){
		var liLength = $(this).siblings('ul').height(),
			thisNum = $(this).parent().index();
		if (arr[thisNum] == 'true') {
			$(this).parent().stop(true).animate({
				'height' : liLength + $(this).height()
			})
			arr.splice(thisNum, 1, 'false');
		} else {
			$(this).parent().stop(true).animate({
				'height' : oldHeight
			})
			arr.splice(thisNum, 1, 'true');
		}
	})
}
telescopic();
//点击退出返回登录页
$('.back-index').click(function(){
	window.location.href = 'landing.html';
})