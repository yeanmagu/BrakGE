$(document).ready(function () {

    $(window).resize(function () {

        // aquí le pasamos la clase o id de nuestro div a centrar (en este caso "caja")
        $('.caja').css({
            position: 'absolute',
            left: ($(window).width() - $('.caja').outerWidth()) / 2,
            top: ($(window).height() - $('.caja').outerHeight()) / 2
        });

    });

    // Ejecutamos la función
    $(window).resize();

});