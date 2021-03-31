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
    let btnFilter = document.querySelector('#btn-filter');
    let aside = document.querySelector('.aside');


    function letAnimate() {
        let animates = document.querySelectorAll('.animate__animated');

        console.log(animates);
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
            if (btn == btnFilter) {
                aside.style.display = "block";

            }
            document.body.classList.toggle('overflow');
            letAnimate();

        }
    })

    modalCloses.forEach(modalClose => {

        modalClose.onclick = function () {
            modalJoin.style.display = "none";
            modalSign.style.display = "none";
            // aside.style.display = "none";
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
            slidesToShow: 1,
            prevArrow: `<button class="slider__arrow slider__arrow--prev">
                            <img src="img/slider/arrow-right.png" alt="arrow-prev">                    
                    </button>`,
            nextArrow: `<button class="slider__arrow slider__arrow--next">
                            <img src="img/slider/arrow-left.png" alt="arrow-next">
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


    let search = document.querySelector('#search');
    let cards = document.querySelectorAll('.product');
    search.oninput = function () {
        let inputVal = this.value.trim().toLowerCase();
        if (inputVal != '') {
            cards.forEach(function (elem) {
                if (elem.textContent.toLowerCase().search(inputVal) == -1) {
                    elem.classList.add('anime');
                    elem.classList.add('hide');
                } else {
                    elem.classList.remove('hide');
                    elem.classList.remove('anime');
                }
            });
        }
        else {
            cards.forEach(function (elem) {
                elem.classList.remove('hide');
                elem.classList.remove('anime');
            });

        }
    }

    let btnFilters = document.querySelectorAll('.aside-list__btn');

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltred = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            if (isItemFiltred && !isShowAll) {
                item.classList.add('anime');
            }
            else {
                item.classList.remove('anime');
                item.classList.remove('hide');

            }
        })
    }
    btnFilters.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide');
            }
        }
    })

})();