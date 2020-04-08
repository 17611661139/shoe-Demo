$(function () {
    //调用fullpage.js
    $('#fullpage').fullpage({
        navigation: true,
        scrollingSpeed: 900
    });

    //移入动画
    $('.show_item').mouseenter(function () {;
        $(this).find('.box_j').removeClass('noshow');
        $(this).find('.box_j').addClass('show');
        $(this).find('.solid').removeClass('nc');
        $(this).find('.solid').addClass('c');
        $(this).find('.shoe').removeClass('nd');
        $(this).find('.shoe').addClass('d');
    })

    $('.show_item').mouseleave(function () {
        $(this).find('.box_j').removeClass('show');
        $(this).find('.box_j').addClass('noshow');
        $(this).find('.solid').removeClass('c');
        $(this).find('.solid').addClass('nc');
        $(this).find('.shoe').removeClass('d');
        $(this).find('.shoe').addClass('nd');
    })


})