const refs = {
  form: document.querySelector('.feedback-form'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', onInputForm);

function onInputForm(e) {
  e.preventDefault();
  const message = refs.form.elements.message.value;
  const email = refs.form.elements.email.value;
  //   console.log('e.target', e.target);
  //   console.log('e.currentTarget', e.currentTarget);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ message, email }));
}

function updateOutput() {
    const outputTextcontent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
  return outputTextcontent;
}
console.log (updateOutput())
