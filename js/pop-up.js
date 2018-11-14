$(".pop-up").hide();
$(".close").hide();
$("main img").click(function() {
	$(".pop-up").show(300, 'linear');
	$(".close").show(300, 'linear');
	$(".pop-up").html($(this).parent().html());
});
$('.close').click(function() {
	$(".pop-up").hide(300, 'linear');
	$(".close").hide(300, 'linear');
});