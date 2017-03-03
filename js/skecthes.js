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
	//效果图页面
var picWrap=document.getElementById('picture_wrap');
var contentWrap=document.querySelector(".content_wrap");
var AllImgArr=document.querySelectorAll(".pic_inner img");
var AllImgDiv=document.querySelectorAll("#picture_wrap .pic_inner");
var contentUl=document.getElementById('contentUl');
//----------方案4---------
//插入div
var marginL=8;
var heightArr=[];
imgFn(AllImgArr,AllImgDiv,3)
function imgFn(imgArr,imgDiv,row){
	for(var i =0;i<imgArr.length;i++){
		//插入第一行
		if(i<row){

			imgDiv[i].style.left=i*imgDiv[i].offsetWidth+i*marginL+"px";
			imgArr[i].style.display="block";
			heightArr[i]=imgArr[i].offsetHeight;
		}else{
			var minIndex=heightArr.indexOf(Math.min(...heightArr));
			imgDiv[i].style.left=imgDiv[minIndex].offsetLeft+"px"
			var imgDivTop=heightArr[minIndex];
			imgDiv[i].style.top=heightArr[minIndex]+marginL+"px";
			imgArr[i].style.display="block"
			heightArr[minIndex]+=imgDiv[i].offsetHeight+marginL;
		}
	}
	picWrap.style.height=Math.max(...heightArr)+"px"
	contentWrap.style.height=Math.max(...heightArr)+contentUl.offsetHeight+80+"px"
	heightArr=[]
}

//浏览器窗口变化
window.onresize=function(){
	if(document.body.clientWidth>640){
		imgFn(AllImgArr,AllImgDiv,3)
		AllImgDiv[2].style.top= 0+"px"
	}else{
		imgFn(AllImgArr,AllImgDiv,2)
	}
}
var $mask=$("#mask");
	//没加过渡效果
$(AllImgDiv).on("mouseover",function(){
	$mask.appendTo($(this)).css({
		"width":$(this).width()+"px",
		"height":$(this).height()+"px",
		"display":"block"
	})
	$(AllImgDiv).on("mouseout",function(){
		$mask.css({
			"display":"none"
		})
	})
})
$mask.on("click",function(){
	console.log($(this).siblings())
	var windowScrH=document.body.scrollHeight;
	var maskWrap=$("<div></div>").addClass("maskWrap").css({
		"height":windowScrH,
	}).appendTo($("body"))
	var $imgWrap=$(this).siblings().clone().addClass("imgWrap");
	$imgWrap.appendTo(maskWrap).animate({
		"margin-left": "-30%",
		
		"width": "60%",
	},300).css({
		"margin-top":-0.5*( $(this).height()*100/document.body.clientHeight)+"%",
	})
})
