$('#burger-button').click(function() {
	$('#menu-bars').toggleClass('active');
	$('body').toggleClass('fijo');
	$('#menu').toggleClass('active')
	setTimeout(function() {
		$('#burger-button').toggleClass('burger-color')
	}, 300)
})

$('#burger-button').click(function() {
	$('#bars').toggleClass('x');
	$('#bars').toggleClass('x');
	$('#bars').toggleClass('x');
})	

$('.link-menu').click(function() {
	$('#menu').toggleClass('active');
	$('body').toggleClass('fijo');
	$('#burger-button').toggleClass('burger-color');
	$('#menu-bars').toggleClass('active')
	$('#bars').toggleClass('x');
	$('#bars').toggleClass('x');
	$('#bars').toggleClass('x');
})