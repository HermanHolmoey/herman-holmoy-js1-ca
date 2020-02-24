const submitForm = document.querySelector("form");

submitForm.addEventListener("submit", submitValue);

function submitValue(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (inputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    if (inputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    const emailInput = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");

    const emailValue = emailInput.value;

    if (inputLength(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validEmail(emailValue)) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    if (messageLength(messageValue)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

function inputLength(value) {
    const trimValue = value.trim();

    if (trimValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function messageLength(value) {
    const trimValue = value.trim();

    if (trimValue.length >= 10) {
        return true;
    } else {
        return false;
    }
}

function validEmail(email) {
    const emailReq = /\S+@\S+\.\S+/;
    const patternMatches = emailReq.test(email);
    return patternMatches;
}