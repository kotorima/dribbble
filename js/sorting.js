$("nav > ul > li").click(function(){
	$('li').removeClass('active');
	$(this).attr('class', 'active');
	//loader();
});