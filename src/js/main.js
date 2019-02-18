
/*
 * Custom
 */
//= partials/app.js


$('document').ready(function(){

    (function() {

        "use strict";

        var toggles = document.querySelectorAll(".c-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            });
        }

    })();

    $(document).scroll(function() {
        if ($(window).scrollTop() > 30){
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').removeClass('is-active').addClass('collapsed');
        }

    });

    $('#review').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('#browser-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '250px',
        dots: false,
        prevArrow: $('.browser-prev-btn'),
        nextArrow: $('.browser-next-btn'),
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    centerPadding: '150px'
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '50px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '0'
                }
            }
        ]

    });

});








