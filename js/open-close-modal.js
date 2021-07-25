//нахожу шаблон для комметария
const commentPhoto = document.querySelector('#comments')
  .content
  .querySelector('.social__comment');
export const bigPicture = document.querySelector('.big-picture');
const blockCommentFragment = document.createDocumentFragment();
const bodyElement = document.querySelector('body');
const commentCounter = bigPicture.querySelector('.social__comment-count');
const loaderCounter = bigPicture.querySelector('.comments-loader');
const buttonCommentLoader = bigPicture.querySelector('.social__comments-loader');

const blockComments = bigPicture.querySelector('.social__comments');
const descriptionPhotoElement = bigPicture.querySelector('.social__caption');
const bigPictureElement= bigPicture.querySelector('.big-picture__img img');
const likesCounterElement = bigPicture.querySelector('.likes-count');
const countCommentsElement = bigPicture.querySelector('.comments-count');

// переменная для дубликата масива
let actualComments = [];
console.log('let-actualComments', actualComments);

// прохожу по массиву комметариев пример: [{avatar: 'green', name: 'Жакуй Грин', message: 'Я - Жакуй гРИН пройдоха'}];
const createCommentElements = (dataComment) => dataComment.map((value) => {
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

const uploadComments = () => {
  if (actualComments.length > 0) {
    // "открываю" загрузку комметариев
    loaderCounter.classList.remove('hidden');
    // передаю 5ть комментариев для отображения
    const visibleComments = actualComments.slice(0, 5);
    // создаю для 5ти комментариев DOM
    const newCommentElements = createCommentElements(visibleComments);

    // проходим по массиву фоичем при каждой итерации добавляя итем
    newCommentElements.forEach((item) => {
      // добавляем в изолированный блокфрагмент значения
      blockCommentFragment.appendChild(item);
    });
    // добавляем мз блокфрагмента в индекс
    blockComments.appendChild(blockCommentFragment);
    // удаляем из переменной 5ть выведенных комментариев
    actualComments.splice(0, 5);
    // счётчик комментариев blockComments.childElementCount - количество 'li'
    commentCounter.textContent = `${blockComments.childElementCount} из ${blockComments.childElementCount + actualComments.length} коментариев`;

    // если остаток createCommentElements.length === 0, то блокируем загрузку комментов
    if (actualComments.length === 0) {
      loaderCounter.classList.add('hidden');
    }
  }
};

const openFullSizeModal = (data) => {
  console.log('что передается в дата', data);
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  // добавляю вставки;
  descriptionPhotoElement.textContent = data.description;
  bigPictureElement.setAttribute('src', data.url);
  likesCounterElement.textContent = data.likes;
  countCommentsElement.textContent = data.comments.length;
  console.log('массив для дубликата', data.comments);
  blockComments.textContent = '';
  // вносим в переменную actualComments дубликат массива
  actualComments = data.comments.slice();
  uploadComments();
};

const closeFullSizeModal = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

buttonCommentLoader.addEventListener('click', uploadComments);

export {closeFullSizeModal, openFullSizeModal};

