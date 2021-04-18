import './index.css';
import { popupEditProfile, nameInput, jobInput, popupAddCard,
  popupAddCardForm, buttonEditName, buttonAddCard, validationClass,
  popupViewSelector, popupEditProfileSelector, popupAddCardSelector,
  popupConfirmSelector, profileName, profileText, profileAvatar, cardsProfile,
  templateCardSelector, apiData, popupUpdateAvatarSelector, buttonEditAvatar,
  popupEditAvatar, popupSaveNewCard, popupSaveEditProfile, popupSaveConfirm,
  popupSaveEditAvatar }
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
    renderLoading(false, popupSaveEditProfile, 'Сохранить', 'Сохранение...');
    api.patchDataUser(formValues)
      .then((result) => {
        userInfo.setUserInfo(result);
        renderLoading(true, popupSaveEditProfile, 'Сохранить', 'Сохранение...');
      })
      .catch(err => console.log(err));
  }
);

const popupUpdateAvatar = new PopupWithForm(
  popupUpdateAvatarSelector,
  (formValues) => {
    renderLoading(false, popupSaveEditAvatar, 'Сохранить', 'Сохранение...');
    api.renewAvatar(formValues.link)
      .then(res => {
        userInfo.setAvatar(formValues.link);
        renderLoading(true, popupSaveEditAvatar, 'Сохранить', 'Сохранение...');
      })
      .catch(err => console.log(err));
  }
);

const popupConfirm = new PopupConfirm(popupConfirmSelector);

const popupWithAddCard = new PopupWithForm(
  popupAddCardSelector,
  (formValues) => {
    renderLoading(false, popupSaveNewCard, 'Создать', 'Создание...');
    api.addNewCard(formValues)
      .then((result) => {
        result.userId = result.owner._id;
        defaultCardList.prependItem(createCard(result));
        renderLoading(true, popupSaveNewCard, 'Создать', 'Создание...');
      })
      .catch((err) => {
        console.log(err);
      });
});

function createCard(formValues) {
  const card = new Card (
    formValues,
    templateCardSelector,
    () => {
    popupWithImage.open(formValues);
    },

    (cardEl) => {
      popupConfirm.setSubmitAction(_ => {
        renderLoading(false, popupSaveConfirm, 'Да', 'Да...')
        api.removeCard(cardEl._id)
          .then((res) => {
            cardEl.removeCard();
            renderLoading(true, popupSaveConfirm, 'Да', 'Да...')
            popupConfirm.close();
          })
          .catch(err => console.log(err));
      })
      popupConfirm.open(cardEl);
    },

    (cardEl) => {
      if(!cardEl._myLike) {
        api.putLikeCard(cardEl._id)
        .then(res => {
          cardEl.likeCardCounter(res.likes.length);
        })
        .catch(err => console.log(err));
      } else {
        api.deleteLikeCard(cardEl._id)
        .then(res => {
          cardEl.likeCardCounter(res.likes.length);
        })
        .catch(err => console.log(err));
      }
    }
  )
  .getCard();
  return card;
};

const formValidatorEditProfile = new FormValidator(validationClass, popupEditProfile);
const formValidatorAddCard = new FormValidator(validationClass, popupAddCard);
const formValidatorEditAvatar = new FormValidator(validationClass, popupEditAvatar);

function renderLoading(isLoading, button, startTextButton, loadingTextButton) {
  if(isLoading) {
    button.textContent = startTextButton;
  } else {
    button.textContent = loadingTextButton;
  }
};

popupConfirm.setEventListeners();
popupWithProfile.setEventListeners();
popupWithAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupUpdateAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
  formValidatorEditAvatar.clearValidation();
  popupUpdateAvatar.open();
});

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
formValidatorEditAvatar.enableValidation();

Promise.all([api.getDataUser(), api.getInitialCards()])
  .then(([dataUser, initialData]) => {
    userInfo.setUserInfo(dataUser);
    userInfo.setAvatar(dataUser.avatar);
    initialData.forEach(item => {
      item.userId = dataUser._id;
      defaultCardList.appendItem(createCard(item));
    })
  })
  .catch((err) => {
    console.log(err => console.log(err));
  });





