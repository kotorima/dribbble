loader();
if(navigator.onLine == false) {
    $("main").hide();
	$(".pages").hide();
	$("body").append("<figure>img src='../image/NoInternet.png' alt='offline'><figcaption><h2>Oh shucks!</h2><p>Slow or no internet connection. Please check your internet settings</p></figcaption></figure>");
}