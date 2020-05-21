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
