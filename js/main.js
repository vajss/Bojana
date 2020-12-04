
$(document).ready(function(){
    $('.sledeca').on('click', function(){
        console.log('clicked');
       var trenutna = $('.active');
        var sledeca = trenutna.next();

        if(sledeca.length){
            trenutna.removeClass('active').css('z-index', -10);
            sledeca.addClass('active').css('z-index', 10);
        }
    });

    $('.prethodna').on('click', function(){
        console.log('clicked');
       var trenutna = $('.active');
        var prethodna = trenutna.prev();

        if(prethodna.length){
            trenutna.removeClass('active').css('z-index', -10);
            prethodna.addClass('active').css('z-index', 10);
        }
    });
});