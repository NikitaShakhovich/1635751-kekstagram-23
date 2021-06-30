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

const RANDOM_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const RANDOM_NAME = [
  'Никита',
  'Юлия',
  'Паха',
  'Дмитрий',
  'Таньяна',
  'Валерий',
  'Валентина',
];

const RANDOM_DESCRIPTION = [
  'фотография красивая',
  'фотография необычная',
  'фотография яркая',
  'фотография живая',
  'фотография солнечная',
  'фотография насыщенная',
];

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
randomInteger (1, 25);

const getRandomArrayElement = (element) => element[_.random(0, element.length -1)];

const getUniquePhotoInfo = function (item, index) {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomArrayElement (RANDOM_DESCRIPTION),
    likes: randomInteger (15, 200),
    comments: [
      {
        id: _.shuffle(_.range(1,1001))[0],
        avatar: `img/avatar-${randomInteger (1, 6)}.svg`,
        message: getRandomArrayElement (RANDOM_MESSAGE),
        name: getRandomArrayElement (RANDOM_NAME),
      },
    ],
  };
};
const photoInfosNew = new Array(25).fill('').map(getUniquePhotoInfo);

console.log(photoInfosNew);
