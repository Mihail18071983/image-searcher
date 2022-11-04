
import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 'vimeo-player',
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});