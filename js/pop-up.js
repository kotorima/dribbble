$(".pop-up").hide();
$(".close").hide();
$(document).on("click", "main img",  function() {
	$(".pop-up").show(300, 'linear');
	$(".close").show(300, 'linear');
	$(".pop-up").html($(this).parent().html());
});
$(document).on("click", ".close", function() {
	$(".pop-up").hide(300, 'linear');
	$(".close").hide(300, 'linear');
});