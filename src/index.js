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

const lightbox = new SimpleLightbox('.gallery a');

refs.gallery.addEventListener('click', e => {
  e.preventDefault();
  // console.log("target",e.target);
  // console.log('currentTarget', e.currentTarget);
  // console.log(e.target.nodeName)
//  if (e.target.nodeName==='IMG') {
//   lightbox.open();
//  }
lightbox.open();
});

// lightbox.on("shown.SimpleLightbox", function () {
//   refs.body.classList.add("disable-scroll");
// });
