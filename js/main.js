$(document).ready(function(){
	
    "use strict";

    // Menu
    $(".menu").sticky({topSpacing:0});

    //smoothScroll
	smoothScroll.init();
	
	//Scroll Spy        
    $('body').scrollspy({ target: '.menu' })
	
	  $(".scroll-nav a").on('click', function(event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 1000, function(){
            window.location.hash = hash;
            });
        } // End if
    });
    
    // Review slider
    $('.main-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
        
});