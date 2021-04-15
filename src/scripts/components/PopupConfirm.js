import Popup from './Popup';

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popupElement.querySelector('.popup_confirm');
    this._handleSubmit = this._handleSubmitForm.bind(this);
  }

  open(data, evt) {
    super.open();
    this._data = data;
    this._el = evt.target
  }

  _handleSubmitForm(evt) {
    evt.preventDefault();
    /*
    this._submitForm(this._data, this._el)*/
  }

  setEventListeners() {
    super.setEventListeners;
    /*
    this._form.addEventListener('click', this._handleSubmitForm);*/
    super.close();
  }
}
