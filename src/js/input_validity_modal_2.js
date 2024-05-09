document.addEventListener('DOMContentLoaded', function () {
    const form_2 = document.querySelector('.contact_us_modal_form_wrapper_2');
    const nameLabel_2 = document.querySelector('.label_name_2');
    const nameInput_2 = document.querySelector('#user_name_2');
    const emailLabel_2 = document.querySelector('.label_email_2');
    const emailInput_2 = document.querySelector('#user_email_2');
    const invalidNameIcon_2 = document.querySelector('.invalid_name_modal_icon_2');
    const invalidEmailIcon_2 = document.querySelector('.invalid_email_modal_icon_2');
    const sendButton_2 = document.querySelector('.contact_us_modal_button_2');
  
    form_2.addEventListener('input', function () {
      const isNameEmpty_2 = nameInput_2.value.trim() === '';
      const isNameValid_2 = nameInput_2.checkValidity();
  
      nameLabel_2.classList.remove('valid', 'invalid');
      invalidNameIcon_2.classList.remove('wrong');
  
      if (!isNameEmpty_2) {
        if (isNameValid_2) {
          nameLabel_2.classList.add('valid');
        } else {
          nameLabel_2.classList.add('invalid');
          invalidNameIcon_2.classList.add('wrong');
        }
      }
  
      const isEmailEmpty_2 = emailInput_2.value.trim() === '';
      const isEmailValid_2 = emailInput_2.checkValidity();
  
      emailLabel_2.classList.remove('valid', 'invalid');
      invalidEmailIcon_2.classList.remove('wrong');
  
      if (!isEmailEmpty_2) {
        if (isEmailValid_2) {
          emailLabel_2.classList.add('valid');
        } else {
          emailLabel_2.classList.add('invalid');
          invalidEmailIcon_2.classList.add('wrong');
        }
      }
  
      const isUserNameValid_2 = nameInput_2.checkValidity();
      const isUserEmailValid_2 = emailInput_2.checkValidity();
  
      if (isUserNameValid_2 && isUserEmailValid_2) {
        sendButton_2.classList.add('valid');
      } else {
        sendButton_2.classList.remove('valid');
      }
    });
  });