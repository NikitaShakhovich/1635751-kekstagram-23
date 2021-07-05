// модуль с вспомогательными функциями;

// случайное положительное число
// https://learn.javascript.ru/task/random-int-min-max
const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// случайный элемент из массива
const getRandomArrayElement = (element) => element[_.random(0, element.length -1)];

// проверка длины комментария
// eslint-disable-next-line no-unused-vars
const checkCommentLength = (comment, maxLength) => (comment.length <= maxLength);

export {randomInteger, getRandomArrayElement};
