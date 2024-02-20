const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const occupation = document.getElementById('occupation');
const pactives = document.getElementById('pactives');
const ftype = document.getElementById('ftype');
const time = document.getElementById('time');
const gend = document.getElementById('gender');
const gender_male = document.getElementById('gender_male');
const gender_female = document.getElementById('gender_female');

// Display error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'input-box error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Display success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-box success';
}

// Display registration success message and reset form
function showRegistrationSuccess() {
    // You can replace this alert with your preferred way of displaying the success message
    alert('Registration Successful!');
    form.reset(); // Reset the form to clear input fields
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    if (username.value === '') {
        showError(username, 'Name is required!');
        isValid = false;
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required!');
        isValid = false;
    } else {
        showSuccess(email);
    }

    if (age.value === '') {
        showError(age, 'Age is required!');
        isValid = false;
    } else {
        showSuccess(age);
    }

    if (pactives.value === '') {
        showError(pactives, 'Favourite movie category is required!');
        isValid = false;
    } else {
        showSuccess(pactives);
    }

    if (!(gender_male.checked || gender_female.checked)) {
        showError(gend, 'Gender is required!');
        isValid = false;
    } else {
        showSuccess(gend);
    }

    if (isValid) {
        showRegistrationSuccess();
    }
});