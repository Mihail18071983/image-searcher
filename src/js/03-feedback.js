const refs = {
    form: document.querySelector('.feedback-form'),
}

const LOCALSTORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('input', onInputForm);

function onInputForm(e) {
    e.preventDefault();
    console.log(e.target.name);
   

    // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(elements));

}