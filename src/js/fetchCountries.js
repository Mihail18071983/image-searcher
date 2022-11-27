import { Notify } from 'notiflix';

export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then((response) => {
      if (!response.ok) {
        Notify.failure('Oops, there is no country with that name');
        // throw new Error(response.status);
      }
      return response.json();
    }
  );
}
