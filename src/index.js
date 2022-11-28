import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 1000;

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
      if (countries.length===1) {
        renderCountryTitle(countries);
        renderCountryInfo(countries);
      }
      else if (countries.length > 1 && countries.length <= 10) {
        renderCountryTitle(countries);
      } else {
        Notify.info(
          'Too many mathces found. Please enter a more spesific name'
        );
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function renderCountryTitle(countries) {
  const markup = countries
    .map(country => {
      return `<li class="country-item">
      <img src="${country.flags.svg}" alt="flag">
      <p class="country-name">${country.name.official}</p>
    </li>`;
    })
    .join('');
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

function renderCountryInfo(countries) {
  const arrLanguages=[];
 
  const markup = countries
    .map(country => {
      for (const language of country.languages.values()) {
        console.log(language)
        arrLanguages.push(language)
  }
  const arrLanguagesStr=arrLanguages.join('');
      return `<p class="info-text">Capital: <span class="value">${country.capital}</span></p>
      <p class="info-text">Population: <span class="value">${country.population
      }</span></p>
      <p class="info-text">languages <span class="value">${arrLanguagesStr
      }</span></p>`;
    })
    .join('');
  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
}