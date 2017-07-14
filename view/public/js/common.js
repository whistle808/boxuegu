define(['jquery', 'cookie','template','bootstrap'], function ($,cookie,template) {
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
	if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
		location.href = '/login';
	}
	if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/view/dashboard/login') {
		// console.log($.cookie("tcInfo"));
		var tcInfo = JSON.parse($.cookie("tcInfo"));
		// console.log(tcInfo);
		var htmlStr = template("tp_aside_avatar", tcInfo);
		$('.aside>.profile').html(htmlStr);
	}
	$("#logout").on("click", function () {
		$.ajax({
			url: '/api/logout',
			type: 'post',
			success: function (info) {
				// alert ("chenggong");
				if (info.code == 200) {
					location.href = "/login"
				}
			}
		})
	})
	// 侧边栏的交互功能
	$(".navs a+ul").prev().on("click",function(){
		// console.log("123")
		$(this).next().slideToggle();
	})

})