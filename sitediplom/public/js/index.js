var isOpen=!1;$("#showmenu").on("click",function(){isOpen?$(".main-section").animate({width:"100%"}):$(".main-section").animate({width:"80%"}),isOpen=!isOpen}),$(".img-gallery img").on("mousemove",function(){"static"==$(this).css("position").toLowerCase()&&$(this).css("transition","all 0.5s ease-out"),$(this).css("cursor","pointer")}),$(".img-gallery img").on("click",function(){var i=$(this).clone();$("#overlay").show(),i.css({transition:"all 0s ease-out",position:"fixed",top:"10%",left:"32%",width:"40%"}),$(i).appendTo("#overlay")}),$("#overlay").on("click",function(){$("#overlay").hide(),$("#overlay").empty()});