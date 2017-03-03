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
//滚轮事件
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
}
	//浏览器尺寸变化
/*window.onresize=function(){
	var windowWidth=document.body.clientWidth
	if(windowWidth<=1270){
	 	mouseEvent=null
	}else{
		mouseEvent=mouseWheelFn(window,windowUpFn,windowDownFn)
	}
}*/
var mouseEvent=mouseWheelFn(window,windowUpFn,windowDownFn)


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
	var contentUlTop= navWrap.offsetHeight+seriveUl.offsetTop;
	if(scrollTop>=navWrap.offsetHeight*0.6&&seriveUlBol){
		seriveUl.className=seriveUl.className+" serive_ul"
		seriveUlBol=false;
	}
	if(scrollTop>=navWrap.offsetHeight*1.6&&auLiBol){
		auLi.className=auLi.className+" au_li"
		auLi3.className=auLi3.className+" au_li3"
		auLiBol=false;
	}
	if(scrollTop>=navWrap.offsetHeight*2.8&&footNumBol){
		for(var m =0;m<footNum.length;m++){
			footNumTimer(m,textNum[m])
		}
		footNumBol=false;
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
/*----页面二*/
var $seriveImg=$("#seriveUl .content_list #imgs");
$seriveImg.on("mouseover",function(){
	$(this).animate({
		"opacity": "1"
	},500).on("mouseout",function(){
		$(this).animate({
			"opacity": "0"
		},500)
		})
})
/*----页面三  顶部文字定时器*/
var footNum=document.querySelectorAll(".text_num");
var textNum={0:1000,1:6,2:76,3:48,4:16000,5:24,6:180}
var end =1000;
var start = 0;
var seconds =3000;

function footNumTimer(i,end){
	footNum[i].timer=setInterval(function(){
		if(Number(footNum[i].innerText)>=end){
			clearInterval(footNum[i].timer)
		}else{
			var change = Number(footNum[i].innerText)+1
			footNum[i].innerText=change	
		}
	},seconds/(end-start))
}
