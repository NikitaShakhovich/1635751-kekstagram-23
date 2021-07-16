// модуль с вспомогательными функциями;

// случайное положительное число
// https://learn.javascript.ru/task/random-int-min-max
function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// случайный элемент из массива
const getRandomArrayElement = (arr) => arr[_.random(0, arr.length -1)];

// проверка длины комментария
// eslint-disable-next-line no-unused-vars
const checkCommentLength = (comment, maxLength) => (comment.length <= maxLength);

//проверка нажатой клавиши esc
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getRandomInteger, getRandomArrayElement, isEscEvent};
