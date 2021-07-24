// модуль для констант
export const RANDOM_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
export const RANDOM_NAMES = [
  'Никита',
  'Юлия',
  'Паха',
  'Дмитрий',
  'Таньяна',
  'Валерий',
  'Валентина',
];
export const RANDOM_DESCRIPTIONS = [
  'фотография красивая',
  'фотография необычная',
  'фотография яркая',
  'фотография живая',
  'фотография солнечная',
  'фотография насыщенная',
];
export const avatarNamesValidation = {min: 1, max: 6};
export const numberLikesValidation = {min: 15, max: 200};
export const numberCommentsValidation = {min: 2, max: 15};
export const PHOTO_AMOUNT = 25;
export const HASHTAGS_TEST = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
export const MAX_HASHTAGS = 5;
export const HASHTAGS_RULES = 'Хэш-теги начинанаются с символа # и разделяются пробелами, должны состоять из букв и чисел, ' +
  'длиной от 1-19 символов, максимальное количество хэш-тегов 5 штук.';
export const HASHTAGS_NO_REPEAT = 'Хэш-теги не должны поторяться';
export const HASHTAGS_EXCESS = 'Количетсво хэш-тегов не должно превышать 5 штук';
export const MAX_SYMBOL_DESCRIPTION = 140;
export const COMMENT_LENGTH_EXCEEDED = 'Длина комметария не может превышать 140 символов';
export const SCALE_VALUE_STEP = 25;
export const MAX_VALUE = 100;
export const MIN_VALUE = 25;
