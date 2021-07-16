import {closeFullsize, openFullSize} from './toggle-fullsize.js';
import {isEscEvent} from './util.js';
import {fillData} from './fill-data.js';
import {photosInfo} from './miniatures.js';

const cancelButton = document.querySelector('.big-picture__cancel');

window.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    const pictureElement = evt.target.closest('.picture');
    const pictureIndex = pictureElement.dataset.index;
    evt.preventDefault();
    openFullSize();
    fillData(photosInfo[pictureIndex]);
  }
});

window.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFullsize();
  }
});

cancelButton.addEventListener('click', closeFullsize);
