(() => {
  const refs = {
    openModalBtn_2: document.querySelector("[data-modal-open='2']"),
    closeModalBtn_2: document.querySelector("[data-modal-close='2']"),
    modal_2: document.querySelector("[data-modal='2']"),
    modalForm_2: document.querySelector('.contact_us_modal_form_wrapper_3'),
    inputName_2: document.getElementById('user_name_2'),
    inputEmail_2: document.getElementById('user_email_2'),
    nameLabel_2: document.querySelector('.label_name_2'),
    emailLabel_2: document.querySelector('.label_email_2'),
  };
  refs.openModalBtn_2.addEventListener('click', toggleModal);
  refs.closeModalBtn_2.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal_2.classList.toggle('is-hidden');
  }

  function clearValidationIcons() {
    document.querySelector('.valid_name_modal_icon').style.display = 'none';
    document.querySelector('.invalid_name_modal_icon').style.display = 'none';
    document.querySelector('.valid_email_modal_icon').style.display = 'none';
    document.querySelector('.invalid_email_modal_icon').style.display = 'none';
  }

  function clearLabelColors() {
    refs.nameLabel_2.classList.remove('valid_2', 'invalid_2');
    refs.emailLabel_2.classList.remove('valid_2', 'invalid_2');
  }
})();