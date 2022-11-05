import Player from '@vimeo/player';

const ifFrameRef = document.querySelector('#vimeo-player');
const player = new Player(ifFrameRef);
// const player = new Player('vimeo-player', {
//   id: 19231868,
//   width: 640,
// });

player.on('timeupdate', onTimeUpdate);

function onTimeUpdate(e) {
  e.preventDefault();
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
  
    // console.log(e);
}

const getContentOfLocalStorage = JSON.parse(localStorage.getItem('videoplayer-current-time'));
// console.log(getContentOfLocalStorage);

// sessionStorage.setItem("is_reloaded", true);

// if (sessionStorage.getItem("is_reloaded")) {
//   console.log('Страница перезагружена'); 
// }

 player.setCurrentTime(getContentOfLocalStorage.seconds)

