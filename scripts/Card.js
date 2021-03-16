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

export class Card {
  constructor(item, selector) {
    this._cardItem = document
      .querySelector(selector).content
      .querySelector('.card').cloneNode(true);
    this._cardElement = this._cardItem.querySelector('.card__element');
    this._buttonLike = this._cardItem.querySelector('.card__like');
    this._buttonDelete = this._cardItem.querySelector('.card__trash');

    this._link = item.link;
    this._name = item.name;
  }

  _like() {
    this._buttonLike.classList.toggle('card__like_active');
  }

  _trash() {
    this._cardItem.remove();
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => this._like());
    this._buttonDelete.addEventListener('click', () => this._trash());
    this._cardElement.addEventListener('click', function(evt) {
      openPopup(popupView);
      popupImage.src = evt.target.src;
      popupImage.alt = evt.target.alt;
      popupAbout.textContent = evt.target.alt;
    });
  }

  getCard() {
    this._cardElement.src = this._link;
    this._cardElement.alt = this._name;
    this._cardItem.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();

    return this._cardItem;
  }
}
