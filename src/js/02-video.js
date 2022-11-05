import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

// player.on('play', function () {
//   console.log('played the video!');
// });

player.on('timeupdate', onTimeUpdate);

function onTimeUpdate(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
  e.preventDefault();
    console.log(e);
}

const getContentOfLocalStorage = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log(getContentOfLocalStorage);

sessionStorage.setItem("is_reloaded", true);

if (sessionStorage.getItem("is_reloaded")) {
  console.log('Страница перезагружена'); 
}

 player.setCurrentTime(getContentOfLocalStorage.seconds).then(function(seconds) {
   seconds = getContentOfLocalStorage.seconds;
   console.log(seconds);
}).catch(function(error) {
    switch (error.name) {
      case 'RangeError':
        (seconds<0 || seconds>getContentOfLocalStorage.duration)
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

