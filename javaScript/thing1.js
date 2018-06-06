$(document).ready(function(){	
	$("#but1").click(function(){	
		$("#div1").css("background-color","red");
	});
});
 $(document).ready(function(){

		 var index=9; 
		 var str="青岛-宁波";
		 for(var i=1;i<=index;i++){
			 $("li:last").after("<li><div class=\"le\">"+i+"</div><div class=\"up\"><div class=\"ri\"><img class=\"biaozhi\" src=\"images/山东航空.jpg\" width=\"17px\" height=\"17px\"/><span class=\"bianhao\">"+"QW9775"+"</span><span class=\"zhuangtai\">"+"值机截止"+"</span><span class=\"luxian\">"+str+"</span></div><div style=\"margin-left:40px;border-bottom:2px solid #0E142A;width:80%;\"></div><div class=\"down\"><span class=\"shijian\">"+"起飞06:30"+"</span><span class=\"dengdai\">"+"保障完成 06:20"+"</span></div></div></li>");
		 } 
	 
});
