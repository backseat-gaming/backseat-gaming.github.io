var main = function() {
    setupCookie()
    checkCookie()


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

        console.log(nextSlide.length);
        console.log(nextSlide.next);
        
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

    /* Button Fun */
    $('.plus').click(function() {
         var text = getCookie("votes");
         text = parseInt(text, 10) + 1;
         document.getElementById("num").textContent=(text);
         setCookie("hasVoted", "true", 1)
         setCookie("votes", text, 1)
    });

    $('.minus').click(function() {
         var text = getCookie("votes");
         text = parseInt(text, 10) - 1;
         document.getElementById("num").textContent=(text);
         setCookie("hasVoted", "true", 1)
         setCookie("votes", text, 1)
    });

    /* Cookie Fun */
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
         }
         return "";
    }
    function checkCookie() {
        var hasVoted=getCookie("hasVoted");
        if (hasVoted!="") {
          alert("User has voted: " + hasVoted);
        }else{
          alert("User hasn't voted yet!");
        }
    }
    function setupCookie() {
        var votes=getCookie("votes");
        if (votes!="") {
          document.getElementById("num").textContent=(votes);
        }else{
         votes = 0;
         document.getElementById("num").textContent=(votes);
         setCookie("votes", votes, 1)
        }
    }
};

$(document).ready(main);