import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const options = {
  id: 59777392,
  width: 640,
  loop: true,
};
