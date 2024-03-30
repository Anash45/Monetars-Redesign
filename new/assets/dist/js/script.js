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

function openSigninSignup(target) {
    $('.nav-' + target).tab('show');
    $('#signinSignup').modal('show');
}