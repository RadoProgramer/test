document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact_us_modal_form_wrapper');
    const nameLabel = document.querySelector('.label_name');
    const nameInput = document.querySelector('.contact_us_name_modal_input');
    const emailLabel = document.querySelector('.label_email');
    const emailInput = document.querySelector('.contact_us_email_modal_input');
    const invalidNameIcon = document.querySelector('.invalid_name_modal_icon');
    const invalidEmailIcon = document.querySelector('.invalid_email_modal_icon');
    const sendButton = document.querySelector('.contact_us_modal_button');
    const openModalBtn = document.querySelector("[data-modal-open='1']");
    const closeModalBtn = document.querySelector("[data-modal-close='1']");
    const modal = document.querySelector("[data-modal='1']");
    const modal4 = document.querySelector("[data-modal='4']");
    const closeModalBtn4 = document.querySelector("[data-modal-close='4']");
    const closeModalBtn5 = document.querySelector("[data-modal-close='5']"); 
  
    form.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const isNameEmpty = nameInput.value.trim() === '';
        const isNameValid = nameInput.checkValidity();
        const isEmailEmpty = emailInput.value.trim() === '';
        const isEmailValid = emailInput.checkValidity();
        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        console.log('Name Input:', nameValue);
        console.log('Email Input:', emailValue);
  
        if (!isNameEmpty && isNameValid && !isEmailEmpty && isEmailValid) {
            modal.classList.add('is-hidden');
            modal4.classList.remove('is-hidden');
        }
    });
  
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
  
    openModalBtn.addEventListener('click', function () {
        modal.classList.toggle('is-hidden');
    });
  
    closeModalBtn.addEventListener('click', function () {
        modal.classList.toggle('is-hidden');
    });
  
    closeModalBtn4.addEventListener("click", toggleModal4);
    closeModalBtn5.addEventListener("click", toggleModal4); 
  
    function toggleModal4() {
        modal4.classList.toggle("is-hidden");
    }
    function closeModalOnEscape(event) {
        if (event.key === "Escape") {
            modal.classList.add('is-hidden');
            modal4.classList.add('is-hidden');
        }
    }
    document.addEventListener('keydown', closeModalOnEscape);
});

document.addEventListener('DOMContentLoaded', function () {
    const form_2 = document.querySelector('.contact_us_modal_form_wrapper_2');
    const nameLabel_2 = document.querySelector('.label_name_2');
    const nameInput_2 = document.querySelector('#user_name_2');
    const emailLabel_2 = document.querySelector('.label_email_2');
    const emailInput_2 = document.querySelector('#user_email_2');
    const invalidNameIcon_2 = document.querySelector('.invalid_name_modal_icon_2');
    const invalidEmailIcon_2 = document.querySelector('.invalid_email_modal_icon_2');
    const sendButton_2 = document.querySelector('.contact_us_modal_button_2');
    const openModalBtn_2 = document.querySelector("[data-modal-open='2']");
    const closeModalBtn_2 = document.querySelector("[data-modal-close='2']");
    const modal_2 = document.querySelector("[data-modal='2']");
    const modal5 = document.querySelector("[data-modal='5']");
    const closeModalBtn6 = document.querySelector("[data-modal-close='6']");
    const closeModalBtn7 = document.querySelector("[data-modal-close='7']");

    form_2.addEventListener('submit', function (event) {
        event.preventDefault();

        const isNameEmpty_2 = nameInput_2.value.trim() === '';
        const isNameValid_2 = nameInput_2.checkValidity();
        const isEmailEmpty_2 = emailInput_2.value.trim() === '';
        const isEmailValid_2 = emailInput_2.checkValidity();
        const nameValue_2 = nameInput_2.value;
        const emailValue_2 = emailInput_2.value;
        console.log('Name Input (form_2):', nameValue_2);
        console.log('Email Input (form_2):', emailValue_2);

        if (!isNameEmpty_2 && isNameValid_2 && !isEmailEmpty_2 && isEmailValid_2) {
            modal_2.classList.add('is-hidden');
            modal5.classList.remove('is-hidden');
        }
    });

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

    openModalBtn_2.addEventListener('click', function () {
        modal_2.classList.toggle('is-hidden');
    });

    closeModalBtn_2.addEventListener('click', function () {
        modal_2.classList.toggle('is-hidden');
    });

    closeModalBtn6.addEventListener('click', function () {
        modal5.classList.toggle('is-hidden');
    });

    closeModalBtn7.addEventListener('click', function () {
        modal5.classList.toggle('is-hidden');
    });
    function closeModalOnEscape(event) {
        if (event.key === "Escape") {
            modal_2.classList.add('is-hidden');
            modal5.classList.add('is-hidden');
        }
    }

    document.addEventListener('keydown', closeModalOnEscape);
});

document.addEventListener('DOMContentLoaded', function () {
    const form_3 = document.querySelector('.subscribe_modal_form_wrapper');
    const emailLabel_3 = document.querySelector('.label_email_3');
    const emailInput_3 = document.querySelector('#user_email_3');
    const invalidEmailIcon_3 = document.querySelector('.invalid_subscribe_email_modal_icon');
    const sendButton_3 = document.querySelector('.subscribe_modal_button');
    const openModalBtn_3 = document.querySelector("[data-modal-open='3']");
    const closeModalBtn_3 = document.querySelector("[data-modal-close='3']");
    const modal_3 = document.querySelector("[data-modal='3']");
    const inputEmail_3 = document.getElementById('user_email_3');

    openModalBtn_3.addEventListener('click', toggleModal);
    closeModalBtn_3.addEventListener('click', toggleModal);

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

    function toggleModal() {
        modal_3.classList.toggle('is-hidden');
    }

    function clearValidationIcons() {
        document.querySelector('.valid_email_modal_icon').style.display = 'none';
        document.querySelector('.invalid_email_modal_icon').style.display = 'none';
    }

    function clearLabelColors() {
        emailLabel_3.classList.remove('valid', 'invalid');
    }

    form_3.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailValue = emailInput_3.value.trim();
        console.log('Email Input:', emailValue);
        toggleModal();
    });
    function closeModalOnEscape(event) {
        if (event.key === "Escape") {
            modal_3.classList.add('is-hidden');
        }
    }

    document.addEventListener('keydown', closeModalOnEscape);
});