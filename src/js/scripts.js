(function () {
    'use strict';

    $(document).ready(function () {
        $('.slider-hero').slick({
            infinite: true,
            // autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: `<button class="slider__arrow slider__arrow--prev">
                            <img src="../img/slider/arrow-right.png" alt="arrow-prev">                    
                    </button>`,
            nextArrow: `<button class="slider__arrow slider__arrow--next">
                            <img src="../img/slider/arrow-left.png" alt="arrow-next">
                    </button>`,
        });
    });
    $(document).ready(function () {
        $('.aside__slider').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        });
    });

})();