import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convertMs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let timerID = null;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] <= options.defaultDate
      ? (Notify.info('Please choose a date in the future'),
        (refs.button.disabled = true))
      : (refs.button.disabled = false);
    userDate = selectedDates[0];
  },
};

const fkatpicr = flatpickr('#datetime-picker', options);

export const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('[data-start]'),
  secondsUi: document.querySelector('[data-seconds]'),
  minutesUi: document.querySelector('[data-minutes]'),
  hoursUi: document.querySelector('[data-hours]'),
  daysUi: document.querySelector('[data-days]'),
};

window.addEventListener('click', startTimer);

function startTimer(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  timerID = setInterval(countDownTimer, 1000);
  refs.button.disabled = true;
  refs.input.disabled = true;
}

function countDownTimer() {
  userDate = Date.parse(refs.input.value);
  const diff = userDate - Date.now();
  let { days, hours, minutes, seconds } = getTimeComponents(diff);
  if (userDate <= Date.now()) {
    Notify.info('Please, choose date in future');
    clearInterval(timerID);
    refs.input.disabled = false;
  }
  if (diff <= 1000) {
    clearInterval(timerID);
    seconds = getTimeComponents(0).seconds;
    minutes = getTimeComponents(0).minutes;
    hours = getTimeComponents(0).hours;
    days = getTimeComponents(0).days;
    refs.input.disabled = false;
  }
  updateCountDownUI({ seconds, minutes, hours, days });
}

function getTimeComponents(time) {
  return convertMs(time);
}

function updateCountDownUI({ seconds, minutes, hours, days }) {
  refs.secondsUi.textContent = seconds;
  refs.minutesUi.textContent = minutes;
  refs.hoursUi.textContent = hours;
  refs.daysUi.textContent = days;
}
