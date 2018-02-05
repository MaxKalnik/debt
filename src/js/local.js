$(document).ready(function () {
    var body = $('body');

    body.on('click', '.mobile-only-show', function(event){
        event.preventDefault();
        body.append($('.map-container'));
        $('.map-container').addClass('show');
        $('.page__wrap').hide();

        return false

    });

    body.on('click', '.mobile-only-close', function (event) {
        event.preventDefault();
        $('.map-container').removeClass('show');
        $('.js-before-table').after($('.map-container'));
        $('.page__wrap').show();
        $('html, body').animate({ scrollTop: $('.map-container').position().top }, 500);
        return false
    });

    body.on('click', '.map__btn', function (event) {
        event.preventDefault();
        if ($(this).siblings('.map__btn-container').hasClass('visible')) {
            $(this).siblings('.map__btn-container').removeClass('visible');
        }
        else {
            $('.map__btn-container').removeClass('visible');
            $(this).siblings('.map__btn-container').addClass('visible');
        }
    });

    body.mouseup(function(event) {
        if ($('.map__btn-wrapper').has(event.target).length === 0) {
            $('.map__btn-container').removeClass('visible');
        }
    });

    body.on('click', '.mobile-only-close', function(event){
        event.preventDefault();
        $('.blur').removeClass('show');
        $('.popup').removeClass('show');
        $('.section--map').append($('.map-container'));
        $('.map-img--big').css('transform', 'scale(1)');

        return false

    });

    function topMenu() {
        if ($(window).width() < 959) {

            body.on('click', '.top-menu__link.active', function () {
                $(this).parents('.top-menu__wrap').toggleClass('open');
                return false
            });
        }

    };

    topMenu();
    $(window).on('resize', function () {
        topMenu();
    });

    body.on('focus', '#copyTarget', function(event){
        $(this).select();
    });

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    };

    body.on('click', '#copyButton', function() {
        copyToClipboard($('#copyTarget'));

    });

    body.on('click', '.map__btn', function() {
        openPhotoSwipe(items);
    });

});
