(function () {
    'use strict';

    let btnJoin = document.getElementById("btn-join");
    let btnSign = document.getElementById("btn-sign");
    let modalJoin = document.getElementById("join");
    let modalSign = document.getElementById("sign-in");
    let modals = document.querySelectorAll(".modal");
    let modalBodys = document.querySelectorAll(".modal__form");
    let modalCloses = document.querySelectorAll(".modal__close");

    btnJoin.onclick = function () {
        modalJoin.style.display = "block";
        document.body.classList.toggle('overflow');
    }
    btnSign.onclick = function () {
        modalSign.style.display = "block";
        document.body.classList.toggle('overflow');
    }

    modalCloses.forEach(modalClose => {
        modalClose.onclick = function () {
            modalJoin.style.display = "none";
            modalSign.style.display = "none";
            document.body.classList.remove('overflow');


        }
    })

    modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
            modalBodys.forEach(modalBody => {
                if (event.target == modalBody) {
                    modal.style.display = "none";
                    document.body.classList.remove('overflow');

                }
            })
        })

    })

    $(document).ready(function () {
        $('.slider-hero').slick({
            infinite: true,
            autoplay: true,
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