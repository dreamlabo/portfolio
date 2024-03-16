const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById("your-name");
const emailInput = document.getElementById("email-address");
const contactMessage = document.getElementById("contact-message");
const errorMessageFields = document.getElementsByClassName("contact-error-message");
const formHoneypot = document.getElementById("contact-input-honeypot");
const successMessage = document.getElementsByClassName("contact-success-message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



contactForm.addEventListener('submit', handleContactFormSubmit);
contactForm.reset();
contactMessage.innerText = "";

function handleContactFormSubmit(e) {
    e.preventDefault();

    if(formHoneypot.value !== "") {
        return;
    }

    let focusElement = null;
    let isErrorFree = true;

    for(let i = 0; i < errorMessageFields.length; i++) {
        errorMessageFields[i].classList.remove("contact-error-visible");
    }

      // check if name is empty
    if(nameInput.value.trim() === "") {
        isErrorFree = false;
        errorMessageFields[0].classList.add("contact-error-visible");
        if(!focusElement) {
            focusElement = nameInput;
        }
    }

    //check for valid email
    if( emailInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
        isErrorFree = false;
        errorMessageFields[1].classList.add("contact-error-visible");
        if(!focusElement) {
            focusElement = emailInput;
        }
    }

    // check if tell us is empty
    if(contactMessage.value.trim() === "") {
        isErrorFree = false;
        errorMessageFields[2].classList.add("contact-error-visible");
        if(!focusElement) {
            focusElement = tellUsInput;
        }
    }

    if(!isErrorFree) {
        focusElement.focus();
    }
    else {
        const templateParams = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            text: contactMessage.value.trim(),
        }

        emailjs.send('service_xsyyfic', 'template_i8ccxoy', templateParams).then(
            (response) => {
                console.log(response)
                successfullySentContactInfo();
            },
            (error) => {
                console.log(error)
                // errorSendingContactInfo();
            },
          );
    }
}

function successfullySentContactInfo() {
    successMessage[0].classList.add("success-text-visible");
    successMessage[1].classList.add("success-text-visible");
    contactForm.reset();
    contactMessage.value="";
    setTimeout(() => {
        successMessage[0].classList.remove("success-text-visible");
        successMessage[1].classList.remove("success-text-visible");
    }, 5000)
}