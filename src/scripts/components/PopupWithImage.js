import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupAbout = this._popupElement.querySelector('.popup__about');
  }

  open(item) {
    this._popupImage.src = item.link;
    this._popupImage.alt = item.name;
    this._popupAbout.textContent = item.name;
    super.open();
  }
}
