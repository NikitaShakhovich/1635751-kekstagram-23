import {toggleFullSize} from './toggle-fullsize.js';
import {isEscEvent} from './util.js';
import {blockPictures, photosInfo} from './miniatures.js';

const cancelButton = document.querySelector('.big-picture__cancel');

blockPictures.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');
  if (pictureElement) {
    const pictureIndex = pictureElement.dataset.index;
    evt.preventDefault();
    toggleFullSize(photosInfo[pictureIndex]);
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    toggleFullSize();
  }
});

cancelButton.addEventListener('click', toggleFullSize);
