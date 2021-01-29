let popup = document.querySelector('.popup');
let buttonEditName = document.querySelector('.profile__button-edit-name');
let buttonCloseForm = popup.querySelector('.popup__close-form');

function openEditProfile() {
  popup.classList.add('popup_opened');
}

function closeForm() {
  popup.classList.remove('popup_opened');
}

buttonEditName.addEventListener('click', openEditProfile);
buttonCloseForm.addEventListener('click', closeForm);

// Находим форму в DOM
let formElement = popup.querySelector('.popup__edit-profile');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__item-profile_input_name');
let jobInput = formElement.querySelector('.popup__item-profile_input_job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                          // Так мы можем определить свою логику отправки.
                          // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
  jobInput.value;
  nameInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
  let profileName = document.querySelector('.profile__name');
  let profileText = document.querySelector('.profile__text');
    // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

