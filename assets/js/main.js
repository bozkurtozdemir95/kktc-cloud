$(document).ready(function () {
    $(document).on('click', '.dropdown-menu.no-close', function (e) {
        e.stopPropagation();
    });

    $('.custom-select-toggler').click(function (e) {
        $(e.target).next().toggleClass('open');
    });
    $('.custom-select-menu-item').click(function (e) {
        $(e.target).parents().closest('.custom-select-menu').toggleClass('open');
    });
});
$(function () {
    $('.datetimepicker.date').datetimepicker({
        useCurrent: false,
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
    $('.datetimepicker.yearMonth').datetimepicker({
        useCurrent: false,
        language: 'en',
        pickDate: true,
        pickTime: false,
        pickSeconds: false,
        maskInput: true,
        format: 'MM/yyyy',
    });
});


$(function () {
    $('[data-toggle="popover"]').popover()
    $('.btn-plus, .btn-minus').on('click', function (e) {
        const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
        const input = $(e.target).closest('.custom-number-input').find('input');
        if (input.is('input')) {
            input[0][isNegative ? 'stepDown' : 'stepUp']()
        }
    })
})

$(document).ready(function () {
    $('.owl-carousel-brands').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<svg class='icon'><use href='../assets/icons/sprite.svg#left-arrow'></use></svg> <div class='line'></div>", " <div class='line'></div><svg class='icon'><use href='../assets/icons/sprite.svg#right-arrow'></use></svg>"],
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    })
    $('.owl-carousel-banners').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<svg class='icon'><use href='../assets/icons/sprite.svg#left-arrow'></use></svg> <div class='line'></div>", " <div class='line'></div><svg class='icon'><use href='../assets/icons/sprite.svg#right-arrow'></use></svg>"],
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    $('.owl-carousel-categories').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<svg class='icon'><use href='../assets/icons/sprite.svg#right-angle'></use></svg>", "<svg class='icon'><use href='../assets/icons/sprite.svg#right-angle'></use></svg>"],
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 10
            }
        }
    })

    $('.owl-carousel-company-banners').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1,
        dots: true
    })

    $('.custom-checkbox input').click(function () {
        if ($(this).is(':checked')) {
            $(".delivery-location").toggleClass("delivery-show");
        } else {
            $(".delivery-location").toggleClass("delivery-show");
        }
    });

    $('#typeForReceipt').on('change', function () {
        if (this.value === 1) {
            $('.companyFormItems').toggleClass('show');
        } else {
            $('.companyFormItems').toggleClass('show');
        }
    });
});


function initMap() {
    const location = {lat: -33.872, lng: 151.252}
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ]
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    })
}

$(function () {
    $(window).on('load', function () {
        initMap();
    });
});
