import { Notify } from 'notiflix';
import '../node_modules/modern-normalize/modern-normalize.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import './css/lightbox.css';
import SimpleLightbox from 'simplelightbox';
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
  const { value } = form.elements.searchQuery;
  if (value !== query) {
    refs.gallery.innerHTML = '';
    query = value;
    _page = 1;
    form.reset();
  }
  fetchImage(query, _page, _per_page)
    .then(data => {
      items = [...data.hits];
      render(items);
      return data;
    })
    .then(data => Notify.success(`Hooray! We found ${data.totalHits} images.`));
}

function onLoadMore(e) {
  console.log(e.target);
  _page += 1;
  fetchImage(query, _page, _per_page).then(data => render(data.hits));
}



refs.gallery.addEventListener('click', e => {
  e.preventDefault();
  const lightbox = new SimpleLightbox('.gallery a');
  if (e.target.nodeName!=='IMG') return;
lightbox.on("shown.simplelightbox", function () {
  refs.body.classList.add("disable-scroll");
});
lightbox.on("closed.simplelightbox", function () {
  refs.body.classList.remove("disable-scroll");
});
});

