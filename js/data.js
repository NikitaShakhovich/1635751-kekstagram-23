// модуль, который создаёт данные.
import {RANDOM_DESCRIPTIONS, RANDOM_NAMES, RANDOM_MESSAGES, PHOTO_AMOUNT, avatarNamesValidation, numberLikesValidation} from './constants.js';
import {getRandomInteger, getRandomArrayElement} from './util.js';

const getUniquePhotoInfo = function (item, index) {
  const id = index + 1;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(RANDOM_DESCRIPTIONS),
    likes: getRandomInteger(numberLikesValidation.min, numberLikesValidation.max),
    comments: [
      {
        id: _.uniqueId(),
        avatar: `img/avatar-${getRandomInteger(avatarNamesValidation.min, avatarNamesValidation.max)}.svg`,
        message: getRandomArrayElement(RANDOM_MESSAGES),
        name: getRandomArrayElement(RANDOM_NAMES),
      },
    ],
  };
};

// eslint-disable-next-line no-unused-vars
const photosInfosNew = Array.from({ length: PHOTO_AMOUNT }, (value, index) => index).map(getUniquePhotoInfo);
