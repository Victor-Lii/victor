$(function() {
	setInterval(Play(),5000)
	function Play() {
		$(".fade").animate({
			marginLeft: '-375px'
		}, 5000, function() {
			$(".fade").css("marginLeft", '');
			var firstChild = $(".fade a").first().clone(true);
			$(".fade a").first().remove();
			$(".fade").append(firstChild);
		})
	}
})