const closeFullsize = () => {
  // 1. Скрыть окно
  // 2. Удалить обработчики для закрытия
  // 3. Прочая логика
  const bigPicture = document.querySelector('.big-picture');
  const commentCounter = bigPicture.querySelector('.social__comment-count');
  const loaderCounter = bigPicture.querySelector('.comments-loader');
  const bodyElement = document.querySelector('body');

  bigPicture.classList.add('hidden');
  commentCounter.classList.remove('hidden');
  loaderCounter.classList.remove('hidden');
  bodyElement.classList.remove('modal-open');
};

const openFullSize = () => {
  const bigPicture = document.querySelector('.big-picture');
  const commentCounter = bigPicture.querySelector('.social__comment-count');
  const loaderCounter = bigPicture.querySelector('.comments-loader');
  const bodyElement = document.querySelector('body');

  bigPicture.classList.remove('hidden');
  commentCounter.classList.add('hidden');
  loaderCounter.classList.add('hidden');
  bodyElement.classList.add('modal-open');
};

export {openFullSize, closeFullsize};
