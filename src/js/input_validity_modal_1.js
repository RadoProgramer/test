document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact_us_modal_form_wrapper');
  const nameLabel = document.querySelector('.label_name');
  const nameLabel_2 = document.querySelector('.label_name_2');
  const nameInput = document.querySelector('.contact_us_name_modal_input');
  const emailLabel = document.querySelector('.label_email');
  const emailLabel_2 = document.querySelector('.label_email_2');
  const emailInput = document.querySelector('.contact_us_email_modal_input');
  const invalidNameIcon = document.querySelector('.invalid_name_modal_icon');
  const invalidNameIcon_2 = document.querySelector('.invalid_name_modal_icon_2');
  const invalidEmailIcon = document.querySelector('.invalid_email_modal_icon');
  const invalidEmailIcon_2 = document.querySelector('.invalid_email_modal_icon_2');
  const sendButton = document.querySelector('.contact_us_modal_button');
  const sendButton_2 = document.querySelector('.contact_us_modal_button');

  form.addEventListener('input', function () {
    const isNameEmpty = nameInput.value.trim() === '';
    const isNameValid = nameInput.checkValidity();

    nameLabel.classList.remove('valid', 'invalid');
    invalidNameIcon.classList.remove('wrong');

    if (!isNameEmpty) {
      if (isNameValid) {
        nameLabel.classList.add('valid');
      } else {
        nameLabel.classList.add('invalid');
        invalidNameIcon.classList.add('wrong');
      }
    }

    const isEmailEmpty = emailInput.value.trim() === '';
    const isEmailValid = emailInput.checkValidity();

    emailLabel.classList.remove('valid', 'invalid');
    invalidEmailIcon.classList.remove('wrong');

    if (!isEmailEmpty) {
      if (isEmailValid) {
        emailLabel.classList.add('valid');
      } else {
        emailLabel.classList.add('invalid');
        invalidEmailIcon.classList.add('wrong');
      }
    }

    const isUserNameValid = nameInput.checkValidity();
    const isUserEmailValid = emailInput.checkValidity();

    if (isUserNameValid && isUserEmailValid) {
      sendButton.classList.add('valid');
    } else {
      sendButton.classList.remove('valid');
    }
  });
});