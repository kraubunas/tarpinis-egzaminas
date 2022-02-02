const swiper = new Swiper('.swiper', {
    slidesPerView: 3,

    mousewheel: {
        invert: true,
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