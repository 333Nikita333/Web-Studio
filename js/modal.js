(() => {
  const refs = {
    body: document.querySelector('.body-site'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.modal.addEventListener('click', handleBackdropClick);
  
  function openModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
    refs.body.classList.toggle('menu--is-open');

    window.addEventListener('keydown', handleEscDown);
  }
  function closeModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
    refs.body.classList.toggle('menu--is-open');
    window.removeEventListener('keydown', handleEscDown);
  }
  function handleBackdropClick(e) {
    if (refs.modal.classList.contains('backdrop--is-hidden')) {
      return;
    }
  
    if (e.currentTarget === e.target) {
      refs.modal.classList.toggle('backdrop--is-hidden');
      refs.body.classList.toggle('menu--is-open');
    }
  }
  function handleEscDown(e) {
    if (refs.modal.classList.contains('backdrop--is-hidden')) {
      return;
    }

    if (e.code === 'Escape') {
      refs.modal.classList.toggle('backdrop--is-hidden');
      refs.body.classList.toggle('menu--is-open');
    }
  }
})();
