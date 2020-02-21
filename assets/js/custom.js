$(function() {
    // Intro section owl-carousel setup
    $('.banner__carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay:true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    });

    // Popular Product section owl-carousel setup
    $('.popular-product__carousel').owlCarousel({
        loop: true,
        items: 4,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav: false,
                autoplay: true
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });


    // Popular Product section owl-carousel setup
    $('.testimonial__carousel').owlCarousel({
        loop: true,
        items: 3,
        margin: 15,
        autoplay: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});