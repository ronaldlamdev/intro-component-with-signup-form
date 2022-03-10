const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');

const errorIconFirstName = document.querySelector('.first-name-error-icon');
const errorIconLastName = document.querySelector('.last-name-error-icon');
const errorIconEmail = document.querySelector('.email-address-error-icon');
const errorIconPassword = document.querySelector('.password-error-icon');

const errorMessageFirstName = document.querySelector('.first-name-error-message');
const errorMessageLastName = document.querySelector('.last-name-error-message');
const errorMessageEmail = document.querySelector('.email-address-error-message');
const errorMessagePassword = document.querySelector('.password-error-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

// error and success functions

const errorFirstNameInput = () => {
  errorIconFirstName.style.visibility = 'visible';
  errorMessageFirstName.style.visibility = 'visible';
  firstName.style.border = "1px solid hsl(0, 100%, 74%)";
};

const successFirstNameInput = () => {
  firstName.style.border = "1px solid #38CC8C";
}

const errorLastNameInput = () => {
  errorIconLastName.style.visibility = 'visible';
  errorMessageLastName.style.visibility = 'visible';
  lastName.style.border = "1px solid hsl(0, 100%, 74%)";
}

const successLastNameInput = () => {
  lastName.style.border = "1px solid #38CC8C";
}

const errorEmailInput = () => {
  errorIconEmail.style.visibility = 'visible';
  errorMessageEmail.style.visibility = 'visible';
  email.style.border = "1px solid hsl(0, 100%, 74%)";
}

const successEmailInput = () => {
  email.style.border = "1px solid #38CC8C";
}

const errorPasswordInput = () => {
  errorIconPassword.style.visibility = 'visible';
  errorIconPassword.style.visibility = 'visible';
  password.style.border = "1px solid hsl(0, 100%, 74%)";
}

const successPasswordInput = () => {
  password.style.border = '1px solid #38CC8C';
}

// validation functions

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    errorFirstNameInput();
  } else {
    successFirstNameInput();
  }

  if (lastNameValue === '') {
    errorLastNameInput();
  } else {
    successLastNameInput();
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    errorEmailInput();
  } else {
    successEmailInput();
  }

  if (passwordValue === '') {
    errorPasswordInput();
  } else {
    successEmailInput();
  }
};

// removes style added by JS when input is selected

firstName.addEventListener('click', () => {
  errorIconFirstName.style.visibility = 'hidden';
  errorMessageFirstName.style.visibility = 'hidden';
  firstName.style.border = 'null';
});

lastName.addEventListener('click', () => {
  errorIconFirstName.style.visibility = 'hidden';
  errorMessageLastName.style.visibility = 'hidden';
  lastName.style.border = 'null';
});

email.addEventListener('click', () => {
  errorIconPassword.style.visibility = 'hidden';
  errorMessageEmail.style.visibility = 'hidden';
  password.style.border = 'null';
});

password.addEventListener('click', () => {
  errorIconPassword.style.visibility = 'hidden';
  errorMessagePassword.style.visibility = 'hidden';
  password.style.border = 'null';
});