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
		'min-height' : $('.common-tailcon').outerHeight() - 60
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

// 公共按钮的hover效果
$('.common-btn').hover(function() {
	$(this).css({
		'background' : '#27c164'
	})
}, function() {
	$(this).css({
		'background' : '#2ed771'
	})
})
//input聚焦效果
$('.intex, .intarea').on('focus', function(){
	$(this).parent().css({
		'border' : '1px solid #39f'
	})
})
$('.intex, .intarea').on('blur', function(){
	$(this).parent().css({
		'border' : '1px solid #ddd'
	})
})
var checkNum = true;
$('.checkout span').click(function(){
	if (checkNum) {
		$('.incheck ul').css({
			'display' : 'block'
		})
		checkNum = false;
	} else {
		$('.incheck ul').css({
			'display' : 'none'
		})
		checkNum = true;
	}
})
$('.incheck li').hover(function(){
	$(this).css({
		'background': '#eee',
		'color': '#000'
	})
}, function(){
	$(this).css({
		'background': '#fff',
		'color': '#b3b5b6'
	})
})
$('.incheck li').click(function(){
	var liIndex = $(this).index();
	var liCon = $('.incheck li').eq(liIndex).html();
	$('.checktex').html(liCon);
	$('.incheck ul').css({
		'display' : 'none'
	})
	checkNum = true;
})
// 表格操作hover效果
$('.common-tailcon table span').hover(function() {
	$(this).css({
		'color' : '#4df'
	})
}, function() {
	$(this).css({
		'color' : '#6aa2da'
	})
})
// 内容点页面更新（目前JS仅实现跳转页跳转，内容方面涉及PHP未添加）
$('.next-clickadd').on('click', function() {
	$('.next-clicksub').css({
		'visibility' : 'visible'
	});
	if($('.next-page').children()[0].innerHTML < $('.next-page').children()[1].innerHTML) {
		$('.next-page').children()[0].innerHTML = $('.next-page').children()[0].innerHTML / 1 + 1;
	}
	if($('.next-page').children()[0].innerHTML == $('.next-page').children()[1].innerHTML) {
		$(this).css({
			'visibility' : 'hidden'
		})
	}
})
$('.next-clicksub').on('click', function() {
	$('.next-clickadd').css({
		'visibility' : 'visible'
	});
	if($('.next-page').children()[0].innerHTML > 1) {
		$('.next-page').children()[0].innerHTML = $('.next-page').children()[0].innerHTML / 1 - 1;
	}
	if($('.next-page').children()[0].innerHTML == 1) {
		$(this).css({
			'visibility' : 'hidden'
		})
	}
})
$('.Jump-page div').on('click', function() {
	if($('.Jump-page input')[0].value >= 1 && $('.Jump-page input')[0].value <= $('.next-page').children()[1].innerHTML / 1) {
		$('.next-page').children()[0].innerHTML = $('.Jump-page input')[0].value;
	}
	$('.Jump-page input')[0].value = '';
	if($('.next-page').children()[0].innerHTML == 1) {
		$('.next-clicksub').css({
			'visibility' : 'hidden'
		})
		$('.next-clickadd').css({
			'visibility' : 'visible'
		})
	} else if($('.next-page').children()[0].innerHTML == $('.next-page').children()[1].innerHTML) {
		$('.next-clickadd').css({
			'visibility' : 'hidden'
		})
		$('.next-clicksub').css({
			'visibility' : 'visible'
		})
	} else {
		$('.next-clickadd').css({
			'visibility' : 'visible'
		})
		$('.next-clicksub').css({
			'visibility' : 'visible'
		})
	}
})