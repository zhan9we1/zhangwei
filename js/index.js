;(function($){

	var len=$(".page1-lunbo").find("li").length,
		n=0;
	$(".page1-lunbo").on("swipeLeft",function(){
		n++;
		if(n>=len){
			n=0;
		}
		$(this).css({
			"-webkit-transform":"translateX("+n*-100+"%)",
			"-webkit-transition":"transform .3s"
		})
		$(".page1-lunbo-yuan li").eq(n).addClass("on").siblings().removeClass("on");
	}).on("swipeRight",function(){
		n--;
		if(n<0){
			n=len-1;
		}
		$(this).css({
			"-webkit-transform":"translateX("+n*-100+"%)",
			"-webkit-transition":"transform .3s"
		})
		$(".page1-lunbo-yuan li").eq(n).addClass("on").siblings().removeClass("on");
	})

//iscroll
	var page1=new IScroll(".page1",{
			"click":true
		});
	var search= decodeURI(location.search),arr=[];
	console.log(search);
	if( search.indexOf("?")!=-1){
		  var str=search.substr(1);
		      arr=search.substr(1).split("=");
		     
	}
 $(".City").text(arr[1]);
 
})(Zepto)