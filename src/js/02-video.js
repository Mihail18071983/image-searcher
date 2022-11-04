
import Player from '@vimeo/player';


const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});