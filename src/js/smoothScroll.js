import {refs} from "./refferense"
export async function smoothScroll() {
  const { height: cardHeight } = refs.gallery
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
