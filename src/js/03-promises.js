const refs = {
  form: document.querySelector('form'),
  sumbmitBtn: document.querySelector('button'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay)
  );
  // const shouldResolve = Math.random() > 0.3;
  // if (shouldResolve) {
  //   // Fulfill
  // } else {
  //   // Reject
  // }
}

createPromise()
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

refs.form.addEventListener('submit', onCreatePromiseStart);

function onCreatePromiseStart(e) {
  e.preventDefault();
  const firstDelay = refs.form.elements.delay.value;
  setTimeout(createPromise, firstDelay);
}
