// 导航栏信息提醒框颜色
var spanNav = document.getElementById('comNav').getElementsByTagName('span');
var arrNav = ['#eb6100','#ff0000','#00b7ee','#32b16c'];
var lenNav = spanNav.length;
for(var i = 0; i < lenNav; i++) {
	spanNav[i].style.backgroundColor = arrNav[i];
}

// 二级标题栏伸缩
var jundgeValue1 = true,
	jundgeValue2 = true,
	jundgeValue3 = true,
	jundgeValue4 = true,
	jundgeValue5 = true,
	jundgeValue6 = true;
function changeTit(ele, changeEle, jundgeValue) {
	$(ele).on('click', function() {
		var len = $(this).siblings('ul').children().length + 1;
		if(jundgeValue == true) {				
			$(changeEle).stop(true).animate({
				'height' : 35 * len + 'px'
			})
			jundgeValue = false;
		} else {
			$(changeEle).stop(true).animate({
				'height' : '35px'
			})
			jundgeValue = true;
		}
	})	
}
changeTit('.home-manage h2', '.home-manage', jundgeValue1);
changeTit('.ad-manage h2', '.ad-manage', jundgeValue2);
changeTit('.square-manage h2', '.square-manage', jundgeValue3);
changeTit('.admin-account h2', '.admin-account', jundgeValue4);
changeTit('.news-delay h2', '.news-delay', jundgeValue5);
changeTit('.seting h2', '.seting', jundgeValue6);
