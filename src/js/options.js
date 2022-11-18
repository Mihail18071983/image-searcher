
let userDate = null;

export const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    userDate= Date.parse(selectedDates[0]);  
    return userDate
  },  
};

console.log(userDate)