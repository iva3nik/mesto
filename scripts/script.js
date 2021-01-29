let popup = document.querySelector('.popup');
let buttonEditName = document.querySelector('.profile__button-edit-name');
let buttonCloseForm = popup.querySelector('.popup__close-form');

let formElement = popup.querySelector('.popup__edit-profile');
let nameInput = formElement.querySelector('.popup__item-profile_input_name');
let jobInput = formElement.querySelector('.popup__item-profile_input_job');

let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');

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


