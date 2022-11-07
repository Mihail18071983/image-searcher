const throttle = require("lodash.throttle");

const refs = {
  form: document.querySelector('.feedback-form'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input',throttle(onInputForm,500));
refs.form.addEventListener('submit', onSubmitForm);
window.addEventListener('load', updateOutputOnload);

function onInputForm(e) {
  e.preventDefault();
  const message = refs.form.elements.message.value;
  const email = refs.form.elements.email.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ message, email }));
  
}

function updateOutputOnload(e) {
  e.preventDefault();
  const outputTextContent = localStorage.getItem(LOCALSTORAGE_KEY);
  const outputObjectContent = JSON.parse(outputTextContent)||{email:"", message:""};
  const { email, message } = outputObjectContent;
  refs.form.elements.email.value = email;
  refs.form.elements.message.value = message;
}

function onSubmitForm(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  console.log({email:email.value, message:message.value})
  localStorage.clear();
  refs.form.reset();
}
