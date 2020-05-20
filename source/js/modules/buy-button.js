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
