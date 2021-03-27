import { openPopup, closePopup } from '../utils/utils.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { popupEditProfile, formElement, nameInput, jobInput,
  popupAddCard, popupAddCardForm, placeInput, linkPlace, formElementCard,
  buttonEditName, profileName, profileText, buttonAddCard, cardsProfile,
  validationClass, initialCards, arrayPopups }
  from '../utils/constants.js';
import Section from '../components/Section.js';

const defaultCardList = new Section ({
  data: initialCards,
  renderer: (item) => {
      const cardElement = new Card(item, '#card').getCard();
      defaultCardList.setItem(cardElement);
  },
},
  '.elements');
const formValidatorEditProfile = new FormValidator(validationClass, popupEditProfile);
const formValidatorAddCard = new FormValidator(validationClass, popupAddCard);
/*
function render(items) {
  items.forEach((item) => {
    cardsProfile.append(new Card(item, '#card').getCard());
  })
};

function addNewCard() {
  const item = {name: placeInput.value, link: linkPlace.value};
  const newCard = new Card(item, '#card').getCard();
  cardsProfile.prepend(newCard);
}*/

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closePopup(popupEditProfile);
};

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  defaultCardList.addItem();
  closePopup(popupAddCard);
};

buttonEditName.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
  formValidatorEditProfile.clearValidation();
});

buttonAddCard.addEventListener('click', function() {
  popupAddCardForm.reset();
  formValidatorAddCard.clearValidation();
  openPopup(popupAddCard);
});

arrayPopups.forEach((popup) => {
  popup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-form')) {
      closePopup(popup);
    };
  });
});

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', handleCardFormSubmit);

formValidatorEditProfile.enableValidation();
formValidatorAddCard.enableValidation();
/*
render(initialCards);*/
defaultCardList.renderItem();
