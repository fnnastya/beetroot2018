$(document).ready(function () {
$('.project_zoom').on('click', $('.project_photo__modifier'), function(event) {
    var path = $(this).children().attr('src');
    $('body').append('<div class="_overlay"></div><div class="_magnify"><img src="'+path+'"><div class="_close-popup"><i class="fas fa-times"></i></div></div>');
    $('._magnify').css({
        left: ($(window).width() - $('._magnify').outerWidth())/2,
        top: ($(window).height() - $('._magnify').outerHeight())/2
      });
    $('._overlay, ._magnify').fadeIn('fast');
  });

  $('body').on('click', '._close-popup, ._overlay', function(event) {
    event.preventDefault();
    $('._overlay, ._magnify').fadeOut('fast', function() {
      $('._close-popup, ._magnify, ._overlay').remove();
    });
  });

  // $('body').on('click', '._magnify', function(event) {
  //   event.preventDefault();
  //   $('._overlay, ._magnify').fadeOut('fast', function() {
  //     $('._close-popup, ._magnify, ._overlay').remove();
  //   });
  // });
  
});