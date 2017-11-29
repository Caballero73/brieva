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

// MOVER
// =============
$(document).ready(function(){
    $(".mover1").click(function(){
        $("html,body").animate({ scrollTop : $("#cta1").offset().top  }, 1200 );
    });
});

// IR ARRIBA
// ======================

$(document).ready(function(){
	$('.ir-arriba').click(function(){
	  $('body, html').animate({
	    scrollTop: '0px'
	  }, 1000);
	});

	$(window).scroll(function(){
	  if( $(this).scrollTop() > 0 ){
	    $('.ir-arriba').slideDown(300);
	  } else {
	    $('.ir-arriba').slideUp(300);
	  }
	});
});
