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
var scrollBol=true;
function windowUpFn(){
    console.log("up")
	var windowS=$("body").scrollTop()||$("html").scrollTop()
    if(windowS%windowH==0){
		var windowChange=0
	}else{
		var windowChange=windowH-windowS%windowH
	}
	if(windowS>0&&scrollBol){
	    console.log(12212)
        scrollBol=false;
        $("html,body").animate({"scrollTop":windowS-windowH+windowChange},500,function(){
            scrollBol=true;
        })

    }

}
function windowDownFn(){
    console.log("down")
	var windowS=$("body").scrollTop()||$("html").scrollTop()
	var windowChange=windowS%windowH
    if(scrollBol) {
        scrollBol=false;
        $("html,body").animate({"scrollTop": windowS + windowH - windowChange}, 500,function(){
            scrollBol=true;
        })
    }
}
var mouseEvent=mouseWheelFn(window,windowUpFn,windowDownFn)


var backTop=document.querySelector(".backTop");
var windowW=document.body.offsetWidth;
var windowH=document.body.offsetHeight;
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
    if(scrollTop>=windowH){
     console.log(1)
     window.onmousewheel=null
     }else{
     mouseEvent=mouseWheelFn(window,windowUpFn,windowDownFn)
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
for(var i =0;i<AllImgArr.length;i++){
    AllImgArr[i]=new Image();
    if(i==AllImgArr.length-1){
        AllImgArr[i].onload=function(){
            console.log("onload")
            imgFn(AllImgArr,AllImgDiv,3)
        }
    }

    // var img = new Image();
    // img.src = AllImgArr[i].src;
    // img.onload = function(){
    // 	if(i == AllImgArr.length-1){
    // 		console.log("imgxxxx");
    // 		imgFn(AllImgArr,AllImgDiv,3);
    // 	}
    // }
}
function imgFn(imgArr,imgDiv,row){
    console.log("imgFn")
	for(var i =0;i<imgArr.length;i++){
		imgDiv[i].style.display="block"
		//插入第一行
		if(i<row){
			imgDiv[i].style.left=i*imgDiv[i].offsetWidth+i*marginL+"px";
			imgDiv[i].style.top = 0+"px"
			heightArr[i]=imgArr[i].offsetHeight;
		}else{
			var minIndex=heightArr.indexOf(Math.min(...heightArr));
			imgDiv[i].style.left=imgDiv[minIndex].offsetLeft+"px"
			// var imgDivTop=heightArr[minIndex];
			imgDiv[i].style.top=heightArr[minIndex]+marginL+"px";

			heightArr[minIndex]+=imgDiv[i].offsetHeight+marginL;
		}
	}
	picWrap.style.height=Math.max(...heightArr)+"px"
	contentWrap.style.height=Math.max(...heightArr)+contentUl.offsetHeight+80+"px"
	heightArr=[];
}
//实现瀑布流页面切换
var pageIndex = 0 ;
var designArr = [AllImgArr[1],AllImgArr[5],AllImgArr[6],AllImgArr[9],AllImgArr[11],AllImgArr[13]];
var designDivArr = [AllImgDiv[1],AllImgDiv[5],AllImgDiv[6],AllImgDiv[9],AllImgDiv[11],AllImgDiv[13]];
var publicArr = [AllImgArr[2],AllImgArr[4],AllImgArr[7],AllImgArr[10]];
var publicDivArr = [AllImgDiv[2],AllImgDiv[4],AllImgDiv[7],AllImgDiv[10]];
var businessArr = [AllImgArr[11],AllImgArr[15],AllImgArr[17],AllImgArr[20],AllImgArr[24]];
var businessDivArr = [AllImgDiv[11],AllImgDiv[15],AllImgDiv[17],AllImgDiv[20],AllImgDiv[24]];
var houseArr = [AllImgArr[13],AllImgArr[14],AllImgArr[21]];
var houseDivArr = [AllImgDiv[13],AllImgDiv[14],AllImgDiv[21]];
var landsapeArr = [AllImgArr[0],AllImgArr[8],AllImgArr[12],AllImgArr[19]];
var landsapeDivArr = [AllImgDiv[0],AllImgDiv[8],AllImgDiv[12],AllImgDiv[19]];
var decorationArr = [AllImgArr[1],AllImgArr[14],AllImgArr[18],AllImgArr[22],AllImgArr[23],AllImgArr[25]];
var decorationDivArr = [AllImgDiv[1],AllImgDiv[14],AllImgDiv[18],AllImgDiv[22],AllImgDiv[23],AllImgDiv[25]]
var lightArr = [AllImgArr[6],AllImgArr[9],AllImgArr[24],AllImgArr[25]];
var lightDivArr = [AllImgDiv[6],AllImgDiv[9],AllImgDiv[24],AllImgDiv[25]];
var handArr = [AllImgArr[15],AllImgArr[19],AllImgArr[21],AllImgArr[23],AllImgArr[25]];
var handDivArr = [AllImgDiv[15],AllImgDiv[19],AllImgDiv[21],AllImgDiv[23],AllImgDiv[25]];
var picJson=[{"img":AllImgArr,"div":AllImgDiv},{"img":designArr,"div":designDivArr},{"img":publicArr,"div":publicDivArr},
	{"img":businessArr,"div":businessDivArr},{"img":houseArr,"div":houseDivArr},{"img":landsapeArr,"div":landsapeDivArr},
	{"img":decorationArr,"div":decorationDivArr},{"img":lightArr,"div":lightDivArr},{"img":handArr,"div":handDivArr}]
var ulBtns = document.querySelectorAll(".contentList");
    //给所有li添加点击事件
for(var　i = 0;i<ulBtns.length;i++){
	ulBtns[i].index = i;
	ulBtns[i].onclick=function(){
	    for(var　n = 0;n<ulBtns.length;n++){
            ulBtns[n].className = "contentList"
        }
		ulBtns[this.index].className =ulBtns[this.index].className+" li_border"
		for(var n = 0 ;n<AllImgArr.length;n++){
			AllImgDiv[n].style.display = "none";
		}
		imgFn(picJson[this.index].img,picJson[this.index].div,3)
		pageIndex = this.index;
		changeHeight(pageIndex)
	}
}
function changeHeight(index) {
	if(index ==0){
        contentUl.className = "allUl_height";
        picWrap.className = "picWrap_top";
	}
	if(index >0){
        contentUl.className = "design_height";
        picWrap.className = "designPic_top";
	}
}
// window.onresize=function(){
// 	console.log("resize")
//     windowW=document.body.offsetWidth;
//     windowH=document.body.offsetHeight;
//         //瀑布流改变
//     for(var　i = 0;i<ulBtns.length;i++){
//         if(pageIndex ==i){
//             if(document.body.clientWidth>640){
//                 imgFn(picJson[i].img,picJson[i].div,3)
//                 picJson[i].div[2].style.top= 0+"px"
//             }else{
//                 imgFn(picJson[i].img,picJson[i].div,2)
//             }
//         }
//     }
//     var windowWidth=document.body.clientWidth
//     if(windowWidth<=1270){
//         window.onmousewheel=null
//     }else{
//         mouseEvent=mouseWheelFn(window,windowUpFn,windowDownFn)
//     }
// }

var $mask=$("#mask");
var $maskImg=$("#mask_img");
$(AllImgDiv).on("mouseenter",function(){
	$maskImg.appendTo($(this));
	$mask.appendTo($(this)).css({
		"width":$(this).width()+"px",
		"height":$(this).height()+"px",
	}).stop().fadeIn()
	$maskImg.css({
		"display":"block"
	}).stop().fadeIn()
	
})
$(AllImgDiv).on("mouseleave",function(){
		$mask.stop().fadeOut()
		$maskImg.stop().fadeOut()
	})

$closeBtn=$("#close_btn");
var $right=$(".right");
var $left=$(".left");
$mask.on("click",function(){
	var windowScrH=document.body.scrollHeight;
	var windowWidth1 = document.body.offsetWidth;
	var windowHeight1 = document.body.offsetHeight;
	var $maskWrap=$("<div></div>").addClass("maskWrap").css({
		"height":windowScrH,
	}).appendTo($("body"))
	var $imgContainer=$("<div></div>").addClass("imgContainer");
	var $imgWrap=$(this).siblings().eq(0).clone().addClass("imgWrap").appendTo($imgContainer);
		//保存图片编号
	imgIndex=$(this).parent().index(".pic_inner:visible")
    allIndex=$(".pic_inner:visible").length;
    console.log(imgIndex)  //-------------
	var $imgP=$("<p></p>").addClass("img_P").text("室外透视图").appendTo($imgContainer);
	 $right.css({
	 	"display":"block"
	 }).appendTo($imgContainer);
	$left.css({
	 	"display":"block"
	 }).appendTo($imgContainer);
	
	$closeBtn.appendTo($imgContainer).css({
		"display":"block"
	});
	// 判断放大后图片是否过大
	var imgWrap = $imgWrap.get(0);
	containerHeightFn(imgWrap,$imgContainer);

		//点击关闭图片
	$closeBtn.on("click",function(){
		$maskWrap.remove();
		$imgContainer.remove();
	})
	$maskWrap.on("click",function(){
		$maskWrap.remove();
		$imgContainer.remove();
	})
})
	/*-----------判断放大后图片是否过大-------------*/
function containerHeightFn(largeImg,container,bol){
	var windowWidth1 = document.body.offsetWidth;
	var windowHeight1 = document.body.offsetHeight;
	var imgHeight=getNaturalWidthAndHeight(largeImg)
	var imgWrapHeight = (windowWidth1*0.6/imgHeight[0])*imgHeight[1]
	console.log(largeImg);
	if(bol){
		if(imgWrapHeight<windowHeight1*0.7){
			console.log("aaaaaaaa");
			container.css({
				"margin-left": "-30%",
				"width": "60%",
				"height": "auto"
			})
		}else{
			console.log("bbbbbb");
			container.css({
				"margin-left": "-15%",
				"height": "auto",
				"width": "30%"
			})
		}
	}else{
		if(imgWrapHeight<windowHeight1*0.7){
			console.log("aaaaaaaa");
			container.appendTo($("body")).animate({
				"margin-left": "-30%",
				"width": "60%",
				"height": "auto"
			},400)
		}else{
			container.appendTo($("body")).animate({
				"margin-left": "-15%",
				"height": "auto",
				"width": "30%"
			},400)
		}
	}
}

	/*-----------判断放大后图片是否过大-------------*/

	//判断图片真实大小
function getNaturalWidthAndHeight(img) {
	var image = new Image();
	image.src = img.src;
	return [image.width,image.height];
}
	//点击事件
$right.hover(function(){
	$(this).children().fadeIn()
},function(){
	$(this).children().fadeOut()
})
$left.hover(function(){
	$(this).children().fadeIn()
},function(){
	$(this).children().fadeOut()
})
var imgIndex=0;
var allIndex = 0;
$right.on("click",function(){
	if(imgIndex>=allIndex-1){
        imgIndex=-1;
    }
    $(this).siblings(".imgWrap").css({
        "display":"none"
    })
    var $cloneImg = $(".pic_inner:visible").eq(imgIndex+1).children("img").clone()
	$cloneImg.addClass("imgWrap").prependTo($(".imgContainer"));
	var cloneImg = $cloneImg.get(0);
	containerHeightFn( cloneImg,$(".imgContainer"),1)
	imgIndex++;

})
$left.on("click",function(){
    if(imgIndex<=0){
        imgIndex=allIndex
    }
    console.log(imgIndex-1)
    $(this).siblings(".imgWrap").css({
        "display":"none"
    })
	var $cloneImg = $(".pic_inner:visible").eq(imgIndex-1).children("img").clone();
	$cloneImg.addClass("imgWrap").prependTo($(".imgContainer"));
	var cloneImg = $cloneImg.get(0);
	containerHeightFn( cloneImg,$(".imgContainer"),1)
    //判断图片是否过大

	imgIndex--;

})



