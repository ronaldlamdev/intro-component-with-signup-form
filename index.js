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

// email validation

const isValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});


// error and success functions

const errorFirstNameInput = () => {
  errorIconFirstName.style.display = 'block';
  errorMessageFirstName.style.display = 'block';
  firstName.style.border = "1px solid hsl(0, 100%, 74%)";
};

const successFirstNameInput = () => {
  firstName.style.border = "1px solid #38CC8C";
}

const errorLastNameInput = () => {
  errorIconLastName.style.display = 'block';
  errorMessageLastName.style.display = 'block';
  lastName.style.border = "1px solid hsl(0, 100%, 74%)";
}

const successLastNameInput = () => {
  lastName.style.border = "1px solid #38CC8C";
}

const errorEmailInput = () => {
  errorIconEmail.style.display = 'block';
  errorMessageEmail.style.display = 'block';
  email.style.border = "1px solid hsl(0, 100%, 74%)";
}

const successEmailInput = () => {
  email.style.border = "1px solid #38CC8C";
}

const errorPasswordInput = () => {
  errorIconPassword.style.display = 'block';
  errorMessagePassword.style.display = 'block';
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

  let value = email.value;
  if (value === "" || !isValid(value)) {
    errorEmailInput();
  }
  else {
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
  errorIconFirstName.style.display = 'none';
  errorMessageFirstName.style.display = 'none';
  firstName.style.border = '1px solid hsl(243, 34%, 61%)';
});

lastName.addEventListener('click', () => {
  errorIconLastName.style.display = 'none';
  errorMessageLastName.style.display = 'none';
  lastName.style.border = '1px solid hsl(243, 34%, 61%)';
});

email.addEventListener('click', () => {
  errorIconEmail.style.display = 'none';
  errorMessageEmail.style.display = 'none';
  email.style.border = '1px solid hsl(243, 34%, 61%)';
});

password.addEventListener('click', () => {
  errorIconPassword.style.display = 'none';
  errorMessagePassword.style.display = 'none';
  password.style.border = '1px solid hsl(243, 34%, 61%)';
});
