(function () {


  function initPreviewSwiper() {
    return new Swiper('.split-slider__container--carbon', {
      navigation: {
        nextEl: '.split-slider__button-next',
        prevEl: '.split-slider__button-prev',
      },
      slidesPerView: 2,
      loop: true,
      scrollbar: {
        el: '.split-slider__scrollbar',
      },
    });
  }

  var slider = initPreviewSwiper();
})();
