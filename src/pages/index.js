import './index.css';
import { popupEditProfile, nameInput, jobInput, popupAddCard,
  popupAddCardForm, buttonEditName, buttonAddCard, validationClass,
  popupViewSelector, popupEditProfileSelector, popupAddCardSelector,
  popupConfirmSelector, profileName, profileText, profileAvatar, cardsProfile,
  templateCardSelector, apiData }
  from '../scripts/utils/constants.js';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import PopupConfirm from '../scripts/components/PopupConfirm.js';

const api = new Api(apiData);
const popupWithImage = new PopupWithImage(popupViewSelector);
const defaultCardList = new Section (cardsProfile);

const userInfo = new UserInfo({
  nameSelector: profileName,
  aboutSelector: profileText,
  avatarSelector: profileAvatar
});

const popupWithProfile = new PopupWithForm(
  popupEditProfileSelector,
  (formValues) => {
    api.patchDataUser(formValues)
      .then(result => console.log(result))
      .then(() => {
        userInfo.setUserInfo(formValues);
      })
      .catch((err) => {
        console.log('Something is wrong');
      });
  }
);

const popupWithAddCard = new PopupWithForm(
  popupAddCardSelector,
  (formValues) => {
    console.log(formValues)
    api.addNewCard(formValues)
      .then((result) => defaultCardList.prependItem(createCard(result)))
      .catch((err) => {
        console.log(err);
      });
});

const popupConfirm = new PopupConfirm(
  popupConfirmSelector,
  () => {

  }
);

const formValidatorEditProfile = new FormValidator(validationClass, popupEditProfile);
const formValidatorAddCard = new FormValidator(validationClass, popupAddCard);

function createCard(formValues) {
  const card = new Card (
    formValues, templateCardSelector, () => {
    popupWithImage.open(formValues);
    },
    () => {
      popupConfirm.open();
    }
  ).getCard();
  return card;
};

popupWithProfile.setEventListeners();
popupWithAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupConfirm.setEventListeners();

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
/*
api.getDataUser()
  .then((result) => {
    console.log(result);
    userInfo.setUserInfo(result);
  })
  .catch((err) => {
    console.log('Something is wrong')
  });

api.getInitialCards()
  .then((result) => {
    console.log(result);
    result.forEach(item => {
      defaultCardList.appendItem(createCard(item));
    })
  })
  .catch((err) => {
    console.log('Something is wrong')
  });*/
  Promise.all([api.getDataUser(), api.getInitialCards()])
    .then(([dataUser, initialData]) => {
      console.log(dataUser)
      userInfo.setUserInfo(dataUser)
      initialData.forEach(item => {
        defaultCardList.appendItem(createCard({...item, userId: dataUser._id}));
      })
    })
    .catch((err) => {
      console.log('Something is wrong')
    });




