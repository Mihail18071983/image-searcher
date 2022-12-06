import SimpleLightbox from 'simplelightbox';
export async function createLightBox() {
    return   new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      scrollZoom: false,
    });
    
  }