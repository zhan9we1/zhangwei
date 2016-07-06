;(function(){
	var main=new IScroll(".main",{
		"click":true
	})
/**分类
*/
 var len=$(".list_item").length;
$(".list_item").on("tap",function(){
    var parent=$(".list").eq( $(this).parent().index() );
   	if(parent.find(".on").length>0){
   		parent.find(".on").hide();
   		$(this).next().removeClass("on");
   		parent.find(".jian").css({
   			"transform":"rotate(0deg)"
   		})
   	}else{
   		$(this).next().addClass("on");
   		$(".on").show();
   		parent.find(".jian").css({
   			"transform":"rotate(90deg)"
   		})
   	} 
})
    /*
     详细页  
   */ 
   //轮播
   var i=0,liW=$(".uls li").eq(0).width(),timer=null;

   $(".swipe").on("swipeLeft",function(){
   	  clearInterval(timer);
   	   i= ++i >= $(".uls li").length ? 0 : i;
   	   play();
   }).on("swipeRight",function(){
   	 clearInterval(timer);
   	  i= --i < 0 ? $(".uls li").length-1 : i;
   	  play();
   })
   function play(){
   	   $(".uls").animate({
   	    	"margin-left":-i*liW+"px"
   	    })
   	   $(".ols li").eq(i).addClass("lan").siblings().removeClass("lan");
   }
    autoplay();
   function autoplay(){
   	  timer=setInterval(function(){
   	  	      i= ++i >= $(".uls li").length ? 0 : i;
   	          play();
   	  },2000)
   }
   //购物车
    var n=$(".num").text();
      $(".num_jian").on("tap",function(){
         n=--n <=1 ? 1 : n;
        $(".num").text(n);
      })
      $(".num_jia").on("tap",function(){
         n=++n
         $(".num").text(n);
      })
    //点击 添加购物车
     $(".yuan").hide();
      $(".shoppCar").on("tap",function(){
        $(".yuan").show();
          var n=$(".num").text();
           $(".yuan").html(n);
          
      })
      //点击展开 点击关闭
      $(".message").on("tap",function(){
         var messageDiv=$(this).height();
         if(messageDiv==50){
              $(this).height("auto");
              $(this).find("li").height("auto");
              $(this).find(".jian").css({
                  "transform":"rotate(90deg)"
               })
         }else{
             $(this).height("50px");
             $(this).find("li").height("50px");
             $(this).find(".jian").css({
                  "transform":"rotate(0deg)"
               })
         }
           
      })
    
})(Zepto)