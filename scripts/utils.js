const popups = document.querySelector('.popups');
const popupView = popups.querySelector('.popup_view');
const popupImage = popupView.querySelector('.popup__image');
const popupAbout = popupView.querySelector('.popup__about');

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

function closePopupEscape(evt) {
  const popupOpen = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpen);
  }
};

export {
  popups, popupView, popupImage, popupAbout, openPopup, closePopup, closePopupEscape
};
