const { default: axios } = require('axios');
import { Notify } from 'notiflix';
import { searchParams } from './searchParans';
import { refs } from './refferense';

const BASE_URL = 'https://pixabay.com/api/';
const KEY_SUCSESS = '30821762-b8f2171742f26b4a3279c46a9';

export  async function fetchImage(query, page, per_page) {
  const { data } = await axios.get(
    `${BASE_URL}?key=${KEY_SUCSESS}&q=${query}&page=${page}&per_page=${per_page}`,
    searchParams
  );

  const totalPage = data.totalHits / per_page;
  if (data.hits.length === 0) {
    Notify.info(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  if (page > totalPage && totalPage!==0) {
    Notify.info("We're sorry, but you've reached the end of search results.");
    refs.loadMoreBtn.disabled = true;
    return;
  }
  console.log(data)
  return data;
}
