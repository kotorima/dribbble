$('#popular').click(function(){
	sorting('#popular');
	
});
$('#new').click(function(){
	sorting('#new');
});

function sorting (elem) {
	$('li').removeClass('active');
	$(elem).attr('class', 'active');
	$('main').empty();
	request.done(function(response){
		response.data.forEach(function(item, i, arr){
			if(elem === '#popular'){
				if(item.popular === true) {
					$('main').append('<figure><img src="http://gallery.dev.webant.ru/media/'+item.image.contentUrl+'" alt="picture"><figcaption><h2>'+item.name+'</h2><p>'+item.description+'</p></figcaption></figure>');
				}
			}
			else if (elem === '#new') {
				if(item.new === true) {
					$('main').append('<figure><img src="http://gallery.dev.webant.ru/media/'+item.image.contentUrl+'" alt="picture"><figcaption><h2>'+item.name+'</h2><p>'+item.description+'</p></figcaption></figure>');
				}
			}
		});
	});
}

let request = $.ajax({
	type: "GET",
	url: "http://gallery.dev.webant.ru/api/photos?new=true&page=1&limit=1",
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
	let count = response.countOfPages;
	creatingPages(count);
});
request.fail(function(){
	$("main").hide();
	$(".pages").hide();
	$("body").append("<figure class='offline'><img src='image/NoInternet.png' alt='offline'><figcaption><h2>Oh shucks!</h2><p>Slow or no internet connection.</p><p>Please check your internet settings</p></figcaption></figure>");
});