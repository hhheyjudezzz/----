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
	contentWrap.style.height=Math.max(...heightArr)+contentUl.offsetHeight+30+"px"
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
/*//----------方案3---------
//插入div
// var imgDiv =[];
var marginL=8;
// var imgArr=[];
var heightArr=[];
for(var i =0;i<num;i++){
	//插入第一行
	if(i<3){
		imgDiv[i].style.left=100*((i*imgDiv[i].offsetWidth+i*marginL)/picWrap.offsetWidth)+"%";
		imgArr[i].style.display="block";
		heightArr[i]=(imgArr[i].offsetHeight/contentWrap.offsetHeight)*100;
	}else{
		var minIndex=heightArr.indexOf(Math.min(...heightArr));
		// console.log(heightArr)
		// console.log(minIndex)
		var divLeft=imgDiv[minIndex].offsetLeft/contentWrap.offsetWidth
		imgDiv[i].style.left=100*divLeft+"%";
		// var minTop=(imgDiv[minIndex].offsetTop+marginL+imgDiv[minIndex].offsetHeight)/picWrap.offsetWidth;
		
		var imgDivTop=heightArr[minIndex]
		// console.log(imgDivTop);
		imgDiv[i].style.top=imgDivTop+"%";
		imgArr[i].style.display="block"
		// var imgHeight=(imgArr[i].offsetHeight/contentWrap.offsetHeight)*100;
		// heightArr[minIndex]=100*(imgDiv[minIndex].offsetTop+marginL+imgDiv[minIndex].offsetHeight)/picWrap.offsetWidth;
		heightArr[minIndex]+=(100*(marginL+imgDiv[i].offsetHeight))/picWrap.offsetWidth;
		console.log(imgDiv[minIndex].offsetHeight)
	}
}*/

//----------方案2---------
/*//插入div
var imgDiv =[];
var marginL=8;
// var imgArr=[];
var heightArr=[];
for(var i =0;i<num-1;i++){
	//插入第一行
	if(i<3){
		imgDiv[i]=document.createElement("div");
		picWrap.appendChild(imgDiv[i]);
		imgDiv[i].className="pic_inner";
		imgDiv[i].style.left=100*((i*imgDiv[i].offsetWidth+i*marginL)/picWrap.offsetWidth)+"%";
		// 创建图片
		imgArr[i]=document.createElement("img");
		imgArr[i].src=imgArr[i].getAttribute("date-src");
		imgDiv[i].appendChild(imgArr[i]);
		// imgArr[i].index=i;
		heightArr[i]=(imgArr[i].offsetHeight/contentWrap.offsetHeight)*100;
		// console.log(imgArr[0].offsetHeight)
		console.log(imgArr[i].getAttribute("date-src"))
		// imgArr[i].onload=function(){
		// 	heightArr[this.index]=(imgArr[this.index].offsetHeight/contentWrap.offsetHeight)*100;		
		// }
	}else{
		// console.log(heightArr)
	}
}
*/

//----------方案1---------
/*//插入div
var imgDiv = [];
var marginL=8;
var imgArr=[];
var heightArr=[];
for(var i =0;i<num-1;i++){
	//插入第一行
	if(i<3){
		imgDiv[i]=document.createElement("div");
		picWrap.appendChild(imgDiv[i]);
		imgDiv[i].className="pic_inner";
		imgDiv[i].style.left=100*((i*imgDiv[i].offsetWidth+i*marginL)/picWrap.offsetWidth)+"%";
		// 创建图片
		imgArr[i]=document.createElement("img");
		imgArr[i].src=skeImg[i];
		imgDiv[i].appendChild(imgArr[i]);
		imgArr[i].index=i;
		// heightArr[i]=(imgArr[i].offsetHeight/contentWrap.offsetHeight)*100;
		// console.log(imgArr[0].offsetHeight)
		// imgArr[i].onload=function(){
		// 	heightArr[this.index]=(imgArr[this.index].offsetHeight/contentWrap.offsetHeight)*100;		
		// }
	}else{
		console.log(heightArr)
	}
}*/

