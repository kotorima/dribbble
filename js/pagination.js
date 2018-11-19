$(document).on("click", '.page', function(){
	$('.page').removeClass('selected');
	$(this).addClass('selected');
});


let pages = $('.page');
let page = $('.pages').find('.page.selected').index();
let qualityPages = pages.length;
console.log(qualityPages);
if (page === 1) { 
	$('.changeLeft').addClass('inactive');
}



$(document).on("click", '.changeLeft', function(){	
	if(page > 1) {
		$('.page').removeClass('selected');
		page--;
		$('.page').eq(page-1).addClass('selected');
	}
});

$(document).on("click", '.changeRight', function(){
	$('.changeLeft').removeClass('inactive');
	if(page < qualityPages) {
		$('.page').removeClass('selected');
		page++;
		$('.page').eq(page-1).addClass('selected');
	}
});

$(document).on("click", '.disclose', function() {
	//$()
});


	