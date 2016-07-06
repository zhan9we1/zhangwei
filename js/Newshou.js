;(function(){
	getData("A_tb1","moban1");
	getData("A_tb2","moban2");
	getData("A_tb3","moban1");
	function getData(obj,moban){
		$.getJSON("../js/Newshou.json",function(data){

			var myTemplate = Handlebars.compile($("#"+moban).html()); 
			   $("."+obj).html(myTemplate(data));
			   if(moban=="moban2"){
			   	  var arr=data.lizhi;
					    function Sorts(a,b){
					    	 return a.xianjia-b.xianjia;
					    }
				   	    arr.sort(Sorts);//排序方法
			   	  $("."+obj).html(myTemplate(arr));
			   }
				
			
		})
		
	}
})(Zepto)