//нахожу шаблон для комметария
const commentPhoto = document.querySelector('#comments')
  .content
  .querySelector('.social__comment');
const bigPicture = document.querySelector('.big-picture');
const blockCommentFragment = document.createDocumentFragment();
const bodyElement = document.querySelector('body');
const commentCounter = bigPicture.querySelector('.social__comment-count');
const blockComments = bigPicture.querySelector('.social__comments');
const loaderCounter = bigPicture.querySelector('.comments-loader');
const descriptionPhotoElement = bigPicture.querySelector('.social__caption');
const bigPictureElement= bigPicture.querySelector('.big-picture__img img');
const likesCounterElement = bigPicture.querySelector('.likes-count');
const countCommentsElement = bigPicture.querySelector('.comments-count');

// прохожу по массиву комметариев пример: [{avatar: 'green', name: 'Жакуй Грин', message: 'Я - Жакуй гРИН пройдоха'}];
const createCommentElement = (dataComment) => dataComment.map((value) => {
  // диструкторизация. вытягиваю из элемента массива нужные мне переменные для того чтобы записать их в нужные места;
  const {avatar, name, message} = value;
  // делаю копию шаблона;
  const commentElement = commentPhoto.cloneNode(true);
  // нахожу теги для вставок;
  const commentatorAvatar = commentElement.querySelector('.social__picture');
  const commentatorName = commentElement.querySelector('.social__picture');
  const commentatorMessage = commentElement.querySelector('.social__text');
  // добавляю вставки;
  commentatorAvatar.setAttribute('src', avatar);
  commentatorName.setAttribute('alt', name);
  commentatorMessage.textContent = message;
  // возвращаю DOM элемент с заполненными данными;
  return commentElement;
});

const openFullSizeModal = (data) => {
  bigPicture.classList.remove('hidden');
  commentCounter.classList.add('hidden');
  loaderCounter.classList.add('hidden');
  bodyElement.classList.add('modal-open');

  // добавляю вставки;
  descriptionPhotoElement.textContent = data.description;
  bigPictureElement.setAttribute('src', data.url);
  likesCounterElement.textContent = data.likes;
  countCommentsElement.textContent = data.comments.length;
  // тут лежит возвращенным массив дом элементов
  const newCommentElement = createCommentElement(data.comments);
  // проходим по массиву фоичем при каждой итерации добавляя итем

  newCommentElement.forEach((item) => {
    // добавляем в изолированный блокфрагмент значения
    blockCommentFragment.appendChild(item);
  });
  // добавляем мз блокфрагмента в индекс
  blockComments.appendChild(blockCommentFragment);
};

const closeFullSizeModal = () => {
  bigPicture.classList.add('hidden');
  commentCounter.classList.remove('hidden');
  loaderCounter.classList.remove('hidden');
  bodyElement.classList.remove('modal-open');
};

export {closeFullSizeModal, openFullSizeModal};
