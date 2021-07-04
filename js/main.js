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

const AvatarName = {MIN: 1, MAX: 6};
const RandomLike = {MIN: 15, MAX: 200};
const GENERATED_QUANTITY_OBJECTS = 25;


function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getRandomArrayElement = (element) => element[_.random(0, element.length -1)];

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

