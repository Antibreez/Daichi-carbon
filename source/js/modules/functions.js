(function () {
  var navList = document.querySelector('.split-functions__nav-list');
  var navItems = document.querySelectorAll('.split-functions__nav-item');
  var contents = document.querySelectorAll('.split-functions__content');

  if (!navList) {
    return;
  }

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
