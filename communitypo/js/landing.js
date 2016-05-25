$('.pic-right').on('click', function(){
	$('.login').css({
		'display' : 'block'
	})
	$('.pic-con div:eq(0)').css({
		'display' : 'none'
	})
	$('.pic-change .pic-right').css({
		'display' : 'none'

	}).siblings().css({
		'display' : 'block'
	})
})
$('.pic-left').on('click', function(){
	$('.login').css({
		'display' : 'none'
	})
	$('.pic-con div:eq(0)').css({
		'display' : 'block'
	})
	$('.pic-change .pic-left').css({
		'display' : 'none'

	}).siblings().css({
		'display' : 'block'
	})
})
$('.pic-change span').hover(function(){
	$(this).css({
		'opacity' : '1'
	})
}, function(){
	$(this).css({
		'opacity' : '0.5'
	})
})
//假用户名密码实现页面跳转
$('.button').click(function() {
	var username = $('#username').val();
	var password = $('#password').val();
	if (username == 'a27922780' && password == '123456') {
		console.log('111');
		window.location.href = 'bg-page.html';
	} else {
		$('.landing p').css({
			'display' : 'block'
		})
	}
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