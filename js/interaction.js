//上导航栏点击事件
var $btnImg=$("#nav_btn img")
$("#nav_btn img").on("click",function(){
	$("#nav_btn_ul").slideToggle(500)
})
//左导航栏点击事件
var navLeftsideLi=document.querySelectorAll(".navLeftsideUl li");
var noneImg=document.querySelectorAll(".boxTop img");
var box=document.querySelectorAll(".box");
var navLeftBol=true;
for(var i=0;i<navLeftsideLi.length;i++){
	navLeftsideLi[i].index = i;
	
		navLeftsideLi[i].onclick=function(){
			if(navLeftBol){
				box[this.index].style.display="block";
				navLeftBol=false;
			}
		}
		
	noneImg[i].index = i;
	noneImg[i].onclick=function(){
		box[this.index].style.display="none";
		navLeftBol=true;
	}
}
/*//滚轮事件
var windowW=document.body.clientWidth
var windowH=document.body.clientHeight
function mouseWheelFn(element,upFn,downFn){
	element.onmousewheel = fn;
	// 判断浏览器是否支持addEventListener方法
	if(window.addEventListener){
		element.addEventListener("DOMMouseScroll",fn,false);
	}

	// 函数,判断用户滚轮向上还是向下
	function fn(e){
		var e = e || window.event;
		// 判断滚轮方向
		// 滚轮向上
		if(e.wheelDelta > 0 || e.detail < 0){
			upFn();
		}else{
			downFn();
		}

		// 阻止冒泡
		e.cancelBubble = true;
		e.stopPropagation();
	}
}
	//jq 
function windowUpFn(){
	var windowS=$("body").scrollTop()||$("html").scrollTop()
	if(windowS%windowH==0){
		var windowChange=0
	}else{
		var windowChange=windowH-windowS%windowH
	}
	console.log(windowH-windowChange)
	$("html,body").animate({"scrollTop":windowS-windowH+windowChange},500)
}
function windowDownFn(){
	var windowS=$("body").scrollTop()||$("html").scrollTop()
	var windowChange=windowS%windowH
	$("html,body").animate({"scrollTop":windowS+windowH-windowChange},500)
}*/
	//浏览器尺寸变化
/*window.onresize=function(){
	var windowWidth=document.body.clientWidth
	if(windowWidth<=1270){
	 	mouseEvent=null
	}else{
		mouseEvent=mouseWheelFn(window,windowUpFn,windowDownFn)
	}
}*/
// var mouseEvent=mouseWheelFn(window,windowUpFn,windowDownFn)


var backTop=document.querySelector(".backTop");
var windowW=document.body.offsetWidth
var windowH=document.body.offsetHeight
var navWrap=document.querySelector("#nav_wrap");
var seriveUl=document.querySelector(".content_ul_content");
var seriveUl=document.querySelector(".content_ul_content");
var auLi=document.querySelectorAll(".au_content_list")[0];
var auLi3=document.querySelectorAll(".au_content_list")[2];
var seriveUlBol=true;
var auLiBol=true;
var footNumBol=true;
// 滚轮事件
window.onscroll=function(){
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
	if(scrollTop>windowH*0.5){
		backTop.style.display="block"
	}else{
		backTop.style.display="none"
	}
}

/*--------返回顶部------------*/
backTop.onclick=function(){
	var backTopTime=setInterval(function(){
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
		if(scrollTop<=0){
			clearInterval(backTopTime)
		}else{
			document.body.scrollTop-=100
		}
	},20)
}
	//大图滚动
var imgNum =0
$right=$(".right");
$right.hover(function(){
	$(this).children().fadeIn()
},function(){
	$(this).children().fadeOut()
})
$right.on("click",function(){
	var $introP=$(".p_inner:visible p")
	var $liVisble =$(".large_li:visible img")
	$liVisble.eq(imgNum).css({
		"display":"none"
	})
	if(imgNum<$liVisble.length-1){
		$liVisble.eq(imgNum).next().css({
			"display":"block"
		})		
		imgNum++; 
	}else{
		$liVisble.eq(0).css({
			"display":"block"
		})
		imgNum=0;	
	}
	$introP.eq(imgNum).css({
		"display":"block"
	}).siblings().css({
		"display":"none"
	})

})
$left=$(".left");
$left.hover(function(){
	$(this).children().fadeIn()
},function(){
	$(this).children().fadeOut()
})
$left.on("click",function(){
	var $introP=$(".p_inner:visible p")
	var $liVisble =$(".large_li:visible img")
	$liVisble.eq(imgNum).css({
		"display":"none"
	})
	if(imgNum>0){
		$liVisble.eq(imgNum).prev().css({
			"display":"block"
		})		
		imgNum--; 
	}else{
		$liVisble.eq($liVisble.length-1).css({
			"display":"block"
		})
		imgNum=$liVisble.length-1;		
	}
	$introP.eq(imgNum).css({
		"display":"block"
	}).siblings().css({
		"display":"none"
	})
})
	//小图点击
var $largeLi=$(".large_li")
var $pInner=$(".p_inner")
$minImg=$(".min_img_li");
$minImg.on("click",function(){
	imgNum =0
	$(".large_li:visible").css({
		"display":"none"
	})
	$(this).parents("#img_wrap").find($largeLi).eq($(this).index()).css({
			"display":"block"
	})
	/*$(this).parents("#img_wrap").find($pInner).css({
			"display":"block"
	}).siblings().css({
		"display":"none"
	})	*/
	console.log($(this).parents(".img_all").find($pInner).length)
	if($(this).parents(".img_all").find($pInner).length){
		$(".p_inner:visible").css({
			"display":"none"
		})
		$pInner.eq($(this).index()).css({
			"display":"block"
		})
	}	
})
		//小图上下滚动
$carUl=$(".car_ul");
$up=$(".up");
$down=$(".down")
$carUl.hover(function(){
	$up.children().fadeIn();
	$down.children().fadeIn();
},function(){
	$up.children().fadeOut();
	$down.children().fadeOut();
})
var minNum=0;
var max = 1;

$down.on("click",function(){
	var $minImgLi=$(this).parent().find($minImg)
	var minNone=$(this).parent().find($minImg).length-6
	console.log(minNone)
	for(var i = 0; i<minNone;i++){
		$minImgLi.eq(i).css({
			"display":"none"
		})
		$minImgLi.eq(i+6).css({
			"display":"block"
		})
		minNum++;		
	}
})
$up.on("click",function(){
	var $minImgLi=$(this).parent().find($minImg)
	var minNone=$(this).parent().find($minImg).length-6
	for(var i = 0; i<minNone;i++){
		$minImgLi.eq(i).css({
			"display":"block"
		})
		$minImgLi.eq(i+6).css({
			"display":"none"
		})
		minNum++;		
	}	
})
 //页面切换
$imgAll=$(".img_all");
$scrollLi = $(".scroll_li");
var allNum=0;
$scrollLi.on("click",function(){
	if(allNum!=$(this).index()){
		$imgAll.eq($(this).index()).css({
				"display":"block"
		})
		$imgAll.eq(allNum).css({
				"display":"none"
		})
		$(this).css({
			"border-bottom":"2px solid black"
		})	
		$(this).siblings().css({
			"border":"0"
		})		
		allNum=$(this).index();
		}

})

