function loader() {
	$("main").hide();
	$(".pages").hide();
	$(window).on('load', function () {
		$('.loader').delay(500).fadeOut('slow');
		$("main").delay(1000).show(500, 'linear');
		$(".pages").delay(1000).show(500, 'linear');
	});
}