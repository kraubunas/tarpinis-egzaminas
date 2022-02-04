const swiper = new Swiper('.swiper', {

    mousewheel: {
        invert: true,
    },

    breakpoints: {
        1117: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 2,
        },

        0: {
            slidesPerView: 1,
        }
    },

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },


});