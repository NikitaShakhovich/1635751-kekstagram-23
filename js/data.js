// модуль, который создаёт данные.
import {RANDOM_DESCRIPTIONS, RANDOM_NAMES, RANDOM_MESSAGES, GENERATED_QUANTITY_OBJECTS, AvatarNamesValidation, NumberLikesValidation} from './constants.js';
import {getRandomInteger, getRandomArrayElement} from './util.js';
const getUniquePhotoInfo = function (item, index) {
  const ID = index + 1;
  return {
    id: ID,
    url: `photos/${ID}.jpg`,
    description: getRandomArrayElement(RANDOM_DESCRIPTIONS),
    likes: getRandomInteger(NumberLikesValidation.MIN, NumberLikesValidation.MAX),
    comments: [
      {
        id: _.uniqueId(),
        avatar: `img/avatar-${getRandomInteger(AvatarNamesValidation.MIN, AvatarNamesValidation.MAX)}.svg`,
        message: getRandomArrayElement(RANDOM_MESSAGES),
        name: getRandomArrayElement(RANDOM_NAMES),
      },
    ],
  };
};
// eslint-disable-next-line no-unused-vars
const photosInfosNew = Array.from('o'.repeat(GENERATED_QUANTITY_OBJECTS)).map(getUniquePhotoInfo);
