function creatingPages(count){
	for (let i = 1; i <= count; i++) {
		if (count === 1) {
			$('.pages').append('</li><li class="selected page">'+i+'</li>');
		}
		else if (i === 1) {
			$('.pages').append('<li class="changeLeft"><i class="fa fa-angle-left" aria-hidden="true"></i></li><li class="selected page">'+i+'</li>');
		}
		else if(i === 6 && count > 8) {
			$('.pages').append('<li class="disclose">...</li>');
		}
		else if(i > 6 && count > 8 && i != count) {
			
		}
		else if(i === count){
			$('.pages').append('<li class="page">'+i+'</li><li class="changeRight"><i class="fa fa-angle-right" aria-hidden="true"></i></li>');
		}
		else {
			$('.pages').append('<li class="page">'+i+'</li>');
		}
	}
}

$(document).on("click", '.page', function(){
	$('.page').removeClass('selected');
	$(this).addClass('selected');
	console.log('opo'+$(this).index());
	let request = $.ajax({
		type: "GET",
		url: "http://gallery.dev.webant.ru/api/photos?new=true&page="+$(this).index()+"&limit=1",
		dataType: "json",
		cache: true,
		beforeSend: loader()
	});
	request.done(function(response){
	response.data.forEach(function(item){
		if(item.new === true) {
			$('main').append('<figure><img src="http://gallery.dev.webant.ru/media/'+item.image.contentUrl+'" alt="picture"><figcaption><h2>'+item.name+'</h2><p>'+item.description+'</p></figcaption></figure>');
		}
	});
	});
});
let pages = $('.pages');
let page = $('.pages').find('.page.selected').index();
let qualityPages = pages.length;
console.log(pages);
if (page === 1) { 
	$('.changeLeft').addClass('inactive');
}



$(document).on("click", '.changeLeft', function(){	
	console.log('olol');
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


	