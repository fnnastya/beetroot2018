    $(document).ready(function(){
      $('.header-slider').slick({
        arrows: true,
        nextArrow: '._nextArrow',
        prevArrow: '._prevArrow',
      });
      $('.reviews-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
      });
    });