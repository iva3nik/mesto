const popup = document.querySelector('.popup');
const buttonEditName = document.querySelector('.profile__button-edit-name');
const buttonCloseForm = popup.querySelector('.popup__close-form');

const formElement = popup.querySelector('.popup__edit-profile');
const nameInput = formElement.querySelector('.popup__item-profile_input_name');
const jobInput = formElement.querySelector('.popup__item-profile_input_job');

const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

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
//находим секцию под карточки
const cardsProfile = document.querySelector('.elements');
//находим элемент template и получаем содержимое
const cardTemplate = document.querySelector('#card').content;

function addCard(name, link) {

  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);

  cardItem.querySelector('.card__element').alt = name;
  cardItem.querySelector('.card__title').textContent = name;
  cardItem.querySelector('.card__element').src = link;

  cardsProfile.append(cardItem);
}

function addCardsDefault() {
  initialCards.forEach((item) =>{
    addCard(item.name, item.link);
  });
};

addCardsDefault();


function openEditProfile() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

function closeForm() {
  popup.classList.remove('popup_opened');
}

buttonEditName.addEventListener('click', openEditProfile);
buttonCloseForm.addEventListener('click', closeForm);



// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closeForm();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


