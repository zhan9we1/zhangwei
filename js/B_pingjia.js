;(function(){
   $.ajax({
   	  url:"../js/pingjia.json",
   	  type:"post",
   	  beforeSend:function(){
   	  	  $("<div class='mark'><div><p>加载中...</p></div></div>").appendTo(".container");
   	  },
   	  success:function(data){
   	  	var myTemplate = Handlebars.compile($("#moban").html());
			$(".ping_list_wrap").html(myTemplate(data));
			$(".mark").remove();
   		var main=new IScroll(".main",{
   			"click":true
   		})
   	  },
   	  error:function(){
   	  	console.log("数据请求错误");
   	  }
   })
})(Zepto)