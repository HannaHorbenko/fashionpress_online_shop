(function () {
    'use strict';

    let btns = document.querySelectorAll(".btn-modal");
    let nav = document.getElementById("nav");
    let menu = document.getElementById("menu");
    let btnJoin = document.getElementById("btn-join");
    let btnSign = document.getElementById("btn-sign");
    let modalJoin = document.getElementById("join");
    let modalSign = document.getElementById("sign-in");
    let modals = document.querySelectorAll(".modal");
    let modalBodys = document.querySelectorAll(".modal__form");
    let modalCloses = document.querySelectorAll(".btn__close");

    function letAnimate() {
        let animates = document.querySelectorAll('.animate__animated');

        animates.forEach(animate => {
            let animateMode = animate.getAttribute('data-animate');
            if (animateMode) {
                animate.classList.add('animate__' + animateMode);
            }
        })

    };

    btns.forEach(btn => {
        btn.onclick = function (e) {
            console.log(e)
            if (btn == btnJoin) {
                modalJoin.style.display = "block";
            }
            if (btn == btnSign) {
                modalSign.style.display = "block";
            }
            if (btn == menu) {
                nav.style.display = "block";

            }
            document.body.classList.toggle('overflow');
            letAnimate();

        }
    })

    modalCloses.forEach(modalClose => {

        modalClose.onclick = function () {
            modalJoin.style.display = "none";
            modalSign.style.display = "none";
            nav.style.display = "none";

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