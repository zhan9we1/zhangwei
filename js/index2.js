;(function($){

	var page2=new IScroll(".wrap",{
			"click":true
	})
	$(".zhixiang").on("click",function(){
		//console.log($(this).parents(".page2-list").index())
		$(this).parents(".page2-list").find(".list-bottom").show();
		$(this).parents(".page2-list").siblings().find(".list-bottom").hide();
		page2=new IScroll(".wrap",{
			"click":true
		})
	})

})(Zepto)