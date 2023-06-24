import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  
  let delay = Number(evt.target.delay.value);
  const step = Number(evt.target.step.value);
  const amount = Number(evt.target.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
        delay += step;
      });
  }
}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  });
}




