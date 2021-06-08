// https://learn.javascript.ru/task/random-int-min-max

function randomInteger(min, max) {

  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );

const checkCommentLength = (comment, maxLenght) => (comment.lenght <= maxLenght);
checkCommentLength('nikita', 140);
