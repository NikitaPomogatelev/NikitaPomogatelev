$(document).ready(function(){
    $('#projects').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        
    });

    $('#present-first').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        
        
    });

    $('#present-second').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        
        
    });
  });