$(document).ready(function() {
    // initial top offset of the navigation 
       var stickyNavTop = $('.header-wrapper').offset().top;
       var stickyNavTop = stickyNavTop - 50;
       var stickyNav = function(){
           console.log('Script is running');
        var scrollTop = $(window).scrollTop(); //current vertical position from the top
             
        if (scrollTop > stickyNavTop) { 
            $('.header-wrapper').addClass('sticky');
        } else {
            $('.header-wrapper').removeClass('sticky'); 
        
        }

        var pathname = window.location.pathname;
/*
        if(pathname.localeCompare('/') == 0 || pathname.localeCompare('/en') == 0 || pathname.localeCompare('/en/') == 0){
        $(".layout--main-content").attr("style", "margin-top: 0px;");
        }else{
        $(".layout--main-content").attr("style", "margin-top: 180px;");
        }
*/
    };

    stickyNav();

    $(window).scroll(function() {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        if(y === 0) {
            document.body.classList.remove('scrolling');
           // $('#customlogomenu').removeClass('customlogoeffects');
        } else {
            document.body.classList.add('scrolling');
            //$('#customlogomenu').addClass('customlogoeffects');
        }
        stickyNav();
    });
});