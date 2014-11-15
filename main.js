$(document).ready(function() {


	var getMarginPush = function() {
		var fullHeight = $(".center-wrapper").height()
		var contentHeight = $(".main-wrapper").height()
		var marginPush = (fullHeight / 2) - (contentHeight / 2)
		return marginPush
	}


	var centerContent  = function() {
		var fullHeight = $(".center-wrapper").height()
		var contentHeight = $(".main-wrapper").height()
		var marginPush = getMarginPush()
		console.log(fullHeight)
		console.log(contentHeight)
		if (fullHeight > contentHeight) {
			$(".main-wrapper").css("margin-top", marginPush)
		}
		
	}

	// $("ul li a").click(function() {	var isHovered = $("ul li").find("#element:hover").length;

	// 	$(this).data("clicked", true)
	// })

	// $("ul li").click(function() {
	// 	if (!!$(this).find("a:hover").length > 0) {
	// 		document.location.href = $(this).attr("data-href")
	// 	}
			
	// })

	centerContent()
	// $(".content-left-effect, .content-right-effect").height($(".fade-in").innerHeight())
	$(".content-left-effect, .content-right-effect").css("max-height", $(".fade-in").innerHeight())

	// $(".content-left-effect").height($(".main-wrapper").height())
	// $(".content-left-effect").css("margin-top", getMarginPush() + $("h1").outerHeight(true))
	$(".fade-in").hide()
	$(".fade-in").fadeIn(750)


	$(window).resize(function() {
		centerContent()
	})

	

})
