import { popupEditProfile, formElement, nameInput, jobInput,
  popupAddCard, popupAddCardForm, placeInput, linkPlace, formElementCard,
  buttonEditName, profileName, profileText, buttonAddCard, cardsProfile,
  validationClass, initialCards, arrayPopups }
  from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


const popupWithImage = new PopupWithImage('.popup_view');
popupWithImage.setEventListeners();

const defaultCardList = new Section ({
  data: initialCards,
  renderer: (item) => {
    const cardElement = new Card(item, '#card', () => {
      popupWithImage.open(item);
    }).getCard();
    defaultCardList.setItem(cardElement);
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
    console.log(formValues)
    userInfo.setUserInfo(formValues);
  }
);

popupWithProfile.setEventListeners();

buttonEditName.addEventListener('click', () => {
  popupWithProfile.open();
  const dataUser = userInfo.getUserInfo();
  nameInput.value = dataUser.name;
  jobInput.value = dataUser.about;/*
  formValidatorEditProfile.clearValidation();*/
});

/*
const popupWithCard = new PopupWithForm('.popup_add-card', (dataUser) => {
  const newCard = new Card ({ name: dataUser.place, link: dataUser.link }, '#card').getCard();
  defaultCardList(newCard);
})
popupWithCard.setEventListeners();*/

/*
const formValidatorEditProfile = new FormValidator(validationClass, popupEditProfile);
const formValidatorAddCard = new FormValidator(validationClass, popupAddCard);

function addNewCard() {
  const item = {name: placeInput.value, link: linkPlace.value};
  const newCard = new Card(item, '#card').getCard();
  cardsProfile.prepend(newCard);
}*/

/*
buttonAddCard.addEventListener('click', function() {
  popupAddCardForm.reset();
  formValidatorAddCard.clearValidation();
  popupWithCard.open();
});

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();*/

defaultCardList.renderItem();
