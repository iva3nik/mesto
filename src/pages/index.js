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
    renderLoading(false, popupSaveEditProfile, 'Сохранить');
    api.patchDataUser(formValues)
      .then((result) => {
        renderLoading(true, popupSaveEditProfile, 'Сохранить...');
        userInfo.setUserInfo(result);
      })
      .catch(err => console.log(err));
  }
);

const popupUpdateAvatar = new PopupWithForm(
  popupUpdateAvatarSelector,
  (formValues) => {
    renderLoading(false, popupSaveEditAvatar, 'Сохранить');
    api.renewAvatar(formValues.link)
      .then(res => {
        renderLoading(true, popupSaveEditAvatar, 'Сохранить...');
        userInfo.setAvatar(formValues.link);
      })
      .catch(err => console.log(err));
  }
);

const popupConfirm = new PopupConfirm(popupConfirmSelector);

function createCard(formValues) {
  const card = new Card (
    formValues,
    templateCardSelector,
    () => {
    popupWithImage.open(formValues);
    },

    (cardEl) => {
      popupConfirm.setSubmitAction(_ => {
        renderLoading(false, popupSaveConfirm, 'Да');
        api.removeCard(cardEl._id)
          .then((res) => {
            renderLoading(true, popupSaveConfirm, 'Да...')
            cardEl.removeCard();
            popupConfirm.close();
          })
          .catch(err => console.log(err));
      })
      popupConfirm.open(cardEl);
    }
  )
  .getCard();
  return card;
};

const formValidatorEditProfile = new FormValidator(validationClass, popupEditProfile);
const formValidatorAddCard = new FormValidator(validationClass, popupAddCard);
const formValidatorEditAvatar = new FormValidator(validationClass, popupEditAvatar);

const popupWithAddCard = new PopupWithForm(
  popupAddCardSelector,
  (formValues) => {
    renderLoading(false, popupSaveNewCard, 'Создать')
    api.addNewCard(formValues)
      .then((result) => {
        renderLoading(true, popupSaveNewCard, 'Создать...');
        result.userId = result.owner._id;
        defaultCardList.prependItem(createCard(result));
      })
      .catch((err) => {
        console.log(err);
      });
});

function renderLoading(isLoading, button, textButton) {
  if(isLoading) {
    button.textContent = textButton + '...';
  } else {
    button.textContent = textButton;
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
    userInfo.setUserInfo(dataUser)
    userInfo.setAvatar(dataUser.avatar)
    initialData.forEach(item => {
      item.userId = dataUser._id;
      defaultCardList.appendItem(createCard(item));
    })
  })
  .catch((err) => {
    console.log(err => console.log(err));
  });





