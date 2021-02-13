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

function addCard(name, link) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);

  cardItem.querySelector('.card__element').alt = name;
  cardItem.querySelector('.card__title').textContent = name;
  cardItem.querySelector('.card__element').src = link;

  const buttonLike = cardItem.querySelector('.card__like');

  buttonLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });

  const buttonDelete = cardItem.querySelector('.card__trash');

  buttonDelete.addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  const popupView = popups.querySelector('.popup_view');
  const popupViewClose = popupView.querySelector('.popup__close-from');

  cardItem.querySelector('.card__element').addEventListener('click', function() {
    popupView.classList.add('.popup_opened');
    popupView.querySelector('.popup-view__image').src = link;
    popupView.querySelector('.popup-view__about').textContent = name;
    popupView.querySelector('.popup-view__image').alt = name;
  });

  popupViewClose.addEventListener('click', function() {
    popupView.classList.remove('popup_opened');
  });

  cardsProfile.prepend(cardItem);
}

function addCardsDefault() {
  initialCards.forEach((item) =>{
    addCard(item.name, item.link);
  });
};

addCardsDefault();

function addCardNew () {
  addCard(placeInput.value, linkPlace.value);
  placeInput.value = '';
  linkPlace.value = '';
}

function openEditProfile() {
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
};

function closeForm() {
  popupEditProfile.classList.remove('popup_opened');
};

buttonEditName.addEventListener('click', openEditProfile);
buttonCloseForm.addEventListener('click', closeForm);

function openAddCard () {
  popupAddCard.classList.add('popup_opened');
};

function closeAddCard () {
  popupAddCard.classList.remove('popup_opened');
};

buttonAddCard.addEventListener('click', openAddCard);
buttonCloseAddCard.addEventListener('click', closeAddCard);

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closeForm();
};

function formSubmitHandlerCard (evt) {
  evt.preventDefault();
  addCardNew();
  closeAddCard();
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElementCard.addEventListener('submit', formSubmitHandlerCard);

