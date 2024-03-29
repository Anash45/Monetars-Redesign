$(document).ready(function () {
    // Initialize Slick carousel
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
});

function changeTheme(targetSwitch) {    
    let switchBtn = $('.btn-switch');
    $('body').removeClass('light');
    $('body').removeClass('dark');
    $('body').addClass(targetSwitch);
    window.localStorage.setItem('theme',targetSwitch);
    if(targetSwitch == 'light'){
        switchBtn.attr('data-switch','dark');
    }else{
        switchBtn.attr('data-switch','light');
    }
}

$('.btn-switch').on('click', function (params) {
    let targetSwitch = $(this).attr('data-switch');
    changeTheme(targetSwitch);
});

function openSigninSignup(target) {
    $('.nav-'+target).tab('show');
    $('#signinSignup').modal('show');
}