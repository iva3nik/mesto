import {Card} from './Card.js';


const popups = document.querySelector('.popups');

const popupEditProfile = popups.querySelector('.popup_edit-profile');
const buttonCloseForm = popupEditProfile.querySelector('.popup__close-form');
const formElement = popupEditProfile.querySelector('.popup__edit-profile');
const nameInput = formElement.querySelector('.popup__item-profile_input_name');
const jobInput = formElement.querySelector('.popup__item-profile_input_job');

const popupView = popups.querySelector('.popup_view');
const popupCloseView = popupView.querySelector('.popup__close-form');
const popupImage = popupView.querySelector('.popup__image');

const popupAddCard = popups.querySelector('.popup_add-card');
const popupAddCardForm = popupAddCard.querySelector('.popup__edit-profile');
const buttonCloseAddCard = popupAddCard.querySelector('.popup__close-form');
const placeInput = popupAddCard.querySelector('.popup__item-profile_input_name');
const linkPlace = popupAddCard.querySelector('.popup__item-profile_input_job');
const formElementCard = popupAddCard.querySelector('.popup__edit-profile');

const buttonEditName = document.querySelector('.profile__button-edit-name');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const buttonAddCard = document.querySelector('.profile__button');
const cardsProfile = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

const validationClass = {
  formSelector: '.popup__edit-profile',
  inputSelector: '.popup__item-profile',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__item-profile_type_error',
  errorClass: 'popup__input-error_active'
};

const initialCards = [
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

function render(items) {
  items.forEach((item) => {
    cardsProfile.append(new Card(item, '#card').getCard());
  })
}

render(initialCards);

