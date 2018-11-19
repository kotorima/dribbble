function creatingPages(count){
	for (let i = 1; i <= count; i++) {
		if (i === 1) {
			$('.pages').append('<li class="changeLeft"><i class="fa fa-angle-left" aria-hidden="true"></i></li><li class="selected page">'+i+'</li>');
		}
		else if(i === 6 && count > 8) {
			$('.pages').append('<li class="disclose">...</li>');
		}
		else if(i > 6 && count > 8 && i != count) {
			$('.pages').append('<li class="page hidden">'+i+'</li>');
		}
		else if(i === count){
			$('.pages').append('<li class="page">'+i+'</li><li class="changeRight"><i class="fa fa-angle-right" aria-hidden="true"></i></li>');
		}
		else {
			$('.pages').append('<li class="page">'+i+'</li>');
		}
	}
}