import {closeFullSizeModal, openFullSizeModal} from './big-picture.js';
import {isEscEvent} from './util.js';
import {blockPictures, photosInfo} from './miniatures.js';
import {setDefaultValue, inputHashtagsElement, inputDescription} from './form.js';

const uploadCloseBtn = document.querySelector('.img-upload__cancel');
const inputUpload = document.querySelector('.img-upload__input');
const imgEditFormElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const fullSizeCloseBtn = document.querySelector('.big-picture__cancel');

const closeImgEditModal = () => {
  imgEditFormElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

blockPictures.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');
  if (pictureElement) {
    const pictureIndex = pictureElement.dataset.index;
    evt.preventDefault();
    openFullSizeModal(photosInfo[pictureIndex]);
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFullSizeModal();
  }

  if (inputHashtagsElement === document.activeElement || inputDescription === document.activeElement) {
    return evt;
  } else if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImgEditModal();
  }
});

inputUpload.addEventListener('click', (evt) => {
  evt.preventDefault();
  imgEditFormElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  //defaulтные значения на стартовом эффекте в форм.js
  setDefaultValue();
});

uploadCloseBtn.addEventListener('click', closeImgEditModal);

fullSizeCloseBtn.addEventListener('click', closeFullSizeModal);
