
// navbar and logo switch related with scroll position
$(window).on('scroll', function () {
    if ($(window).width() > 1024) {
        if ($(document).scrollTop() > 150) {
            setNavbarLight();
        } else {
            setNavbarTransparent();
        }
    }
});

// navbar and logo switch related with screen width
function toggleNavbar() {
    if (($(window).width() > 1024) && ($(document).scrollTop() <= 150)) {
        setNavbarTransparent();
    } else {
        setNavbarLight();
    }
}

toggleNavbar();

$(window).resize(function () {
    toggleNavbar();
});

/* navbar setting functions */
function setNavbarLight() {
    $('.navbar').addClass('navbar-light bg-light ');
    $('.navbar-brand img').attr('src', 'assets/img/loop-logo.png');
}

function setNavbarTransparent() {
    $('.navbar').removeClass('navbar-light bg-light ');
    $('.navbar-brand img').attr('src', 'assets/img/loop-logo-white.png');
}