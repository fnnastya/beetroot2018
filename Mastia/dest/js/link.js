$(function () {
  var url = window.location.href;
  var cur_url = url.split('/').pop();
    $('.header_menu a').each(function () {
    var link = $(this).attr('href');
      if (cur_url == link) {
        $(this).addClass('_current');
        }
      });
});