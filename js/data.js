// модуль, который создаёт данные.
import {getRandomInteger, getRandomArrayElement} from './util.js';

const RANDOM_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const RANDOM_NAMES = [
  'Никита',
  'Юлия',
  'Паха',
  'Дмитрий',
  'Таньяна',
  'Валерий',
  'Валентина',
];
const RANDOM_DESCRIPTIONS = [
  'фотография красивая',
  'фотография необычная',
  'фотография яркая',
  'фотография живая',
  'фотография солнечная',
  'фотография насыщенная',
];

const avatarNamesValidation = {min: 1, max: 6};
const numberLikesValidation = {min: 15, max: 200};
const numberCommentsValidation = {min: 2, max: 15};
const PHOTO_AMOUNT = 25;

const getUniquePhotoInfo = function (item, index) {
  const id = index + 1;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(RANDOM_DESCRIPTIONS),
    likes: getRandomInteger(numberLikesValidation.min, numberLikesValidation.max),
    comments: Array.from({ length: getRandomInteger(numberCommentsValidation) }, (value, commentIndex) => commentIndex).map(() => ({
      id: _.uniqueId(),
      avatar: `img/avatar-${getRandomInteger(avatarNamesValidation.min, avatarNamesValidation.max)}.svg`,
      message: getRandomArrayElement(RANDOM_MESSAGES),
      name: getRandomArrayElement(RANDOM_NAMES),
    }),
    ),
  };
};

// eslint-disable-next-line no-unused-vars
const getPhotosInfos = () => Array.from({ length: PHOTO_AMOUNT }, (value, index) => index).map(getUniquePhotoInfo);

export {getPhotosInfos};
