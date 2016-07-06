;(function($){


  //渲染城市

  html = "";
    for( var key in hotel_hotData){
         var arr=hotel_hotData[key].substr(1).split("@"); 
         html +=' <h1 class="A_title">'+key+'</h1>';
           html+='<ul class="A_city">';
              $.each(arr,function(k,val){
                 var city = val.split("|")[1];
                 html+='<li><a>'+city+'</a></li>';
              })  
            

           html+='</ul>'; 
          html+='<h2 class="A_title2">全部城市(各城市所能选购的商品不同,请正确选择送达城市)</h2>';/**/
    } 

  $(".A_zxCity").append(html);
$(".A_zxCity").on("click" ,"a",function(){
    var city=$(this).text();
     $(this).attr('href','../C-index.html?area='+city);
})
$(".A_divAllCity").on("click","a",function(){
     var city=$(this).text();
     $(this).attr('href','../C-index.html?area='+city);
})
      html1 = "";
      for( var k in hotel_hotData1){
           var arr1 = hotel_hotData1[k].substr(1).split("@");
         html1 +=' <h3 class="A_key">'+k+'</h3>';
            html1 +='<ul class="A_commonul">';
              $.each(arr1,function(i,ele){

                 var city1 = ele.split("|")[1];
                /* console.log(city1)*/
                 html1+='<li><a>'+city1+'</a></li>'
              })
               html1+='</ul>';  

      }
   
  $(".A_divAllCity").append(html1);
  





  //$==Zepto  Z大写
  //给最大的上面填上划过事件 左和右

      var i=0,
           len=$("#pic img").size();
           //console.log(len);


  $("#cont").on("swipeLeft",function(){
     //向左划alert("下一张");
       i++;
       if(i>=len) i=len-1;


       picchange();
  }).on("swipeRight",function(){
     //向右划 alert("上一张");
       i--;
       if(i<=0) i=0;
      picchange();
  }).on("tap",function(){
  	  if(i==len-1) location.href="index.html";
  	 /* alert(0);*/
  })


  
//创建一个函数
/*//*/ function picchange(){
   
   				$("#pic").css({"-webkit-transform":"translate3d("+(i*-100)+"%,0,0)",
   					           "-webkit-transition":"transform 2s"

   					          });
    //按钮 btn
        $("#btn>li").eq(i).addClass("on").siblings().removeClass("on");

     }

//选项卡切换

       $(".A_tb:eq(0)").show();

  $(".A_tab li").on("tap",function(){
       var idex = $(this).index();
       //样式改变    
       $(this).addClass("green").siblings().removeClass("green");   /**/
       $("#A_TAB").find(".A_tb").eq(idex).show().siblings().hide();
  })

 $(".A_addass").on("tap",function(){

  if($(this).height()==50){
      $(this).height("auto");
     $(".A_top").text("∧");
  }else{
    //alert("aa");
     $(this).height("50px");
     $(".A_top").text("∨");
  }
      

 })
  
     
    //   
  
//领取优惠券樱桃
  $(".img").on("tap",function(){
   var val = $("#tel").val();
    if(val==""){

      var ze = $('<div class="zhe"></div>');    
          $(".container").after(ze);  
      var b = $('<div class="Aqx"><p>手机号不能为空!</p><p class="Asure">确定</p></div>');  
         $(".container").after(b); 
          $(".Asure").on("tap",function(){
              b.css({ "display":"none"});
              ze.css({"display":"none"});
          })
      }else if(!val==""){
        var ze = $('<div class="zhe"></div>');    
          $(".container").after(ze); 
          var picw = $('<div class="WZC"><img src="../img/giftbox.png" alt="" class="Aqu" /><span class="A_clos">×</span></div>');
           $(".zhe").after(picw); 
           $(".A_clos").on("tap",function(){
              picw.css({ "display":"none"});
              ze.css({"display":"none"});
              
          })     

      }  

        
  })



  



})(Zepto)