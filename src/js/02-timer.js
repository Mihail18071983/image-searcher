import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { options } from './options';
import { convertMs } from './convertMs';

const fkatpicr = flatpickr('#datetime-picker', options);
console.dir(fkatpicr)

export const refs = {
    input: document.querySelector('#datetime-picker'),
    button: document.querySelector('[data-start]'),
    seconds: document.querySelector('[data-seconds]'),
    minutes: document.querySelector('[data-minutes]'),
    hours: document.querySelector('[data-hours]'),
    days:document.querySelector('[data-days]')
}

console.dir(options)
const currentDate = Date.now();
console.log(currentDate);



