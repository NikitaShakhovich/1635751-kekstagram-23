import {getPhotosInfos} from './data.js';

const blockPictures = document.querySelector('.pictures');
const blockPicturesFragment = document.createDocumentFragment();
const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const photosInfo = getPhotosInfos();

const getPhotoElements = (data, template) => data.map((photo, index) => {
  const {url, likes, comments} = photo;
  const pictureElement = template.cloneNode(true);
  pictureElement.setAttribute('data-index', index);
  pictureElement.querySelector('.picture__img').setAttribute('src', url);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return pictureElement;
});

const appendPhotoElements = (elements, fragmentBlock, targetBlock) => {
  elements.forEach((item) => {
    fragmentBlock.appendChild(item);
  });
  targetBlock.appendChild(fragmentBlock);
};

const photoElements = getPhotoElements(photosInfo, templatePicture);

appendPhotoElements(photoElements, blockPicturesFragment, blockPictures);
