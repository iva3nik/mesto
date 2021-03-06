export const popups = document.querySelector('.popups');
export const popupViewSelector = '.popup_view';

export const popupEditProfileSelector = '.popup_edit-profile';
export const popupEditProfile = popups.querySelector(popupEditProfileSelector);
export const popupSaveEditProfile = popupEditProfile.querySelector('.popup__save');
export const formElement = popupEditProfile.querySelector('.popup__edit-profile');
export const nameInput = formElement.querySelector('.popup__item-profile_input_name');
export const jobInput = formElement.querySelector('.popup__item-profile_input_job');

export const popupAddCardSelector = '.popup_add-card';
export const popupAddCard = popups.querySelector(popupAddCardSelector);
export const popupAddCardForm = popupAddCard.querySelector('.popup__edit-profile');
export const popupSaveNewCard = popupAddCard.querySelector('.popup__save');

export const buttonEditAvatar = document.querySelector('.profile__avatar-edit');
export const buttonEditName = document.querySelector('.profile__button-edit-name');
export const profileName = '.profile__name';
export const profileText = '.profile__text';
export const profileAvatar = '.profile__avatar';
export const buttonAddCard = document.querySelector('.profile__button');
export const cardsProfile = '.elements';
export const templateCardSelector = '#card';

export const popupConfirmSelector = '.popup_confirm';
export const popupConfirm = popups.querySelector(popupConfirmSelector);
export const popupSaveConfirm = popupConfirm.querySelector('.popup__save');
export const popupUpdateAvatarSelector = '.popup_update-avatar';
export const popupEditAvatar = popups.querySelector(popupUpdateAvatarSelector);
export const popupSaveEditAvatar = popupEditAvatar.querySelector('.popup__save');

export const validationClass = {
  formSelector: '.popup__edit-profile',
  inputSelector: '.popup__item-profile',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__item-profile_type_error',
  errorClass: 'popup__input-error_active'
};

export const apiData = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
  headers: {
    authorization: '62eee554-aa82-42a2-9129-40e083fc85ea',
    'Content-Type': 'application/json'
  }
}
