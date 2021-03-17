export class FormValidator {
  constructor(selectors, formElement) {
    this._selectors = selectors;
    this._formElement = formElement;
  };

  _showInputError() {
    const errorElement = this._formElement
      .querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._selectors.inputErrorClass);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._selectors.errorClass);
  };

  _hideInputError() {
    const errorElement = this._formElement
      .querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._selectors.inputErrorClass);
    errorElement.classList.remove(this._selectors.errorClass);
    errorElement.textContent = '';
  };

  _isValid(inputElement) {
    this._inputElement = inputElement;

    if (!this._inputElement.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    };
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._selectors.inactiveButtonClass);
    };
  };

  _setEventListeners() {
    this._inputList = Array.from(this._formElement
      .querySelectorAll(this._selectors.inputSelector));
    this._buttonElement = this._formElement
      .querySelector(this._selectors.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  clearValidation() {
    this._inputList.forEach((inputElement) => {
      const errorElement = this._formElement
      .querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._selectors.inputErrorClass);
      errorElement.classList.remove(this._selectors.errorClass);
      errorElement.textContent = '';
      this._toggleButtonState();
    });
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
};
