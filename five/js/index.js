$(document).ready(function(){
	//点击显示
	$(".head_1").click(function(){
		 $(".head_1 .head_1_1").css("display","block");
	});
	//点击隐藏
    $(".head_1 .head_1_1 img").click(function(e){
    	e.stopPropagation();
    	$(this).parent().css("display","none");    	
    });
    //导航栏 效果
    //我的第五大道鼠标滑过效果
    $(".head_2 .head_2_1_2 .mine").hover(function(){//我的第五大道
    	$(this).css('background','white');
    	$(".head_2 .head_2_1_2 .mine .sign").addClass("sign_chg");//鼠标移进添加类名
    	$(".head_2 .head_2_1_2 .mine .mine_1").css("display","block");
    },function(){
    	$(this).css('background','#f2f2f2');
    	$(".head_2 .head_2_1_2 .mine .sign").removeClass('sign_chg');
    	$(".head_2 .head_2_1_2 .mine .mine_1 span").attr("class","");//将类名置空
    	$(".head_2 .head_2_1_2 .mine .mine_1").css("display","none");
    });
    $(".head_2 .head_2_1_2 .mine .mine_1 span").hover(function(){
    	$(".head_2 .head_2_1_2 .mine .sign").removeClass('sign_chg');//鼠标移出删除类名
    	$(".head_2 .head_2_1_2 .mine .mine_1 span").attr("class","");//鼠标移出类名置为空
    	$(this).attr("class","active");
    });
    
    //手机版下载二维码区域
    $(".head_2 .head_2_1_2 .load").hover(function(){
    	$(this).css('background','white');
    	$(".head_2 .head_2_1_2 .load .sign").addClass("sign_chg");
    	$(".head_2 .head_2_1_2 .load .hide").css("display","block");
    },function(){
    	$(this).css('background','#f2f2f2');
    	$(".head_2 .head_2_1_2 .load .sign").removeClass("sign_chg");
    	$(".head_2 .head_2_1_2 .load .hide").css("display","none");
    });
    $(".head_2 .head_2_1_2 .load .hide").hover(function(){
    	$(".head_2 .head_2_1_2 .load .sign").removeClass("sign_chg");
    });
    
    //定位图标鼠标滑过效果
    $(".nav .margin ul li.last").hover(function(){
    	$(".nav .margin ul li.last span").attr("class","active");
        $(".nav .margin ul li.last a").css("color","#fff");
    },function(){
    	$(".nav .margin ul li.last span").attr("class","");
    	$(".nav .margin ul li.last a").css("color","#C69C6D");
    });
    
    //导航栏右侧
    $(".nav .margin .right div").hover(function(){
    	$(this).find('b').stop().eq(0).animate({width:110},300);
    },function(){
    	$(this).find('b').stop().eq(0).animate({width:0},300);
    });
    
    //隐藏的商品分类
    //ajax     导入分类列表
    
    function BgPosition(){
		    $(".nav .margin .first ul li").eq(0).css("background-position","-3px -5px");
		    $(".nav .margin .first ul li").eq(1).css("background-position","-3px -36px");
		    $(".nav .margin .first ul li").eq(2).css("background-position","-3px -68px");
		    $(".nav .margin .first ul li").eq(3).css("background-position","-3px -100px");
		    $(".nav .margin .first ul li").eq(4).css("background-position","-3px -132px");
		    $(".nav .margin .first ul li").eq(5).css("background-position","-3px -165px");
		    $(".nav .margin .first ul li").eq(6).css("background-position","-3px -196px");
		    $(".nav .margin .first ul li").eq(7).css("background-position","-3px -228px");
		    $(".nav .margin .first ul li").eq(8).css("background-position","-3px -261px");
		    $(".nav .margin .first ul li").eq(9).css("background-position","-3px -294px");
		    $(".nav .margin .first ul li").eq(10).css("background-position","-3px -326px");
		    $(".nav .margin .first ul li").eq(11).css("background-position","-3px -357px");
		    $(".nav .margin .first ul li").eq(12).css("background-position","-3px -390px");
		    $(".nav .margin .first ul li").eq(13).css("background-position","-3px -422px");
		    $(".nav .margin .first ul li").eq(14).css("background-position","-3px -458px");
    	
    }
   BgPosition();
   
   //列表鼠标滑过效果
   $(".nav .margin .first").hover(function(){
        $(".nav .margin .first .list").css("display","block");	
   },function(){  	    
   	    $(".nav .margin .first .list").css("display","none");	 
   });
   $(".nav .margin .first ul li").hover(function(){
   	 $(this).find(".a_2").css("color"," #C69C6D");   	 
   	 $(this).find('span').attr("class","active");
   	 $(this).css("background","white url(images/brand_category2.png) no-repeat");
   	 BgPosition();
   	 
   },function(){
   	
   	$(this).find(".a_2").css("color"," #000"); 
   	$(this).find(".a_f").css("color"," #C69C6D");
   	$(this).css("background","#f7f7f7 url(images/brand_category1.png) no-repeat");
   	BgPosition();
   	$(this).find('span').removeClass("active");  
   }); 
   
   //右侧导航栏鼠标滑过 效果
   $(".nav .margin .first ul li").hover(function(){
   	      $(this).find(".div_1").css("display","block");
   },function(){
   	      $(this).find(".div_1").css("display","none");
   });
   
   //ajax  json 
   
   //搜索框下的json
    ajaxRequest("post","js/json_1.json",null,function(data){
               var _category = JSON.parse(data);
               //console.log(_category);              
                dataReader_1(_category);
            },true);
   
   //隐藏导航栏的json
   ajaxRequest("post","js/json_2.json",null,function(data){
               var _category = JSON.parse(data);
               //console.log(_category);              
                dataReader_2(_category);
            },true);
  
   
});

 
       
function dataReader_1(_category){
	var i = 0;
	for(var key in _category){
		$("<a href=\""+_category[key]["url"]+"?id="+key+"\">"+_category[key]["name"]+"</a>")
		.appendTo($(".logo .margin .search ul li").eq(i));	
				
		i++;
	}
}

function dataReader_2(_category){
	var i = 0,j = 0;
	var _h2 = null,_a = null,_div = null;
	for(var key in _category){
		_h2 = null;
		_a = null;
		_div = null;
		//创建h2标签 并加入到创建的div中    
		//把创建的a标签加入到h2中
		$(".nav .margin .first ul .a_2").eq(i).attr("href",_category[key]["url"]+"?id="+key)
		.html(_category[key]["name"]);
		j = 0;
		for(var k1 in _category[key]["children"]){	
			//创建h2
		    _h2 = $("<h2></h2>").html("<a class='key_title' href=''>"+_category[key]["children"][k1]["name"]+"</a>");						
			//创建div
			$("<div class='container clear'></div>").html(_h2).insertBefore($(".nav .margin .first ul li").eq(i).find(".div_1_1"));
			_div = $("<div class='div_new left'></div>").appendTo($(".nav .margin .first ul li").eq(i).find(".container").eq(j));
			j++;
		    for(var k2 in _category[key]["children"][k1]["children"]){
		       
		       $("<a class='key_t2' href=''>"+_category[key]["children"][k1]["children"][k2]["name"]+"</a>")
		            .appendTo(_div);
		    }
		}
		i++;
	}
}

