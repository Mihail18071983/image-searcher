import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchQueary: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};


let formValue = '';

refs.searchQueary.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();
  formValue = refs.searchQueary.value.trim();
  if (formValue === '') return;
  fetchCountries(formValue)
    .then(countries => {
      console.log(countries);
      if (countries.length>1 && countries.length<=10) {
        renderCountryTitle(countries);
      }
      else if (countries.length > 10) {
        Notify.info(
          'Too many mathces found. Please enter a more spesific name'
        );
      }
    })
    .catch(err=> {
        console.log(err);
      });
}


function renderCountryTitle (countries) {
  const markup = countries
    .map((country) => {
      return `<li class="country-item">
      <p class="country-flag"></p>
      <p class="country-name">${country.altSpellings[3]
      }</p>
    </li>`;
    })
    .join("");
  refs.countryList.insertAdjacentHTML('beforeend', markup);

}