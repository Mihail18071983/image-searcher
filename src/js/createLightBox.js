import SimpleLightbox from 'simplelightbox';
import {refs} from './refferense'
export async function createLightBox() {
    const lightbox =  await new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      scrollZoom: false,
    });
    await lightbox.on('shown.simplelightbox', function () {
      refs.body.classList.add('disable-scroll');
    });
    await lightbox.on('closed.simplelightbox', function () {
      refs.body.classList.remove('disable-scroll');
    });
    return lightbox;
  }