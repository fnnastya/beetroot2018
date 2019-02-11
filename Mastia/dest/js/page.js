var speed = 'slow';
$('html, body').hide();
$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
});



// <script type="text/javascript">
// $(document).ready(function() {
//     $("body").css("display", "none");
//     $("body").fadeIn(2000);
//     $("a.header_menu-item").click(function(event){
//         event.preventDefault();
//         linkLocation = this.href;
//         $("body").fadeOut(1000, redirectPage);      
//     });
         
//     function redirectPage() {
//         window.location = linkLocation;
//     }
// });
// </script>