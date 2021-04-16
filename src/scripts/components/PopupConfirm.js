import Popup from './Popup';

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popupElement.querySelector('.popup_confirm');
    this._handleSubmit = this._handleSubmitForm.bind(this);
  }

  _handleSubmitForm(evt) {
    evt.preventDefault();
    super.close();
  }
}
