$(document).ready(function() {

    checkWindowWidth();

    $(window).resize(function() {
        checkWindowWidth();
    });

    // Smooth scrolling
    $('a[href*="#"]').not('a[href="#"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});

// Adds mobile style to navigation
function mobileStyleNav() {
    $('#navigation').addClass('mobile-nav');
    $('#nav-list').addClass('mobile-nav-list');
    $('.nav-item').addClass('mobile-nav-item');
    $('.nav-link').addClass('mobile-nav-link');
    $('#contact-item').css('display', 'inline-block');
}

// Adds desktop style to navigation
function desktopStyleNav() {
    $('#navigation').removeClass('mobile-nav');
    $('#nav-list').removeClass('mobile-nav-list');
    $('.nav-item').removeClass('mobile-nav-item');
    $('.nav-link').removeClass('mobile-nav-link');
    $('#contact-item').css('display', 'none');
}

// Checks window size, repositions nav element
// and calls appropriate style function
function checkWindowWidth() {
    if ($(window).width() <= 800) {
        var nav = $('#navigation').detach();
        $('body').append(nav);
        mobileStyleNav();
    } else {
        if ($('#contact-item').css('display') == 'inline-block') {
            $('#nav-container').append($('#navigation').detach());
            desktopStyleNav();
        }
    }
}