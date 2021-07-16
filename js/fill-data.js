export const fillData = (data) => {

  const bigPicture = document.querySelector('.big-picture');
  const blockComments = bigPicture.querySelector('.social__comments');
  bigPicture.querySelector('.social__caption').textContent = data.description;
  bigPicture.querySelector('.big-picture__img img').setAttribute('src', data.url);
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  blockComments.innerHTML = data.comments.map((it) => `<li class="social__comment">
    <img
        class="social__picture"
        src="${it.avatar}"
        alt="${it.name}"
        width="35" height="35">
        <p class="social__text">${it.message}</p>
  </li>`).join('');
};
