import {closeFullSizeModal, openFullSizeModal} from './open-close-modal.js';
import {isEscEvent} from './util.js';
import {blockPictures, photosInfo} from './miniatures.js';
import {sliderEffect, photoUploadPreview, scaleValueElement, idEffectNone, inputHashtagsElement, inputDescription} from './form.js';

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
  //блокирует слайдер на стартовом эфекте в форм.js
  sliderEffect.noUiSlider.set(1);
  sliderEffect.setAttribute('disabled', true);
  idEffectNone.checked = 'true';
  photoUploadPreview.removeAttribute('style');
  scaleValueElement.value = '100%';
  photoUploadPreview.setAttribute('class', 'img-upload__preview');
  photoUploadPreview.classList.add('effects__preview--none');
});

uploadCloseBtn.addEventListener('click', closeImgEditModal);

fullSizeCloseBtn.addEventListener('click', closeFullSizeModal);
