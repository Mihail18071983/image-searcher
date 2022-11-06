import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const ifFrameRef = document.querySelector('#vimeo-player');
const player = new Player(ifFrameRef);

player.on('timeupdate', throttle(setWatchingTime, 1000));

function setWatchingTime(e) {
  console.log(e.seconds)
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const getContentOfLocalStorage = (
  localStorage.getItem('videoplayer-current-time') || 0
);

player.setCurrentTime(getContentOfLocalStorage);
