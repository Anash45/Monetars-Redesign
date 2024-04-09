$(document).ready(function () {
    // Initialize Slick carousel on Navbar
    $('.nav-carousel').slick({
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        prevArrow: false, // Hide previous arrow
        nextArrow: false, // Hide next arrow
        dots: false, // Hide navigation dots
        draggable: true, // Enable dragging
        infinite: true, // Infinite looping
        variableWidth: true // Variable width based on content width
    });

    // Initialize Slick carousel on Offers
    $('.offers').slick({
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        prevArrow: '<button type="button" class="slick-arrows slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrows slick-next"><i class="fa fa-chevron-right"></i></button>',
        dots: false, // Hide navigation dots
        draggable: true, // Enable dragging
        infinite: true, // Infinite looping
        variableWidth: true // Variable width based on content width
    });

    // Hero carousel
    $('.hero-carousel').slick({
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        prevArrow: false, // Hide previous arrow
        nextArrow: false, // Hide next arrow
        dots: false, // Hide navigation dots
        draggable: true, // Enable dragging
        infinite: true, // Infinite looping
        variableWidth: false // Variable width based on content width
    });

    $('.nb-btn').on('click', function () {
        $(this).siblings('.dropdown-menu').toggle();
    })

    function openSidebar() {
        $('.sidebar').fadeIn();
    }

    function closeSidebar() {
        $('.sidebar').fadeOut();
    }

    $('.sidebar-toggler').on('click', function () {
        openSidebar();
    })
    $('.sidebar').on('click', function (event) {
        // Check if the clicked element is not inside .side-nav
        if (!$(event.target).closest('.side-nav').length) {
            closeSidebar();
        }
    });
    let theme = window.localStorage.getItem('theme');
    changeTheme(theme);

    $(".testimonials").slick({
        centerMode: true,
        centerPadding: '16px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-arrows slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrows slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

function changeTheme(targetSwitch) {
    let switchBtn = $('.btn-switch');
    $('body').removeClass('light');
    $('body').removeClass('dark');
    $('body').addClass(targetSwitch);
    window.localStorage.setItem('theme', targetSwitch);
    if (targetSwitch == 'light') {
        switchBtn.attr('data-switch', 'dark');
    } else {
        switchBtn.attr('data-switch', 'light');
    }
}

$('.btn-switch').on('click', function (params) {
    let targetSwitch = $(this).attr('data-switch');
    changeTheme(targetSwitch);
});

function openModal(target) {
    if (target == 'signin' || target == 'signup') {
        $('.nav-' + target).tab('show');
        $('#signinSignup').modal('show');
    } else if (target == 'pay') {
        $('#payModal').modal('show');
    }
}

function selectPayCard() {
    $('.pay-modal .pay-card').each(function () {
        if ($(this).find('input:checked').length > 0) {
            $('.pay-modal .pay-card').removeClass('card-selected');
            $(this).addClass('card-selected');
        }
    });
}

$('.lb-tab-btn').on('shown.bs.tab', function (event) {
    let target = $(this).attr('data-bs-target');
    if (target == "#pills-daily") {
        $('#lb-range').html("Daily");
    } else {
        $('#lb-range').html("Monthly");
    }
})

// Data for the line graph
var data = {
    labels: ['10', '11', '12', '13', '14'],
    datasets: [{
        label: 'Earning',
        data: [3200, 2440, 6550, 4030, 2510],
        borderColor: 'skyblue',
        borderWidth: 2,
        fill: false
    }]
};

// Get the canvas element
var ctx = document.getElementById('lineGraph').getContext('2d');

// Create the line chart
var lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                display: true,
                title: {
                    display: false,
                    text: 'Month'
                }
            },
            y: {
                display: true,
                title: {
                    display: false,
                    text: 'Value'
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value / 1000 + 'k'; // Convert to thousands and append 'k'
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom' // Position legend at the bottom
            }
        }
    }
});

function changeVisibility() {
    var checkbox = document.getElementById('flexSwitchCheckChecked');
    var label = document.getElementById('p-visibility');

    if (checkbox.checked) {
        label.textContent = 'Public';
    } else {
        label.textContent = 'Private';
    }
}