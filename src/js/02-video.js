import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', onTimeUpdate);

function onTimeUpdate() {
  localStorage.setItem('videoplayer-current-time', JSON.stringify({
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
  }));
}
