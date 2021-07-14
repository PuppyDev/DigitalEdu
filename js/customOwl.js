$(document).ready(function(){
    $("#slider1").owlCarousel({
        items: 1,
        loop: true,
        autoplay:true,
        navText: [
            `<i class="fas fa-chevron-left"></i>`,
            `<i class="fas fa-chevron-right"></i>`
        ],
        dot:false,
        responsive : {
            0:{
                nav: false
            },
            992:{
                nav:true,
            }
        }
    });

    $('#slider2').owlCarousel( {
        
        responsive : {
            0: {
                items: 1,
                loop: true,
                center:true
            },
            992: {
                items:2,
                loop:true,
                margin: 30,
            }
        }
    })
});