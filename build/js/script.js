(function () {
  var body = document.querySelector('body');
  var footerLink = document.querySelector('.split-footer__buy-link');
  var promoLink = document.querySelector('.promo-carbon__buy-link');
  var buyButton = document.querySelector('.fixed-link');




  var getPromoLinkY = function () {
    return promoLink.getBoundingClientRect().bottom;
  };

  var getFooterY = function () {
    return footerLink.getBoundingClientRect().top - window.innerHeight;
  };

  var isShown = getPromoLinkY() < 0 && getFooterY() > 0;

  if (isShown) {
    buyButton.classList.add('js--show');
  }


  var onScroll = function () {
    if (getPromoLinkY() < 0 && getFooterY() > 0 && !isShown) {
      isShown = true;
      console.log('показать');
      buyButton.classList.add('js--show');
    }

    if (getPromoLinkY() > 0 && isShown) {
      isShown = false;
      console.log('скрыть');
      buyButton.classList.remove('js--show');
    }

    if (getFooterY() < 0 && isShown) {
      isShown = false;
      console.log('скрыть');
      buyButton.classList.remove('js--show');

    }

    //console.log(getFooterY());

  };

  window.addEventListener('scroll', onScroll);
})();

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

(function () {
  let scrollDownLink = document.querySelector(`.js-scroll-down`);

  let handleAnchorClick = function () {
    event.preventDefault();
    let linkTarget = event.currentTarget.getAttribute(`href`);
    let id = linkTarget.substring(1, linkTarget.length);
    let aim = document.getElementById(id);
    aim.scrollIntoView({block: `start`, behavior: `smooth`});
  };

  if (scrollDownLink) {
    scrollDownLink.addEventListener(`click`, handleAnchorClick);
  }
})();
