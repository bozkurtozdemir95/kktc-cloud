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
    $('[data-toggle="popover"]').popover();
    $('.btn-plus, .btn-minus').on('click', function (e) {
        const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
        const input = $(e.target).closest('.custom-number-input').find('input');
        if (input.is('input')) {
            input[0][isNegative ? 'stepDown' : 'stepUp']()
        }
    })
    $('#priceInputs input').on('click', function (e) {
        $('#priceInputs .price-list').toggleClass('open');
    })
    var ctx = document.getElementById('doughnutChart');
    var ctx2 = document.getElementById('lineChart');
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Emlak Liste Fiyat', 'Gayrimenkul Alım Vergisi', 'Emlakçı Komisyonu', 'Noter Ücreti', 'Deprem Sigortası'],
            datasets: [{
                label: '# of Votes',
                data: [1257, 1200, 1000, 600, 200],
                backgroundColor: [
                    '#4866FC',
                    '#FC48A8',
                    '#05C711',
                    '#FFAA00',
                    '#FF0023',
                ],
            }]
        },
        options: {
            cutoutPercentage: 85,
            legend: {
                position: 'right',
                labels: {
                    fontSize: 12,
                    fontFamily: 'Proxima Nova Rg',
                    padding: 15
                }
            }
        },
    });
    var myLineChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
            datasets: [{
                label: "Car Speed",
                data: [0, 59, 75, 20, 20, 55, 40],
            }],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: -20,
                            max: 140
                        }
                    }]
                }
            }
        },
    });
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
        disableDefaultUI: true,
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


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<div class='prevBig'></div>",
        nextArrow: "<div class='nextBig'></div>",
        fade: true,
    });
    $('.slider-nav').slick({
        slidesPerRow: 7,
        rows: 2,
        arrows: true,
        prevArrow: "<svg class='prev'><use href='../assets/icons/sprite.svg#right-angle'></use></svg>",
        nextArrow: "<svg class='next'><use href='../assets/icons/sprite.svg#right-angle'></use></svg>",
        infinite: false
    });

    const $parent = $(".slider-for");
    const $green = $(".slider-nav");
    const $images = $green.find("img");
    let killit = false;

    for ($i = 0; $i < $images.length; $i++) {
        $images[$i].classList.remove('active')
    }
    $images[0].classList.add('active')

    $images.on("click", function (e) {
        if (!killit) {
            e.stopPropagation();
            var idx = $(this).data("thumb");
            $parent.slick("goTo", idx - 1);
            for ($i = 0; $i < $images.length; $i++) {
                $images[$i].classList.remove('active')
            }
            e.target.classList.add('active');
        }
    });
    $('.slider-for').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        for ($i = 0; $i < $images.length; $i++) {
            $images[$i].classList.remove('active')
        }
        $images[currentSlide].classList.add('active')
    });
// need to register a flag that doesn't let us click the slider
// as we are trying to swipe it.

    $green
        .on("beforeChange", function () {
            killit = true;

        }).on("afterChange", function () {
        killit = false;
    });

    $('#lightgalleryCar').on('click', function (e) {
        e.preventDefault();
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": '../assets/images/cars/aston-martin/aston-martin-1.jpg',
                'thumb': '../assets/images/cars/aston-martin/aston-martin-1.jpg',
            }, {
                'src': '../assets/images/cars/aston-martin/aston-martin-2.jpg',
                'thumb': '../assets/images/cars/aston-martin/aston-martin-2.jpg',
            }, {
                'src': '../assets/images/cars/aston-martin/aston-martin-3.jpg',
                'thumb': '../assets/images/cars/aston-martin/aston-martin-3.jpg',
            }, {
                'src': '../assets/images/cars/aston-martin/aston-martin-4.jpg',
                'thumb': '../assets/images/cars/aston-martin/aston-martin-4.jpg',
            },
                {
                    'src': '../assets/images/cars/aston-martin/aston-martin-5.jpg',
                    'thumb': '../assets/images/cars/aston-martin/aston-martin-5.jpg',
                }, {
                    'src': '../assets/images/cars/aston-martin/aston-martin-6.jpg',
                    'thumb': '../assets/images/cars/aston-martin/aston-martin-6.jpg',
                }, {
                    'src': '../assets/images/cars/aston-martin/aston-martin-7.jpg',
                    'thumb': '../assets/images/cars/aston-martin/aston-martin-7.jpg',
                },
                {
                    'src': '../assets/images/cars/aston-martin/aston-martin-8.jpg',
                    'thumb': '../assets/images/cars/aston-martin/aston-martin-8.jpg',
                }, {
                    'src': '../assets/images/cars/aston-martin/aston-martin-9.jpg',
                    'thumb': '../assets/images/cars/aston-martin/aston-martin-9.jpg',
                }, {
                    'src': '../assets/images/cars/aston-martin/aston-martin-10.jpg',
                    'thumb': '../assets/images/cars/aston-martin/aston-martin-10.jpg',
                },
                {
                    'src': '../assets/images/cars/aston-martin/aston-martin-11.jpg',
                    'thumb': '../assets/images/cars/aston-martin/aston-martin-11.jpg',
                }, {
                    'src': '../assets/images/cars/aston-martin/aston-martin-12.jpg',
                    'thumb': '../assets/images/cars/aston-martin/aston-martin-12.jpg',
                },]
        })

    });
    $('#lightgalleryHome').on('click', function (e) {
        e.preventDefault();
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": '../assets/images/homes/home-1.jpg',
                'thumb': '../assets/images/homes/home-1.jpg',
            }, {
                "src": '../assets/images/homes/home-2.jpg',
                'thumb': '../assets/images/homes/home-2.jpg',
            }, {
                "src": '../assets/images/homes/home-3.jpg',
                'thumb': '../assets/images/homes/home-3.jpg',
            }, {
                "src": '../assets/images/homes/home-4.jpg',
                'thumb': '../assets/images/homes/home-4.jpg',
            },
                {
                    "src": '../assets/images/homes/home-5.jpg',
                    'thumb': '../assets/images/homes/home-5.jpg',
                }, {
                    "src": '../assets/images/homes/home-6.jpg',
                    'thumb': '../assets/images/homes/home-6.jpg',
                }, {
                    "src": '../assets/images/homes/home-7.jpg',
                    'thumb': '../assets/images/homes/home-7.jpg',
                },
                {
                    "src": '../assets/images/homes/home-8.jpg',
                    'thumb': '../assets/images/homes/home-8.jpg',
                }, {
                    "src": '../assets/images/homes/home-9.jpg',
                    'thumb': '../assets/images/homes/home-9.jpg',
                }, {
                    "src": '../assets/images/homes/home-10.jpg',
                    'thumb': '../assets/images/homes/home-10.jpg',
                },
                {
                    "src": '../assets/images/homes/home-11.jpg',
                    'thumb': '../assets/images/homes/home-11.jpg',
                }, {
                    "src": '../assets/images/homes/home-12.jpg',
                    'thumb': '../assets/images/homes/home-12.jpg',
                },]
        })

    });

});


