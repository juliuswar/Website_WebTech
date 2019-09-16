$('.page-scroll').on('click', function(e) {

    //ambil isi href
    var to = $(this).attr('href');

    //tangkap elemen
    var elemen_to = $(to);


    //pindahkan scroll
    $('html, body').animate({
        scrollTop: elemen_to.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();


});