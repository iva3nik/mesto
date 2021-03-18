import { popups, popupView, openPopup, closePopup } from './utils.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const popupEditProfile = popups.querySelector('.popup_edit-profile');
const buttonCloseForm = popupEditProfile.querySelector('.popup__close-form');
const formElement = popupEditProfile.querySelector('.popup__edit-profile');
const nameInput = formElement.querySelector('.popup__item-profile_input_name');
const jobInput = formElement.querySelector('.popup__item-profile_input_job');

const popupCloseView = popupView.querySelector('.popup__close-form');

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
};

render(initialCards);

function addNewCard() {
  const item = {name: placeInput.value, link: linkPlace.value};
  const newCard = new Card(item, '#card').getCard();
  cardsProfile.prepend(newCard);
}

const arrayPopups = Array.from(document.querySelectorAll('.popup'));
arrayPopups.forEach((popup) => {
  popup.addEventListener('click', function(evt) {
    if (evt.target == evt.currentTarget) {
      closePopup(popup);
    };
  });
});

buttonEditName.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
  formValidatorEditProfile.clearValidation();
});

buttonCloseForm.addEventListener('click', function() {
  closePopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', function() {
  popupAddCardForm.reset();
  formValidatorAddCard.clearValidation();
  openPopup(popupAddCard);
});

buttonCloseAddCard.addEventListener('click', function() {
  closePopup(popupAddCard);
});

popupCloseView.addEventListener('click', function() {
  closePopup(popupView);
});

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closePopup(popupEditProfile);
};

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addNewCard();
  closePopup(popupAddCard);
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', handleCardFormSubmit);

const formValidatorEditProfile = new FormValidator(validationClass, popupEditProfile);
const formValidatorAddCard = new FormValidator(validationClass, popupAddCard);
formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
