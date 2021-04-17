export default class Card {
  constructor(item, selector, handleClickCard, handleDeleteCard) {
    this._selector = selector;
    this._likes = item.likes;
    this._userId = item.userId;
    this._id = item._id;
    this._name = item.name;
    this._link = item.link;
    this._owner = item.owner;
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard= handleDeleteCard;
  };

  _getTemplate() {
    this._cardTemplate = document
      .querySelector(this._selector).content
      .querySelector('.card').cloneNode(true);
    this._cardElement = this._cardTemplate.querySelector('.card__element');
    this._buttonLike = this._cardTemplate.querySelector('.card__like');
    this._buttonDelete = this._cardTemplate.querySelector('.card__trash');
    this._countLike = this._cardTemplate.querySelector('.card__count');

    return this._cardTemplate;
  }

  _like() {
    this._buttonLike.classList.toggle('card__like_active');
  };

  deleteCard() {
    this._cardItem.remove();
  };

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => this._like());
    this._buttonDelete.addEventListener('click', () => this._handleDeleteCard());
    this._cardElement.addEventListener('click', () => this._handleClickCard(this._link, this._name));
  };

  getCard() {
    this._cardItem = this._getTemplate();
    this._cardElement.src = this._link;
    this._cardElement.alt = this._name;
    this._cardItem.querySelector('.card__title').textContent = this._name;
    this._cardItem._id = this._id;
    if (this._owner._id === this._userId) {
      this._buttonDelete.classList.add('card__trash_active');
    }
    this._setEventListeners();

    return this._cardItem;
  };
};
