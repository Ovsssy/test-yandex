const membersSlider = new Swiper('.members_slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.members_slider-button-next',
        prevEl: '.members_slider-button-prev',
    },
    pagination: {
        el: '.members_slider-pagination',
        type: 'fraction',
        renderFraction: (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span><span>/</span><span class="${totalClass}"></span>`;
        },
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        1024: { slidesPerView: 3 },
    }
});

const stagesSlider = new Swiper('.stages_slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.stages_slider-btn-next',
        prevEl: '.stages_slider-btn-prev',
    },
    pagination: {
        el: '.stages_slider-pagination',
    }
})