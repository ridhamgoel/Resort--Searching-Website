var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email1");
var phoneNumber = document.getElementById("phoneNumber");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var msg = document.querySelector("small");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        showError(username, "Username can not be blank");
    } else if (!isUsernameValid(usernameValue)) {
        showError(username, "Username is not valid");
    } else {
        showSuccess(username);
    }

    const emailValue = email.value.trim();
    if (emailValue === '') {
        showError(email, "Email can not be blank");
    } else if (!isEmailValid(emailValue)) {
        showError(email, "Email id is not valid");
    } else {
        showSuccess(email);
    }

    const phoneNumberValue = phoneNumber.value.trim();
    if (phoneNumberValue === '') {
        showError(phoneNumber, "Phone Number can not be blank");
    } else if (!isPhoneValid(phoneNumberValue)) {
        showError(phoneNumber, "Phone Number is not valid");
    } else {
        showSuccess(phoneNumber);
    }

    const subjectValue = subject.value.trim();
    if (subjectValue == '') {
        showError(subject, "Subject can not be blank");
    } else {
        showSuccess(subject);
    }

    const messageValue = message.value.trim();
    if (messageValue == '') {
        showError(message, "Message can not be blank");
    } else {
        showSuccess(message);
    }

}




function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = "form-data error";
    const small = formControl.querySelector("small")
    small.innerHTML = msg

}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = "form-data success";
}

function isEmailValid(email) {
    return /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username) {
    return /^([a-z0-9]+)$/.test(username);
}

function isPhoneValid(phoneNumber) {
    var no = Number(phoneNumber);
    return /^[7689]\d{9}$/.test(no);
}