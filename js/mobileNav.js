const mobileNav = document.querySelector(".mobile-nav");

const mobileNavToggler = () => {
    const menuToggler = document.querySelector(".menu-toggle");
    const listItemClose = document.querySelector(".mobile-nav__item--close");

    menuToggler.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile-nav--show')
        menuToggler.classList.toggle('menu-toggle--close')
    })

    listItemClose.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile-nav--show')
        menuToggler.classList.toggle('menu-toggle--close')
    })
    // document.getElementById('html').classList.toggle('scroll-disable');
}

mobileNavToggler();

const disableScrollY = () => {

  document.getElementById('html').classList.toggle('scroll-disable');
  
  // if (mobileNav.classList.contains('mobile-nav--close')) {
  //   document.getElementById('html').classList.add('scroll-disable');
  // }

  // if (mobileNav.classList.contains('mobile-nav--show')) {
  //   document.getElementById('html').classList.remove('scroll-disable');
  // }
}
