const popups = document.querySelector('.popups');
const popupEditProfile = popups.querySelector('.popup_edit-profile');
const buttonEditName = document.querySelector('.profile__button-edit-name');
const buttonCloseForm = popupEditProfile.querySelector('.popup__close-form');
const formElement = popupEditProfile.querySelector('.popup__edit-profile');
const nameInput = formElement.querySelector('.popup__item-profile_input_name');
const jobInput = formElement.querySelector('.popup__item-profile_input_job');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const popupAddCard = popups.querySelector('.popup_add-card');
const popupAddCardForm = popupAddCard.querySelector('.popup__edit-profile');
const buttonAddCard = document.querySelector('.profile__button');
const buttonCloseAddCard = popupAddCard.querySelector('.popup__close-form');
const placeInput = popupAddCard.querySelector('.popup__item-profile_input_name');
const linkPlace = popupAddCard.querySelector('.popup__item-profile_input_job');
const formElementCard = popupAddCard.querySelector('.popup__edit-profile');
const cardsProfile = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function render() {
  const cardsArray = initialCards.map(getCard);
  cardsProfile.append(...cardsArray);
};

function getCard(item) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardElement = cardItem.querySelector('.card__element');

  cardElement.src = item.link;
  cardElement.alt = item.name;
  cardItem.querySelector('.card__title').textContent = item.name;

  const buttonLike = cardItem.querySelector('.card__like');

  buttonLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });

  const buttonDelete = cardItem.querySelector('.card__trash');

  buttonDelete.addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  const popupView = popups.querySelector('.popup_view');
  const popupCloseView = popupView.querySelector('.popup__close-form');
  const popupImage = popupView.querySelector('.popup__image');

  cardElement.addEventListener('click', function() {
    openPopup(popupView);
    popupImage.src = item.link;
    popupView.querySelector('.popup__about').textContent = item.name;
    popupImage.alt = item.name;
  });

  popupCloseView.addEventListener('click', function() {
    closePopup(popupView);
  });

  return cardItem;
};

function addNewCard() {
  const newCard = getCard({name: placeInput.value, link: linkPlace.value});
  cardsProfile.prepend(newCard);
  popupAddCardForm.reset();
}

render();

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

const arrayPopups = Array.from(document.querySelectorAll('.popup'));
arrayPopups.forEach((popup) => {
  popup.addEventListener('click', function(evt) {
    if (evt.target == evt.currentTarget) {
      closePopup(popup);
    };
  });
});

function clearValidation (popupElement) {
  const inputList = Array.from(popupElement.querySelectorAll(validationClass.inputSelector));
  const buttonElement = popupElement.querySelector(validationClass.submitButtonSelector);
  inputList.forEach((inputElement) => {
    hideInputError(popupElement, inputElement, validationClass);
    toggleButtonState(inputList, buttonElement, validationClass);
  });
}

buttonEditName.addEventListener('click', function() {
  openPopup(popupEditProfile);
  clearValidation(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
});

buttonCloseForm.addEventListener('click', function() {
  closePopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', function() {
  popupAddCardForm.reset();
  clearValidation(popupAddCard);
  openPopup(popupAddCard);
});

buttonCloseAddCard.addEventListener('click', function() {
  closePopup(popupAddCard);
});

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closePopup(popupEditProfile);
};

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addNewCard();
  closePopup(popupAddCard);
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', handleCardFormSubmit);
