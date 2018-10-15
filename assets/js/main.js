$(document).ready(function () {
    render_info();
});
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
    $('.navbar').addClass('navbar-dark bg-dark ');
    $('.navbar-brand img').attr('src', 'assets/img/loop-logo.png');
}

function setNavbarTransparent() {
    $('.navbar').removeClass('navbar-dark bg-dark ');
    $('.navbar-brand img').attr('src', 'assets/img/loop-logo-white.png');
}

function render_info() {
    var phone_number = '7144725319';
    var email = 'audrianmanly@gmail.com';
    $('.phone_number').text("714-472-5319").attr('href', 'tel:1' + phone_number);
    $('.email').text(email).attr('href', 'mailto:' + email)
}
