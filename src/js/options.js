import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './02-timer';
let userDate = null;

export const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] <= this.defaultDate
      ? (Notify.failure('Please choose a date in the future'),
        (refs.button.disabled = true))
      : (Notify.success('The countdown has started'),
        (refs.button.disabled = false));
    userDate = selectedDates[0];
  },
};
