(function(){
	function ajax(type,url,data,success){
		//第一步创建ajax对象
		try{
			var xhr=new XMLHttpRequest();
		}catch(e){
			var xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		//第二步准备发送
		xhr.open(type,url+ "?time=" + new Date().getTime(),true);
		
		//第三步发送
		if(type=='get'){
			xhr.send(null)
		}else if(type=='post'){
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			xhr.send(data);
		}
		
		//第四步监听数据返回 的状态
		xhr.onreadystatechange =getData;
		
		function getData(){
			if(xhr.readyState==4){
				if(xhr=status==200){
					var dataObj=JSON.parse(xhr.responseText);
					
					if(success){
						success(dataObj)
					}
				}
			}
		}
	}
	window.ajax=ajax;
})()
