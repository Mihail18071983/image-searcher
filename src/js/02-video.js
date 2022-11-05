import Player from '@vimeo/player';

const ifFrameRef = document.querySelector('#vimeo-player');
const player = new Player(ifFrameRef);


player.on('timeupdate', onTimeUpdate);

function onTimeUpdate(e) {
  e.preventDefault();
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
  
}

const getContentOfLocalStorage = JSON.parse(localStorage.getItem('videoplayer-current-time'));
 player.setCurrentTime(getContentOfLocalStorage.seconds)

