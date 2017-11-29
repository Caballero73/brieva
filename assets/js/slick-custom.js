$('#carrusel').slick({
  centerMode: true,
  centerPadding: '550px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  prevArrow: $('#izquierdo'),
  nextArrow: $('#derecho'),
  responsive: [
    {
      breakpoint: 1681,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '450px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1501,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '350px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('#exito-carrusel').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  arrows: true,
  prevArrow: $('.previo'),
  nextArrow: $('.siguiente'),
  adaptiveHeight: true
});

$('.contactos-img2-carrusel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true
});