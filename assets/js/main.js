$(document).ready(function() {
  $(document).on('click', '.dropdown-menu.no-close', function(e) {
    e.stopPropagation();
  });
  $('.custom-select-toggler').click(function(e) {
    $(e.target).next().toggleClass('open');
  });
  $('.custom-select-menu-item').click(function(e) {
    $(e.target).parents().closest('.custom-select-menu').toggleClass('open');
  });
  $('#financedatepicker1 input').datepicker({
    clearBtn: true,
    todayHighlight: true,
    toggleActive: true,
    pickerPosition: "bottom-left",
    container: '#financedatepicker1'
  });
  $('#financedatepicker2 input').datepicker({
    clearBtn: true,
    todayHighlight: true,
    toggleActive: true,
    pickerPosition: "bottom-left",
    container: '#financedatepicker2'
  });
});
$(function() {
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


$(function() {
  $('[data-toggle="popover"]').popover();
  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.custom-number-input').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
  $('#priceInputs input').on('click', function(e) {
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

$(document).ready(function() {
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
    margin: 20,
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
  $('.owl-carousel-career-categories').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<svg class='icon'><use href='../assets/icons/sprite.svg#right-angle'></use></svg>", "<svg class='icon'><use href='../assets/icons/sprite.svg#right-angle'></use></svg>"],
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 4
      },
      1000: {
        items: 8
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
  $('.custom-checkbox input').click(function() {
    if ($(this).is(':checked')) {
      $(".delivery-location").toggleClass("delivery-show");
    } else {
      $(".delivery-location").toggleClass("delivery-show");
    }
  });
  $('#typeForReceipt').on('change', function() {
    if (this.value === 1) {
      $('.companyFormItems').toggleClass('show');
    } else {
      $('.companyFormItems').toggleClass('show');
    }
  });
  $('#aniimated-thumbnials').lightGallery({
    thumbnail: true
  });
});


function initMap() {
  const location = {
    lat: -33.872,
    lng: 151.252
  }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: location,
    disableDefaultUI: true,
    styles: [{
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [{
          "weight": "2.00"
        }]
      },
      {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#9c9c9c"
        }]
      },
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2f2f2"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
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
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#7b7b7b"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
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
        "stylers": [{
          "color": "#c8d7d4"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#070707"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }
    ]
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map
  })
}

$(function() {
  $(window).on('load', function() {
    initMap();
  });
  $('.last-min-slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    arrows: true,
    prevArrow: "<div class='last-min-nav'><svg class='prev'><use href='../assets/icons/sprite.svg#right-angle'></use></svg></div>",
    nextArrow: "<div class='last-min-nav'><svg class='next'><use href='../assets/icons/sprite.svg#right-angle'></use></svg></div>",
    autoplay: true,
    autoplaySpeed: 3000,
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

  $images.on("click", function(e) {
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
  $('.slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    for ($i = 0; $i < $images.length; $i++) {
      $images[$i].classList.remove('active')
    }
    $images[currentSlide].classList.add('active')
  });

  $green
    .on("beforeChange", function() {
      killit = true;

    }).on("afterChange", function() {
      killit = false;
    });

  $('#lightgalleryCar').on('click', function(e) {
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
        },
      ]
    })

  });
  $('#lightgalleryHome').on('click', function(e) {
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
        },
      ]
    })

  });
  $('#lightgalleryGet').on('click', function(e) {
    e.preventDefault();
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        "src": '../assets/images/ads-images/drone1.jpg',
        'thumb': '../assets/images/ads-images/drone1.jpg',
      }, {
        "src": '../assets/images/ads-images/drone2.jpg',
        'thumb': '../assets/images/ads-images/drone2.jpg',
      }, {
        "src": '../assets/images/ads-images/drone3.jpg',
        'thumb': '../assets/images/ads-images/drone3.jpg',
      }, {
        "src": '../assets/images/ads-images/drone4.jpg',
        'thumb': '../assets/images/ads-images/drone4.jpg',
      }, {
        "src": '../assets/images/ads-images/drone5.jpg',
        'thumb': '../assets/images/ads-images/drone5.jpg',
      }]
    })

  });
  $('#lightgalleryCarVideo').on('click', function(e) {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'html': '#carVideo'
      }]
    })
  });
  $('#lightgalleryHomeVideo').on('click', function(e) {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'html': '#homeVideo'
      }]
    })
  });
  $('#lightgalleryGetVideo').on('click', function(e) {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'html': '#getVideo'
      }]
    })
  });

});

$(function() {
  /*finance slider*/

  $('.finance-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<div class='prevBig'><svg class='prev'><use href='../assets/icons/sprite.svg#right-angle'></use></svg></div>",
    nextArrow: "<div class='nextBig'><svg class='next'><use href='../assets/icons/sprite.svg#right-angle'></use></svg></div>",
    fade: true,
  });

  $('.finance-slider-nav').slick({
    slidesPerRow: 8,
    rows: 2,
    arrows: false,
    infinite: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesPerRow: 4,
        rows: 2,
      }
    }, ]
  });

  const $parentFinance = $(".finance-slider-for");
  const $navFinance = $(".finance-slider-nav");
  const $images2 = $navFinance.find("img");
  let killit2 = false;

  for ($i = 0; $i < $images2.length; $i++) {
    $images2[$i].classList.remove('active')
  }
  $images2[0].classList.add('active')

  $images2.on("click", function(e) {
    if (!killit2) {
      e.stopPropagation();
      var idx = $(this).data("thumb");
      $parentFinance.slick("goTo", idx - 1);
      for ($i = 0; $i < $images2.length; $i++) {
        $images2[$i].classList.remove('active')
      }
      e.target.classList.add('active');
    }
  });
  $('.finance-slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    for ($i = 0; $i < $images2.length; $i++) {
      $images2[$i].classList.remove('active')
    }
    $images2[currentSlide].classList.add('active')
  });

  $navFinance
    .on("beforeChange", function() {
      killit2 = true;

    }).on("afterChange", function() {
      killit2 = false;
    });


  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawGreen);
  google.charts.setOnLoadCallback(drawRed);

  function drawGreen() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', '$');
    data.addRows([
      [new Date(2020, 7, 5), 14000],
      [new Date(2020, 7, 6), 14000],
      [new Date(2020, 7, 7), 15000],
      [new Date(2020, 7, 8), 13000],
      [new Date(2020, 7, 9), 13500],
      [new Date(2020, 7, 10), 13500],
      [new Date(2020, 7, 11), 10000],
      [new Date(2020, 7, 12), 13500],
      [new Date(2020, 7, 13), 13500],
      [new Date(2020, 7, 14), 15000],
      [new Date(2020, 7, 15), 13000],
      [new Date(2020, 7, 16), 14000],
      [new Date(2020, 7, 17), 12000],
      [new Date(2020, 7, 18), 14000],
      [new Date(2020, 7, 19), 11000],
      [new Date(2020, 7, 20), 11000],
      [new Date(2020, 7, 21), 11000],

    ]);

    var options = {
      legend: {
        position: 'none'
      },
      timeline: {
        groupByRowLabel: true
      },
      hAxis: {
        textPosition: 'none',
        gridlines: {
          color: 'transparent'
        },
        minorGridlines: {
          color: 'transparent'
        }
      },
      vAxis: {
        textPosition: 'none',
        gridlines: {
          color: 'transparent'
        },
        minorGridlines: {
          color: 'transparent'
        }
      },
      backgroundColor: {
        stroke: '#fff',
        strokeWidth: 0
      },
      chartArea: {
        width: '100%',
        height: '100%',
      },
      colors: ['#28CC67'],
      series: {
        0: {
          // set options for the first data series
          color: '#28CC67'
        }
      }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_green'));

    chart.draw(data, options);
  }

  function drawRed() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', '$');
    data.addRows([
      [new Date(2020, 7, 5), 14000],
      [new Date(2020, 7, 6), 14000],
      [new Date(2020, 7, 7), 15000],
      [new Date(2020, 7, 8), 13000],
      [new Date(2020, 7, 9), 13500],
      [new Date(2020, 7, 10), 13500],
      [new Date(2020, 7, 11), 10000],
      [new Date(2020, 7, 12), 13500],
      [new Date(2020, 7, 13), 13500],
      [new Date(2020, 7, 14), 15000],
      [new Date(2020, 7, 15), 13000],
      [new Date(2020, 7, 16), 14000],
      [new Date(2020, 7, 17), 12000],
      [new Date(2020, 7, 18), 14000],
      [new Date(2020, 7, 19), 11000],
      [new Date(2020, 7, 20), 11000],
      [new Date(2020, 7, 21), 11000],

    ]);

    var options = {
      legend: {
        position: 'none'
      },
      timeline: {
        groupByRowLabel: true
      },
      hAxis: {
        textPosition: 'none',
        gridlines: {
          color: 'transparent'
        },
        minorGridlines: {
          color: 'transparent'
        }
      },
      vAxis: {
        textPosition: 'none',
        gridlines: {
          color: 'transparent'
        },
        minorGridlines: {
          color: 'transparent'
        }
      },
      backgroundColor: {
        stroke: '#fff',
        strokeWidth: 0
      },
      chartArea: {
        width: '100%',
        height: '100%',
      },
      colors: ['#FF0000'],
      series: {
        0: {
          color: '#FF0000'
        }
      }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_red'));

    chart.draw(data, options);
  }

  google.charts.load('current', {
    packages: ['corechart', 'line']
  });
  google.charts.setOnLoadCallback(drawBasic);

  function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'USD');

    data.addRows([
      [0, 0],
      [1, 10],
      [2, 23],
      [3, 17],
      [4, 18],
      [5, 9],
      [6, 11],
      [7, 27],
      [8, 33],
      [9, 40],
      [10, 32],
      [11, 35],
      [12, 30],
      [13, 40],
      [14, 42],
      [15, 47],
      [16, 44],
      [17, 48],
      [18, 52],
      [19, 54],
      [20, 42],
      [21, 55],
      [22, 56],
      [23, 57],
    ]);

    var options = {
      legend: {
        position: 'none'
      },
      hAxis: {
        title: 'test',
        textPosition: 'in',
        gridlines: {
          color: 'transparent'
        },
        minorGridlines: {
          color: 'transparent'
        }
      },

      vAxis: {
        textPosition: 'in',
        title: 'test'
      },
      backgroundColor: {
        stroke: 'red',
      },
      colors: ['#28CC67'],
      chartArea: {
        width: '100%',
        height: '100%',
      },
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_markets'));

    chart.draw(data, options);
  }


});
