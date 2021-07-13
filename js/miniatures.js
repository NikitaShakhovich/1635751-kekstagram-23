import {getPhotosInfosNew} from './data.js';

const blockPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photosInfo = getPhotosInfosNew();

const blockPicturesFragment = document.createDocumentFragment();

photosInfo.forEach((photo) => {
  const {url, likes, comments} = photo;
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.setAttribute('src', url);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  blockPicturesFragment.appendChild(pictureElement);
});

blockPictures.appendChild(blockPicturesFragment);
