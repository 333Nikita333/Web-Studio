(() => {
  const menuBtnRefOpen = document.querySelector('[data-menu-button-open]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('.body-site');

  menuBtnRefOpen.addEventListener('click', () => {
    menuBtnRefOpen.classList.toggle('button-menu--is-open');

    mobileMenuRef.classList.toggle('mobile-menu--is-open');
  });

  menuBtnRefClose.addEventListener('click', () => {
    menuBtnRefClose.classList.toggle('button-menu--is-close');

    body.classList.toggle('menu--is-open');

    mobileMenuRef.classList.toggle('mobile-menu--is-open');
  });

  menuBtnRefOpen.addEventListener('click', () => {
    body.classList.toggle('menu--is-open');
  });
})();

// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
// ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
