$(document).ready(function () {
    assign_click_handlers();
    render_info();
});

function assign_click_handlers() {
    $('.cubetube_live').on('click', function () {
        window.open('https://thecubetube.com/', '_blank')
    })
    $('.cubetube_github').on('click', function () {
        window.open('https://github.com/AnthonySorise/The-Cube-Tube', '_blank')
    })
    $('.ygo_live').on('click', function () {
        window.open('memory_match/index.html')
    });
    $('.ygo_github').on('click', function () {
        window.open('https://github.com/Umpoy/memory_match_oop')
    });
    $('.netflix_live').on('click', function () {
        window.open('netflix_roulette/index.html')
    });
    $('.netflix_github').on('click', function () {
        window.open('https://github.com/Umpoy/netflix_roulette')
    });
    $('.magic_app_live').on('click', function () {
        window.open('is_this_your_card/index.html')
    });
    $('.magic_app_github').on('click', function () {
        window.open('https://github.com/Umpoy/is_this_your_card')
    })
    $('.table_live').on('click', function () {
        window.open('tableland/index.html')
    });
    $('.table_github').on('click', function () {
        window.open('https://github.com/Umpoy/tableland')
    })
}

function render_info() {
    var phone_number = '7144725319';
    var email = 'audrianmanly@gmail.com';
    $('.phone_number').text("714-472-5319").attr('href', 'tel:1' + phone_number);
    $('.email').text(email).attr('href', 'mailto:' + email)
}