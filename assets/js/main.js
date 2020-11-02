$(document).ready(function () {
    $(document).on('click', '.dropdown-menu.no-close', function (e) {
        e.stopPropagation();
    });

    $('.custom-select-toggler').click(function (e) {
        $(e.target).next().toggleClass('open');
    });
    $('.custom-select-menu-item').click(function (e) {
        $(e.target).parents().find('.custom-select-menu').toggleClass('open');
    });
});
$(function () {
    $('.datetimepicker.date').datetimepicker({
        language: 'en',
        pickDate: true,
        pickTime: false,
        pickSeconds: false,
        maskInput: true,
        format: 'dd/MM/yyyy',
    });
    $('.datetimepicker.time').datetimepicker({
        language: 'en',
        pickDate: false,
        pickTime: true,
        pickSeconds: false,
        maskInput: true,
        format: 'hh:mm',
    });
});


$(function () {
    $('[data-toggle="popover"]').popover()
})

$(document).ready(function(){
    $('.owl-carousel-brands').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    })
    $('.owl-carousel-banners').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<svg class='icon'><use href='../assets/icons/sprite.svg#left-arrow'></use></svg> <div class='line'></div>"," <div class='line'></div><svg class='icon'><use href='../assets/icons/sprite.svg#right-arrow'></use></svg>"],
        autoplay: false,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
});
