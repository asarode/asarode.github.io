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
			$(".main-wrapper").css("padding-top", "0px")
			$(".main-wrapper").css("padding-bottom", "0px")
		} else {
			$(".main-wrapper").css("margin-top", "0px")
			$(".main-wrapper").css("padding-top", "40px")
			$(".main-wrapper").css("padding-bottom", "100px")
		}
		
	}


	centerContent()

	$(".content-left-effect, .content-right-effect").css("max-height", $(".fade-in").innerHeight())
	$(".fade-in").hide()
	$(".fade-in").fadeIn(750)



	$(".preview-switcher").hover(
		function() {
			if ($(window).width() > 961) {
				$(".preview-content").css("top", $(this).offset().top - $(window).scrollTop() - 100)
			} else {
				$(".preview-content").css("top", 18)
			}
			$(".preview-content p").text("")
			$(".preview-content").css("background-image", "url(" + $(this).attr("data-img") + ")")
			$(".preview-content").toggleClass("show")
		},
		function() {
			$(".preview-content").toggleClass("show")
		}
	)


	$(".preview-switcher-text").hover(
		function() {
			if ($(window).width() > 961) {
				$(".preview-content").css("top", $(this).offset().top - $(window).scrollTop() - 100)
			} else {
				$(".preview-content").css("top", 18)
			}
			
			$(".preview-content").css("background-image", "none")
			$(".preview-content p").text($(this).attr("data-text"))
			$(".preview-content").toggleClass("show")
		},
		function() {
			$(".preview-content").toggleClass("show")
		}
	)


	$(window).resize(function() {
		centerContent()
	})

	

})
