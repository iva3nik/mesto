export const popups = document.querySelector('.popups');
export const popupViewSelector = '.popup_view';

export const popupEditProfileSelector = '.popup_edit-profile';
export const popupEditProfile = popups.querySelector(popupEditProfileSelector);
export const formElement = popupEditProfile.querySelector('.popup__edit-profile');
export const nameInput = formElement.querySelector('.popup__item-profile_input_name');
export const jobInput = formElement.querySelector('.popup__item-profile_input_job');

export const popupAddCardSelector = '.popup_add-card';
export const popupAddCard = popups.querySelector(popupAddCardSelector);
export const popupAddCardForm = popupAddCard.querySelector('.popup__edit-profile');

export const buttonEditName = document.querySelector('.profile__button-edit-name');
export const profileName = '.profile__name';
export const profileText = '.profile__text';
export const profileAvatar = '.profile__avatar';
export const buttonAddCard = document.querySelector('.profile__button');
export const cardsProfile = '.elements';
export const templateCardSelector = '#card';

export const validationClass = {
  formSelector: '.popup__edit-profile',
  inputSelector: '.popup__item-profile',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__item-profile_type_error',
  errorClass: 'popup__input-error_active'
};

export const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const apiData = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-22/users/me',
  headers: {
    'Content-Type': 'application/json',
    authorization: '62eee554-aa82-42a2-9129-40e083fc85ea'
  }
}
