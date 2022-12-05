import { Notify } from 'notiflix';
import '../node_modules/modern-normalize/modern-normalize.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import './css/lightbox.css';
import {createLightBox} from './js/createLightBox'
import { fetchImage } from './js/fetchImage';
import { refs } from './js/refferense';
import { render } from './js/render';
let _page = 1;
let _per_page = 40;
let query = '';
let items = [];
refs.form.addEventListener('submit', handleSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const  searchQuery  = form.elements.searchQuery.value.trim();
  if (searchQuery==="") return
  if (searchQuery !== query) {
    refs.gallery.innerHTML = '';
    query = searchQuery;
    _page = 1;
    form.reset();
  }
  fetchImage(query, _page, _per_page)
    .then(data => {
      items = [...data.hits];
      render(items);
      return data;
    })
    .then(data => Notify.success(`Hooray! We found ${data.totalHits} images.`))
    .then(createLightBox);
}

function onLoadMore(e) {
  _page += 1;
  fetchImage(query, _page, _per_page)
    .then(data => render(data.hits))
    .then(() => {
      createLightBox;
      createLightBox().refresh();
    });
}



