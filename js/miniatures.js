import {getPhotosInfos} from './data.js';

export const blockPictures = document.querySelector('.pictures');
const blockPicturesFragment = document.createDocumentFragment();

export const photosInfo = getPhotosInfos();

const getPhotoElements = (data) => {
  const templatePicture = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  return data.map((photo, index) => {
    const {url, likes, comments} = photo;
    const pictureElement = templatePicture.cloneNode(true);
    const imgPictureElement = pictureElement.querySelector('.picture__img');
    const likesPictureElement = pictureElement.querySelector('.picture__likes');
    const commentsPictureElement = pictureElement.querySelector('.picture__comments');
    pictureElement.setAttribute('data-index', index);
    imgPictureElement.setAttribute('src', url);
    likesPictureElement.textContent = likes;
    commentsPictureElement.textContent = comments.length;
    return pictureElement;
  });
};

const appendPhotoElements = (elements) => {
  elements.forEach((item) => {
    blockPicturesFragment.appendChild(item);
  });
  blockPictures.appendChild(blockPicturesFragment);
};

const photoElements = getPhotoElements(photosInfo);

appendPhotoElements(photoElements);
