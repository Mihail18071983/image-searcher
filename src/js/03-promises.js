import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', onCreatePromiseStart);

function onCreatePromiseStart(e) {
  e.preventDefault();
  const step = Number(refs.form.elements.step.value);
  let delay = Number(refs.form.elements.delay.value);
  const amount = refs.form.elements.amount.value;
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  } 
}

function createPromise(position, delay) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  );
  return p;
}

