import './index.css';
import { popupEditProfile, nameInput, jobInput, popupAddCard,
  popupAddCardForm, buttonEditName, buttonAddCard, validationClass,
  initialCards } from '../scripts/utils/constants.js';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';


const popupWithImage = new PopupWithImage('.popup_view');

const defaultCardList = new Section ({
  data: initialCards,
  renderer: (item) => {
    defaultCardList.setItem(createCard(item));
  },
},
  '.elements');

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__text'
});

const popupWithProfile = new PopupWithForm(
  '.popup_edit-profile',
  (formValues) => {
    userInfo.setUserInfo(formValues);
  }
);

const popupWIthAddCard = new PopupWithForm('.popup_add-card', (formValues) => {
  defaultCardList.addItem(createCard(formValues));
});

const formValidatorEditProfile = new FormValidator(validationClass, popupEditProfile);
const formValidatorAddCard = new FormValidator(validationClass, popupAddCard);

function createCard(formValues) {
  const card = new Card (formValues, '#card', () => {
    popupWithImage.open(formValues);
  }).getCard();
  return card;
};

popupWithProfile.setEventListeners();
popupWIthAddCard.setEventListeners();
popupWithImage.setEventListeners();

buttonEditName.addEventListener('click', () => {
  const dataUser = userInfo.getUserInfo();
  nameInput.value = dataUser.name;
  jobInput.value = dataUser.about;
  popupWithProfile.open();
  formValidatorEditProfile.clearValidation();
});

buttonAddCard.addEventListener('click', () => {
  popupAddCardForm.reset();
  formValidatorAddCard.clearValidation();
  popupWIthAddCard.open();
});

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();

defaultCardList.renderItem();
