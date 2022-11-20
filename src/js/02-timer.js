import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { options } from './options';
import { convertMs } from './convertMs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


 let timerID = null;

 const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] <= options.defaultDate
      ? (Notify.failure('Please choose a date in the future'),
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

let userDate = Date.parse(refs.input.value);
window.addEventListener('click', startTimer);

function startTimer(e) { 
  if (e.target.nodeName !== "BUTTON") return;
  Notify.success("The countdown has started");
  timerID = setInterval(countDownTimer, 1000);
  refs.button.disabled = true;
}

function countDownTimer() {
  const diff = userDate - Date.now();
  console.log(diff)
    if (diff <=1000) {
      clearInterval(timerID);
  }
  console.log(convertMs(diff));
  const { seconds, minutes, hours, days } = convertMs(diff);
  updateCountDownUI({ seconds, minutes, hours, days }); 
}



function updateCountDownUI({ seconds, minutes, hours, days }) {
  refs.secondsUi.textContent = seconds;
  refs.minutesUi.textContent = minutes;
  refs.hoursUi.textContent = hours;
  refs.daysUi.textContent = days;  
  
}