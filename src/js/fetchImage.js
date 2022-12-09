const { default: axios } = require('axios');
import { searchParams } from './searchParams';

const BASE_URL = 'https://pixabay.com/api/';
const KEY_SUCSESS = '30821762-b8f2171742f26b4a3279c46a9';

export  async function fetchImage(query, page, per_page) {
  const { data } = await axios.get(
    `${BASE_URL}?key=${KEY_SUCSESS}&q=${query}&page=${page}&per_page=${per_page}`,
    searchParams
  );
  return data;
}
