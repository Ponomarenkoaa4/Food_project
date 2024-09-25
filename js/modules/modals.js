function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('show');
  modal.classList.remove('hide');
  /* modal.classList.toggle('show'); */
  document.body.style.overflow = 'hidden';

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal (modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('hide');
  modal.classList.remove('show');
  /* modal.classList.toggle('show'); */
  document.body.style.overflow = '';
}

function modals(triggerSelector, modalSelector, modalTimerId) {

  const modalTrigger = document.querySelectorAll(triggerSelector),
  modal = document.querySelector(modalSelector);

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal(modalSelector);
    }
  });


function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll); /* чтобы окно появлялось 1 раз при пролистывании до конца стр */
  }
}

window.addEventListener('scroll', showModalByScroll);
}

export default modals;
export {closeModal};
export {openModal};