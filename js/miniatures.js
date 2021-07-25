import {getPhotosInfos} from './data.js';

export const blockPictures = document.querySelector('.pictures');
export const photosInfo = getPhotosInfos();

const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const appendPhoto = (photoData, index) => {
  // создать дом элемент и вставить в нужное место
  const {url, likes, comments} = photoData;
  const pictureElement = templatePicture.cloneNode(true);
  const imgPictureElement = pictureElement.querySelector('.picture__img');
  const likesPictureElement = pictureElement.querySelector('.picture__likes');
  const commentsPictureElement = pictureElement.querySelector('.picture__comments');
  pictureElement.setAttribute('data-index', index);
  imgPictureElement.setAttribute('src', url);
  likesPictureElement.textContent = likes;
  commentsPictureElement.textContent = comments.length;
  blockPictures.append(pictureElement);
};

const appendPhotoElements = (photosData) => {
  photosData.forEach((item, index) => {
    appendPhoto(item, index);
  });
};

appendPhotoElements(photosInfo);
