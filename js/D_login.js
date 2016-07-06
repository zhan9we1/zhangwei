
	init();
	function init(){
		getjson();
	}
	function getjson(){
		$.ajax({
			type:"get",
			url:"mate/D_login.json",
			async:true,
			success:function(data){
				var html="",
					dataobj=data.main;
				html+='<section class="index">'+
					'<div class="logo">'+
						'<div class="logo_login">'+
							'<a href="logo.html">'+
								'<img src="'+dataobj[0].img+'"/>'+
								'<div class="mark">'+
								'</div>'+
							'</a>'+
						'</div>'+
					'</div>'+
					'<div class="money">'+
						'<ul>'+
							
						'</ul>'+
					'</div>'+
					'<div class="myList">'+
						'<div class="my_list">'+
							'<dl>'+
								'<dt>'+
								'<a href="#" class="list">'+
								'</a>'+
								'</dt>'+
								'<dd>'+dataobj[0].list+
								'</dd>'+
							'</dl>'+
							'<dl>'+
								'<dt>'+
								'<a href="#">'+
								'</a>'+
								'</dt>'+
								'<dd>'+dataobj[0].quan+
								'</dd>'+
							'</dl>'+
							'<dl>'+
								'<dt>'+
								'<a href="#">'+
								'</a>'+
								'</dt>'+
								'<dd>'+dataobj[0].juan+
								'</dd>'+
							'</dl>'+
						'</div>'+
						'<div class="my_list">'+
							'<dl>'+
								'<dt>'+
								'<a href="#">'+
								'</a>'+
								'</dt>'+
								'<dd>'+dataobj[0].add+
								'</dd>'+
							'</dl>'+
							'<dl>'+
								'<dt>'+
								'<a href="#">'+
								'</a>'+
								'</dt>'+
								'<dd>'+dataobj[0].center+
								'</dd>'+
							'</dl>'+
							'<dl>'+
								'<dt>'+
								'<a href="#">'+
								'</a>'+
								'</dt>'+
								'<dd>'+dataobj[0].huo+
								'</dd>'+
							'</dl>'+
						'</div>'+
					'</div>'+
					'<button class="phoneBtn">'+dataobj[0].btn+
					'</button>'+
				'</section>';
				$(".main").html(html);
			},
			error:function(){
				alert("失败")
			}
		});
	}
	
