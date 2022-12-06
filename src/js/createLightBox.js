import SimpleLightbox from 'simplelightbox';
import {refs} from './refferense'
export async function createLightBox() {
    const lightbox =   new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      scrollZoom: false,
    });
    return lightbox;
  }