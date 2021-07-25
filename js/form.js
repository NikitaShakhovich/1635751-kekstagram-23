const HASHTAGS_TEST = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAGS = 5;
const HASHTAGS_RULES = 'Хэш-теги начинанаются с символа # и разделяются пробелами, должны состоять из букв и чисел, ' +
  'длиной от 1-19 символов, максимальное количество хэш-тегов 5 штук.';
const HASHTAGS_NO_REPEAT = 'Хэш-теги не должны поторяться';
const HASHTAGS_EXCESS = 'Количетсво хэш-тегов не должно превышать 5 штук';
const MAX_SYMBOL_DESCRIPTION = 140;
const COMMENT_LENGTH_EXCEEDED = 'Длина комметария не может превышать 140 символов';
const SCALE_VALUE_STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;

const form = document.querySelector('.img-upload__form');
const scaleSmaller = form.querySelector('.scale__control--smaller');
const scaleBigger = form.querySelector('.scale__control--bigger');
const valueEffect = form.querySelector('.effect-level__value');
export const scaleValueElement = form.querySelector('.scale__control--value');
export const photoUploadPreview = form.querySelector('.img-upload__preview');
export const sliderEffect = form.querySelector('.effect-level__slider');
export const idEffectNone = form.querySelector('#effect-none');
export const inputHashtagsElement = form.querySelector('.text__hashtags');
export const inputDescription = form.querySelector('.text__description');

let typeEffectValue = '';

const onScaleButtonClick = (evt) => {
  // вношу в переменную значение input с убранным знаком %
  const scaleValue = scaleValueElement.value.slice(0, -1);

  if (evt.target.classList.contains('scale__control--bigger') && scaleValue < MAX_VALUE) {
    scaleValueElement.value = `${+scaleValue + SCALE_VALUE_STEP}%`;
  }

  if (evt.target.classList.contains('scale__control--smaller') && scaleValue > MIN_VALUE) {
    // если - да, присваиваю input value результат условия
    scaleValueElement.value = `${scaleValue - SCALE_VALUE_STEP}%`;
  }
  photoUploadPreview.style.transform = `scale(${scaleValueElement.value})`;
};

const onChangeFilter = (evt) => {
  const currentElement = evt.target;
  // если таргет, то проверяем матчес на соответствие
  if (currentElement && currentElement.matches('input[type="radio"]')) {
    //если соответствует условию, то добавляем класс через шаблонную строку
    photoUploadPreview.setAttribute('class', 'img-upload__preview');
    photoUploadPreview.classList.add(`effects__preview--${currentElement.value}`);
    sliderEffect.noUiSlider.set(1);
    typeEffectValue = currentElement.value;

    switch (typeEffectValue) {
      case 'none' : {
        photoUploadPreview.style.filter = '';
        sliderEffect.setAttribute('disabled', true);
        break;
      }
      case 'marvin' : {
        sliderEffect.noUiSlider.updateOptions({
          step: 0.01,
        });
        break;
      }
      case 'heat' : {
        sliderEffect.noUiSlider.updateOptions({
          step: 0.05,
        });
        break;
      }
      case 'phobos' : {
        sliderEffect.noUiSlider.updateOptions({
          step: 0.03333,
        });
        break;
      }
    }
  }
};

const onValidateFormDescription = () => {
  if(inputDescription.value.length > MAX_SYMBOL_DESCRIPTION) {
    inputDescription.setCustomValidity(COMMENT_LENGTH_EXCEEDED);
  } else {
    inputDescription.setCustomValidity('');
  }
  inputDescription.reportValidity();
};

const onValidateFormHashtags = () => {
  // если значение инпута неравно пустой строке, возвращаем true
  if (inputHashtagsElement.value !== '') {
    // переменной хэштегс присваиваем значение ипута с убранными заглавными буквами, убранными пробелами в начале и конце
    // преобразованным в массив
    const hashtags = inputHashtagsElement.value.toLowerCase().trim().split(' ');
    // создаём дубликат хэштегов (повторяющийся значения в дубликат не включаются)
    const copyHashtags = new Set(hashtags);

    //перебераем значения массива методом фоич
    hashtags.forEach((item) => {
      // если значение проходит проверку HASHTAGS_TEST, возвращаем false
      if (!HASHTAGS_TEST.test(item)) {
        // выводим на инпуте предупреждение HASHTAGS_RULES
        inputHashtagsElement.setCustomValidity(HASHTAGS_RULES);
        // сравнивает значение если не равны возвращает true
      } else if (copyHashtags.size !== hashtags.length) {
        //выводим на инпуте предупреждение HASHTAGS_NO_REPEAT
        inputHashtagsElement.setCustomValidity(HASHTAGS_NO_REPEAT);
      } else {
        inputHashtagsElement.setCustomValidity('');
      }
      //дергаем метод для проверки форм. возвращает true если все дочерние элементы прошли проверку.
      // Если есть false генерируется сообщение.
      inputHashtagsElement.reportValidity();
    });
    // если длина массива больше 5 возвращаем true
    if (hashtags.length > MAX_HASHTAGS) {
      //выводим на инпуте предупреждение HASHTAGS_EXCESS
      inputHashtagsElement.setCustomValidity(HASHTAGS_EXCESS);
    }
  }
};

noUiSlider.create(sliderEffect, {start: [1], step: 0.1, connect: 'lower', behaviour: 'tap', range: {'min': 0, 'max': 1}});
sliderEffect.noUiSlider.on('update', ( values, handle ) => {
  sliderEffect.removeAttribute('disabled');
  // значению переменной приравниваем текущее значение ползунка

  switch (typeEffectValue) {
    case 'chrome' : {
      valueEffect.value = values[handle];
      // изменяем css стиль для effectChrome
      photoUploadPreview.style.filter = `grayscale(${valueEffect.value})`;
      break;
    }
    case 'sepia' : {
      valueEffect.value = values[handle];
      photoUploadPreview.style.filter = `sepia(${valueEffect.value})`;
      break;
    }
    case 'marvin' : {
      valueEffect.value = values[handle];
      photoUploadPreview.style.filter = `invert(${valueEffect.value * 100}%)`;
      break;
    }
    case 'heat' : {
      valueEffect.value = values[handle];
      photoUploadPreview.style.filter = `brightness(${valueEffect.value * 2 + 1})`;
      break;
    }
    case 'phobos' : {
      valueEffect.value = values[handle];
      photoUploadPreview.style.filter = `blur(${valueEffect.value * 3}px)`;
      break;
    }
  }
});

// вешаю обработчик событий по клику на кнопку уменьшить и увеличить
scaleSmaller.addEventListener('click', onScaleButtonClick);
scaleBigger.addEventListener('click', onScaleButtonClick);
form.addEventListener('change', onChangeFilter);
inputHashtagsElement.addEventListener('input', onValidateFormHashtags);
inputDescription.addEventListener('input', onValidateFormDescription);
