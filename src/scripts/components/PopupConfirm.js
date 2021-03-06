import Popup from './Popup';

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__edit-profile');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }


  setEventListeners() {
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    })
    super.setEventListeners();
  }

  open(cardEl) {
    this._cardEl = cardEl;
    super.open();
  }
}
