// // https://learn.javascript.ru/task/random-int-min-max
//
// function randomInteger(min, max) {
//
//   const rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
//
// alert( randomInteger(1, 3) );
//
// const checkCommentLength = (comment, maxLenght) => (comment.lenght <= maxLenght);
// checkCommentLength('nikita', 140);

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

const AvatarNameValue = {MIN: 1, MAX: 6};
const NumberLikesValue = {MIN: 15, MAX: 200};
const GENERATED_QUANTITY_OBJECTS = 25;


function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getRandomArrayElement = (arr) => arr[_.random(0, arr.length -1)];

const getUniquePhotoInfo = function (item, index) {
  const INDEX = index + 1;
  return {
    id: INDEX,
    url: `photos/${INDEX}.jpg`,
    description: getRandomArrayElement(RANDOM_DESCRIPTIONS),
    likes: getRandomInteger(NumberLikesValue.MIN, NumberLikesValue.MAX),
    comments: [
      {
        id: _.shuffle(_.range(1,1001))[0],
        avatar: `img/avatar-${getRandomInteger(AvatarNameValue.MIN, AvatarNameValue.MAX)}.svg`,
        message: getRandomArrayElement(RANDOM_MESSAGES),
        name: getRandomArrayElement(RANDOM_NAMES),
      },
    ],
  };
};
// eslint-disable-next-line no-unused-vars
const photoInfosNew = Array.from('o'.repeat(GENERATED_QUANTITY_OBJECTS)).map(getUniquePhotoInfo);
