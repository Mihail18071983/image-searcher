const throttle = require('lodash.throttle');

export const smoothLinks = document.querySelectorAll('a[href^="#"]');
export const scrollBtn = document.querySelector('.scroll-up-btn');


scrollBtn.classList.add('js-hidden');
window.addEventListener('scroll', throttle(onScroll, 500));

export function onScroll() {
  if (window.scrollY > 400) {
    scrollBtn.classList.remove('js-hidden');
  } else if (window.scrollY <= 400) {
    scrollBtn.classList.add('js-hidden');
  }
}

scrollBtn.addEventListener('click', onClick);

export function onClick() {
  window.scrollTo(0, 0);
  scrollBtn.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
