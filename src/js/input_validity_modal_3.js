document.addEventListener('DOMContentLoaded', function () {
    const form_3 = document.querySelector('.subscribe_modal_form_wrapper');
    const emailLabel_3 = document.querySelector('.label_email_3');
    const emailInput_3 = document.querySelector('#user_email_3');
    const invalidEmailIcon_3 = document.querySelector('.invalid_subscribe_email_modal_icon');
    const sendButton_3 = document.querySelector('.subscribe_modal_button');
    
    form_3.addEventListener('input', function () {

      const isEmailEmpty_3 = emailInput_3.value.trim() === '';
      const isEmailValid_3 = emailInput_3.checkValidity();
  
      emailLabel_3.classList.remove('valid', 'invalid');
      invalidEmailIcon_3.classList.remove('wrong');
  
      if (!isEmailEmpty_3) {
        if (isEmailValid_3) {
          emailLabel_3.classList.add('valid');
        } else {
          emailLabel_3.classList.add('invalid');
          invalidEmailIcon_3.classList.add('wrong');
        }
      }
  
      const isUserEmailValid_3 = emailInput_3.checkValidity();
  
      if (isUserEmailValid_3) {
        sendButton_3.classList.add('valid');
      } else {
        sendButton_3.classList.remove('valid');
      }
    });
  });
