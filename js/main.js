$(document).ready(function(){
	$('.burger').on( "click", function(){
        $("body header .container .base_navbar > ul").slideToggle(500);
		$(this).toggleClass('open').$('.menu').toggleClass('open');
	});

     $( "body header .container .base_navbar ul li" ).on( "click", function() {
        $(this).find('ul').slideToggle(500);
    });

    $( "body header .container .search .icon a i").on("click", function () {
        $( "body header .container .base_navbar .searching form input" ).focus();
        if( $( window ).width() <= 768 ){ $(".base_navbar .searching").slideToggle(300); }
        else{ $(".base_navbar ul, .base_navbar .searching").slideToggle(300); }
        $(".search .icon a i").toggleClass('fa-search');
        $(".search .icon a i").toggleClass('fa-times');
    });

    // SLIDER
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });
});
