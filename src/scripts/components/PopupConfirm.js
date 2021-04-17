import Popup from './Popup';

export default class PopupConfirm extends Popup {
  constructor(popupSelector, deleteCard) {
    super(popupSelector);
    this._deleteCard = deleteCard;
    this._form = this._popupElement.querySelector('.popup_confirm');
    this._handleSubmit = this._handleSubmitForm.bind(this);
  }

  _handleSubmitForm() {
    this._deleteCard(this._cardId, this._evt);
  }

  open(cardId, evt) {
    this._cardId = cardId;
    this._evt = evt;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
