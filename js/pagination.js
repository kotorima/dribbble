$('.page').click(function(){
	$('.page').removeClass('selected');
	$(this).addClass('selected');
	//loader();
});

let pages = $('.page');
let quantityPages = pages.length;
console.log(quantityPages);

$('.left').click(function(){
	$.each(pages, function(index, value){
		let selected = pages.filter('.selected').index();
		if(selected === 1) {
			pages.removeClass('selected');
			pages.last().attr('class','selected');
		}
		else {
			let page = pages.has('.selected');
			console.log(page);
			pages.removeClass('selected');
			page.prev().attr('class','selected');
		}
	});
});