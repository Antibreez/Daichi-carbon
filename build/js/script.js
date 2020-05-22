(function () {
  var body = document.querySelector('body');
  var footerLink = document.querySelector('.split-footer__buy-link');
  var promoLink = document.querySelector('.promo-split__buy-link');
  var buyButton = document.querySelector('.fixed-link');

  if (!footerLink) {
    return;
  }

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
      buyButton.classList.add('js--show');
    }

    if (getPromoLinkY() > 0 && isShown) {
      isShown = false;
      buyButton.classList.remove('js--show');
    }

    if (getFooterY() < 0 && isShown) {
      isShown = false;
      buyButton.classList.remove('js--show');

    }
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
  var navList = document.querySelector('.split-functions__nav-list');
  var navItems = document.querySelectorAll('.split-functions__nav-item');
  var contents = document.querySelectorAll('.split-functions__content');

  var currentNavIdx = 0;

  var onNavClick = function (evt) {
    var target = evt.target;

    if (
      target.classList.contains('split-functions__nav-item-link')
      && !target.parentNode.classList.contains('js--active')
    ) {
      var idx = +target.parentNode.getAttribute('data-idx');

      navItems[currentNavIdx].classList.remove('js--active');
      contents[currentNavIdx].classList.remove('js--show');

      navItems[idx].classList.add('js--active');
      contents[idx].classList.add('js--show');

      currentNavIdx = idx;
    }
  };

  navList.addEventListener('click', onNavClick);
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
