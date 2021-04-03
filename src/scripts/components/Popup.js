export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup') ||
      evt.target.classList.contains('popup__close-form')) {
        this.close();
    };
  }

  setEventListeners() {
    this._popupElement
      .querySelector('.popup__close-form')
      .addEventListener('click', () => this.close());

    this._popupElement
      .addEventListener('click', (evt) => this._handleOverlayClose(evt));
  }
}
