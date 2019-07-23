$(document).ready(function() {
//绑定元素点击事件
$(".menu-list ul li").click(function() {
	//判断对象是显示还是隐藏
	if($(this).children(".list-p").is(":hidden")){
		//表示隐藏
		if(!$(this).children(".list-p").is(":animated")) {
			$(this).children(".xiala").css({'transform':'rotate(180deg)'}); 
			//如果当前没有进行动画，则添加新动画
			$(this).children(".list-p").animate({
					height: 'show'
				}, 1000)
				//siblings遍历div1的元素
				.end().siblings().find(".list-p").hide(1000);
		}
	} else {
		//表示显示
		if(!$(this).children(".list-p").is(":animated")) {
			$(this).children(".xiala").css({'transform':'rotate(360deg)'});  
			$(this).children(".list-p").animate({
					height: 'hide'
				}, 1000)
				.end().siblings().find(".list-p").hide(1000);
		}
	}
});

//阻止事件冒泡，子元素不再继承父元素的点击事件
$('.list-p').click(function(e){
	e.stopPropagation();
});

//点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
$(".menu-list ul li .list-p .zcd").click(function() {
	//设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
	$(this).addClass("removes").siblings().removeClass("removes");
	//遍历获取所有父菜单元素
	  $(".list-p").each(function(){
	  		//判断当前的父菜单是否是隐藏状态
	  		if($(this).is(":hidden")){
	  			//如果是隐藏状态则移除其样式
	  			$(this).children(".zcd").removeClass("removes");
		  		}
		  });
	});
});
