document.addEventListener('DOMContentLoaded', () => {

    new Swiper(".news-slider", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 24,

        navigation: {
            nextEl: ".news-slider__next",
            prevEl: ".news-slider__prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            1399: {
                slidesPerView: 3,
            },
        }
    });

    new Swiper(".banners-slider", {
        loop: true,

        navigation: {
            nextEl: ".banners-slider__next",
            prevEl: ".banners-slider__prev",
        },

        pagination: {
            el: '.banners-slider__pagination',
        },
    });
})