// модуль, который создаёт данные.
import {RANDOM_DESCRIPTIONS, RANDOM_NAMES, RANDOM_MESSAGES, GENERATED_QUANTITY_OBJECTS, AvatarName, RandomLike} from './constants.js';
import {randomInteger, getRandomArrayElement} from './util.js';
const getUniquePhotoInfo = function (item, index) {
  const RANDOM_NUMBER = index + 1;
  return {
    id: RANDOM_NUMBER,
    url: `photos/${RANDOM_NUMBER}.jpg`,
    description: getRandomArrayElement (RANDOM_DESCRIPTIONS),
    likes: randomInteger (RandomLike.MIN, RandomLike.MAX),
    comments: [
      {
        id: _.shuffle(_.range(1,1001))[0],
        avatar: `img/avatar-${randomInteger (AvatarName.MIN, AvatarName.MAX)}.svg`,
        message: getRandomArrayElement (RANDOM_MESSAGES),
        name: getRandomArrayElement (RANDOM_NAMES),
      },
    ],
  };
};

// eslint-disable-next-line no-unused-vars
const photoInfosNew = new Array(GENERATED_QUANTITY_OBJECTS).fill('').map(getUniquePhotoInfo);
console.log(photoInfosNew);
