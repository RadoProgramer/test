(() => {
  const refs = {
    openModalBtn_3: document.querySelector("[data-modal-open='3']"),
    closeModalBtn_3: document.querySelector("[data-modal-close='3']"),
    modal_3: document.querySelector("[data-modal='3']"),
    modalForm_3: document.querySelector('.contact_us_modal_form_wrapper_3'),
    inputName_3: document.getElementById('user_name_3'),
    inputEmail_3: document.getElementById('user_email_3'),
    nameLabel_3: document.querySelector('.label_name_3'),
    emailLabel_3: document.querySelector('.label_email_3'),
  };
  refs.openModalBtn_3.addEventListener('click', toggleModal);
  refs.closeModalBtn_3.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal_3.classList.toggle('is-hidden');
  }

  function clearValidationIcons() {
    document.querySelector('.valid_name_modal_icon').style.display = 'none';
    document.querySelector('.invalid_name_modal_icon').style.display = 'none';
    document.querySelector('.valid_email_modal_icon').style.display = 'none';
    document.querySelector('.invalid_email_modal_icon').style.display = 'none';
  }

  function clearLabelColors() {
    refs.nameLabel_3.classList.remove('valid', 'invalid');
    refs.emailLabel_3.classList.remove('valid', 'invalid');
  }
})();