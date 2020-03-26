// Sidebar.
var isOpen = false;
$('#showmenu').on("click", function() {
			if(!isOpen)
				$('.main-section').animate({ width:'80%' });
			else
				$('.main-section').animate({ width:'100%' });
		isOpen = !isOpen;
});




// -----Галерея при наведении(увеличении) ---
$(".img-gallery img").on("mousemove", function() {
	if($(this).css('position').toLowerCase() == 'static')
		$(this).css("transition", "all 0.5s ease-out");
		$(this).css("cursor", "pointer");
});

// -----Галерея при нажатии ---
$(".img-gallery img").on("click", function() {
		var newImage = $(this).clone();
		$("#overlay").show();
		newImage.css({
			"transition": "all 0s ease-out",
			"position":"fixed",
			"top":"10%",
			"left":"32%",
			"width":"40%"
		});
		$(newImage).appendTo("#overlay");
});

$("#overlay").on("click", function() {
	$("#overlay").hide();
	$("#overlay").empty();
});
