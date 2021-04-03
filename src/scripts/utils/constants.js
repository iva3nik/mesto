export const popups = document.querySelector('.popups');
export const popupView = popups.querySelector('.popup_view');
export const popupImage = popupView.querySelector('.popup__image');
export const popupAbout = popupView.querySelector('.popup__about');

export const popupEditProfile = popups.querySelector('.popup_edit-profile');
export const formElement = popupEditProfile.querySelector('.popup__edit-profile');
export const nameInput = formElement.querySelector('.popup__item-profile_input_name');
export const jobInput = formElement.querySelector('.popup__item-profile_input_job');

export const popupAddCard = popups.querySelector('.popup_add-card');
export const popupAddCardForm = popupAddCard.querySelector('.popup__edit-profile');
export const placeInput = popupAddCard.querySelector('.popup__item-profile_input_name');
export const linkPlace = popupAddCard.querySelector('.popup__item-profile_input_job');
export const formElementCard = popupAddCard.querySelector('.popup__edit-profile');

export const buttonEditName = document.querySelector('.profile__button-edit-name');
export const profileName = document.querySelector('.profile__name');
export const profileText = document.querySelector('.profile__text');
export const buttonAddCard = document.querySelector('.profile__button');
export const cardsProfile = document.querySelector('.elements');

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

export const arrayPopups = Array.from(document.querySelectorAll('.popup'));

