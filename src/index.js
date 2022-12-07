import { Notify } from 'notiflix';
import '../node_modules/modern-normalize/modern-normalize.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import './css/lightbox.css';
import SimpleLightbox from 'simplelightbox';
import { fetchImage } from './js/fetchImage';
import { refs } from './js/refferense';
import { render } from './js/render';
import { smoothScroll } from './js/smoothScroll';
import OnlyScroll from 'only-scrollbar';
let _page = 1;
let _per_page = 40;
let query = '';
refs.form.addEventListener('submit', handleSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.loadMoreBtn.disabled = true;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.searchQuery.value.trim();
  if (searchQuery === '') return;
  if (searchQuery !== query) {
    refs.gallery.innerHTML = '';
    query = searchQuery;
    _page = 1;
    form.reset();
  }

  await fetchImage(query, _page, _per_page)
    .then(data => {
      render(data.hits);
      console.log(data);
      return data;
    })
    .then(data => {
      if (data.hits.lenght !== 0) {
        smoothScroll();
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
      }
    })
    .catch(err => err.message);

  await lightbox.refresh();
  await lightbox.on('shown.simplelightbox', function () {
    refs.body.classList.add('disable-scroll');
  });
  await lightbox.on('closed.simplelightbox', function () {
    refs.body.classList.remove('disable-scroll');
  });
}

async function onLoadMore() {
  _page += 1;
  await fetchImage(query, _page, _per_page).then(data => render(data.hits));
  await lightbox.refresh();
  await lightbox.on('shown.simplelightbox', function () {
    refs.body.classList.add('disable-scroll');
  });
  await lightbox.on('closed.simplelightbox', function () {
    refs.body.classList.remove('disable-scroll');
  });

  await smoothScroll();
}

// const scroll = new OnlyScroll(refs.gallery);
