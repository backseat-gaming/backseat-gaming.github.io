var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: '0px'},
            200);
            
        $('body').animate({
            left: '285px'},
            200);
    });
    
    $('.icon-close').click(function() {
        $('.menu').animate({
            left: '-285px'},
            200);
            
        $('body').animate({
            left: '0px'},
            200);
    });

    $('.dropdown-toggle').click(function () {
        $('.dropdown-menu').toggle();    
    });
    
    $('.arrow-next').click(function () {
        var currentDot = $('.active-dot');
        var currentSlide = $('.active-slide');
        var nextDot = currentDot.next();
        var nextSlide = currentSlide.next();
        
        if (nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        currentSlide.fadeOut(0).removeClass('active-slide');
        nextSlide.fadeIn(0).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
    
    $('.arrow-prev').click(function () {
        var currentDot = $('.active-dot');
        var currentSlide = $('.active-slide');
        var prevDot = currentDot.prev();
        var prevSlide = currentSlide.prev();
        
        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
                
        currentSlide.fadeOut(0).removeClass('active-slide');
        prevSlide.fadeIn(0).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
};

$(document).ready(main);