const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.body,
};
let intervalID = null;

refs.btnStart.addEventListener('click', startChangeBodyColor);
refs.btnStop.addEventListener('click', stopChangeBodyColor);
refs.btnStop.disabled = true;

function startChangeBodyColor(e) {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  intervalID = setInterval(setBodyColor, 1000);
}

function stopChangeBodyColor(e) {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(intervalID);
  intervalID = 0;
}

function setBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
