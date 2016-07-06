;(function(){
	var main=new IScroll(".main",{
		"click":true
	})
	//点击导航 样式改变 
	/*$(".footer a").on("click",function(e){
		 e.preventDefault();
		$(this).css("color","#76BE98").siblings().css("color","#C4C2C2");
		
		var thisPo= $(this).find("span").css("background-position");
		var arr=thisPo.split(" "),
		    newarr=arr;
	 	    newarr[1]="-0.22rem";
	 	    $(this).find("span").css({
	 	          	"background-position":newarr[0]+" "+newarr[1]
	 	          });
	 	       var  idArr=[];
	 	       var  thisa=$(this);
	 	   $.each( $(this).siblings().find("span"),function(i,obj){
	 	   	      obj=[].concat(obj)
	 	   		  obj.__proto__=thisa.__proto__;
	 	   		  idArr.push( obj.attr("id") );
	 	   		
	 	   })
	 	 
	 	   $.each(idArr,function(idx,obj){
	 	   	   var   siPo=$("#"+obj).css("background-position");
	 	   	   	     arr1=siPo.split(" "),
		             newarr1=arr1;
	 	             newarr1[1]="0";
	 	    	 $("#"+obj).css({
	 	          	"background-position":newarr1[0]+" "+newarr1[1]
	 	          });
	 	   })


	 	      
	 	
	})*/
	


})(Zepto)