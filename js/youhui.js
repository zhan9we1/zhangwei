;(function(){
		var main=new IScroll(".main",{
		"click":true
	})
	  //渲染奖券
      getData("quan_list","moban");
  function getData(obj,moban){
        $.getJSON("../js/B_youhui.json",function(data){

          var myTemplate = Handlebars.compile($("#"+moban).html());
          $("."+obj).html(myTemplate(data));
          main.refresh();
          
        })
  }

})(Zepto)