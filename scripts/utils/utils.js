export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};

export function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

export function closePopupEscape(evt) {
  const popupOpen = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpen);
  }
};


