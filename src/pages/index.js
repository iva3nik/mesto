import './index.css';
import { popupEditProfile, nameInput, jobInput, popupAddCard,
  popupAddCardForm, buttonEditName, buttonAddCard, validationClass,
  initialCards, popupViewSelector, popupEditProfileSelector, popupAddCardSelector,
  profileName, profileText, profileAvatar, cardsProfile, templateCardSelector,apiData }
  from '../scripts/utils/constants.js';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';


const popupWithImage = new PopupWithImage(popupViewSelector);

const defaultCardList = new Section ({
  data: initialCards,
  renderer: (item) => {
    defaultCardList.appendItem(createCard(item));
  },
},
cardsProfile);

const userInfo = new UserInfo({
  nameSelector: profileName,
  aboutSelector: profileText,
  avatarSelector: profileAvatar
});

const popupWithProfile = new PopupWithForm(
  popupEditProfileSelector,
  (formValues) => {
    userInfo.setUserInfo(formValues);
  }
);

const popupWithAddCard = new PopupWithForm(
  popupAddCardSelector,
  (formValues) => {
    defaultCardList.prependItem(createCard(formValues));
});

const formValidatorEditProfile = new FormValidator(validationClass, popupEditProfile);
const formValidatorAddCard = new FormValidator(validationClass, popupAddCard);

function createCard(formValues) {
  const card = new Card (formValues, templateCardSelector, () => {
    popupWithImage.open(formValues);
  }).getCard();
  return card;
};

popupWithProfile.setEventListeners();
popupWithAddCard.setEventListeners();
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
  popupWithAddCard.open();
});

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();

defaultCardList.renderItem();

fetch('https://mesto.nomoreparties.co/v1/cohort-22/users/me', {
  headers: {
    authorization: '62eee554-aa82-42a2-9129-40e083fc85ea'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
    userInfo.setUserInfo(result)
  })
  .catch((err) => {
    console.log('Something is wrong')
  });

fetch('https://mesto.nomoreparties.co/v1/cohort-22/cards', {
  headers: {
    authorization: '62eee554-aa82-42a2-9129-40e083fc85ea'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log('Something is wrong')
  });
