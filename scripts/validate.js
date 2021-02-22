function showInputError(formElement, inputElement, errorMessage, validationClass) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationClass.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationClass.errorClass);
};

function hideInputError(formElement, inputElement, validationClass) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationClass.inputErrorClass);
  errorElement.classList.remove(validationClass.errorClass);
  errorElement.textContent = '';
};

function isValid(formElement, inputElement, validationClass) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationClass);
  } else {
    hideInputError(formElement, inputElement, validationClass);
  }
};

function setEventListeners(formElement, validationClass) {
  const inputList = Array.from(formElement.querySelectorAll(validationClass.inputSelector));
  const buttonElement = formElement.querySelector(validationClass.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validationClass);
      toggleButtonState(inputList, buttonElement, validationClass);
    });
  });
};

function enableValidation(validationClass) {
  const formList = Array.from(popups.querySelectorAll(validationClass.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationClass);
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement, validationClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationClass.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationClass.inactiveButtonClass);
  }
};

enableValidation({
  formSelector: '.popup__edit-profile',
  inputSelector: '.popup__item-profile',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__item-profile_type_error',
  errorClass: 'popup__input-error_active'
});
