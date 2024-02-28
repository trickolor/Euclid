const swiper = new Swiper('.swiper-container', {

  slidesPerView: 1,
  loop: true,
  autoHeight: true,

  pagination: {

    el: '.swiper-pagination',
    clickable: true,
  },

});

let tabBtn = document.querySelectorAll('.section-description__step-link');
let tabItem = document.querySelectorAll('.section-description__tab');

tabBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabBtn.forEach(function (btn) { btn.classList.remove('section-description__step-link--active') });
    e.currentTarget.classList.add('section-description__step-link--active');

    tabItem.forEach(function (element) { element.classList.remove('section-description__tab--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('section-description__tab--active');
  });
});

$(".accordion").accordion({

  heightStyle: "content"

});

$(".accordion").accordion({

  collapsible: true

});

$(".accordion").accordion({

  active: false

});

let burger = document.querySelector('.header__burger-button');
let headerNav = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav-list__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('header__burger-button--active');

  headerNav.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger-button--active');

    headerNav.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

let search  = document.querySelector('.header__search-link');
let searchBar = document.querySelector('.header__search-form');
let searchActive = document.querySelector('.header__form-search-button');
let searchClose = document.querySelector('.header__form-close-button');

search.addEventListener('click', function(){
  searchBar.classList.add('header__search-form--active');
})

searchClose.addEventListener('click', function(){
  searchBar.classList.remove('header__search-form--active');
})

searchClose.addEventListener('submit', function(){
  searchClose.preventDefault();
})

function changeCheckbox(event) {
  let item = document.getElementById('checkbox');
  switch(item.getAttribute('aria-checked')) {
      case "true":
          item.setAttribute('aria-checked', "false");
          break;
      case "false":
          item.setAttribute('aria-checked', "true");
          break;
  }
}
