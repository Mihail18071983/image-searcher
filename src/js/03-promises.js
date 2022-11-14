const refs = {
  form: document.querySelector('form'),
  sumbmitBtn: document.querySelector('button'),
};

refs.form.addEventListener('submit', onCreatePromiseStart);

function onCreatePromiseStart(e) {
  e.preventDefault();
  const step = Number(refs.form.elements.step.value);
  let delay = Number(refs.form.elements.delay.value);
  const amount = refs.form.elements.amount.value;
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay}) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay +=step;
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

// (createPromise(2,1500))

// createPromise(2,1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
