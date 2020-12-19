
function closeMobileMenu() {
    $('#mobile-menu .menu-container, #mobile-menu .menu-container .menu-items > div').toggleClass('visible');
    $('#bar-1, #bar-2, #bar-3').toggleClass('open');
}




$(document).ready(function () {


    $('#mobile-menu .icon-container').click(function () {
        $('#mobile-menu .menu-container, #mobile-menu .menu-container .menu-items > div').toggleClass('visible');
        $('#mobile-menu .menu-container .menu-items .empasis').toggleClass('visible');
        $('#bar-1, #bar-2, #bar-3').toggleClass('open');
    });

    var prevScrollPos = window.scrollY;
    $(window).scroll(function(){
        if(window.scrollY < 500){
            $('#mobile-menu .icon-container').addClass('visible');
        } else{
            $('#mobile-menu .icon-container').removeClass('visible');
        }

        var currentScrollPos = window.scrollY;
        
        if(prevScrollPos > currentScrollPos){
            // console.log('up');
            $('#mobile-menu .icon-container').removeClass('hide');

        }else{
            // console.log('down')
            $('#mobile-menu .icon-container').addClass('hide');
        }

        prevScrollPos = currentScrollPos;
    });


    

});