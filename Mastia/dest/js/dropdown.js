$(function () {
  var $list = $('._list');

  $list.on('click', $('.ability_list'), function(){
      $(this).toggleClass('ability_list__active')
             .children('.button__dropdown').toggleClass('button__dropdown__active');

            if ($(this).hasClass('ability_list__active')){ 

              $(this).css({'margin-bottom':'0'}).children('.button__dropdown__active')
                     .children()
                     .removeClass('fa fa-chevron-right')
                     .addClass('fa fa-chevron-down');

              $(this).next().css({'display':'block'});

            } else {
              
              $(this).css({'margin-bottom':'10px'}).children('.button__dropdown')
                     .children()
                     .removeClass('fa fa-chevron-down')
                     .addClass('fa fa-chevron-right');

              $(this).next().css({'display':'none'});
            }
   });
});
