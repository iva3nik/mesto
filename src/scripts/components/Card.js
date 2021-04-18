export default class Card {
  constructor(item, selector, handleClickCard, deleteCard, like) {
    this._selector = selector;
    this._likes = item.likes;
    this._userId = item.userId;
    this._id = item._id;
    this._name = item.name;
    this._link = item.link;
    this._owner = item.owner;
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard = this._handleDeleteCard.bind(this);
    this._deleteCard = deleteCard;
    this._like = like;
    this._myLike = item.myLike;
    this._handleLikeCard = this._handleLikeCard.bind(this);
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

  likeCardCounter(likes) {
    this._buttonLike.classList.toggle('card__like_active');
    this._countLike.textContent = likes;
    this._myLike = !this._myLike;
  };

  _handleLikeCard() {
    this._like(this);
  }

  _handleDeleteCard() {
    this._deleteCard(this);
  };

  removeCard() {
    this._cardItem.remove();
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => this._handleLikeCard(this));
    this._buttonDelete.addEventListener('click', () => this._handleDeleteCard(this));
    this._cardElement.addEventListener('click', () => this._handleClickCard(this._link, this._name));
  };

  getCard() {
    this._cardItem = this._getTemplate();
    this._cardElement.src = this._link;
    this._cardElement.alt = this._name;
    this._cardItem.querySelector('.card__title').textContent = this._name;
    this._cardItem.id = this._id;
    this._countLike.textContent = this._likes.length;

    if (this._owner._id === this._userId) {
      this._buttonDelete.classList.add('card__trash_active');
    };

    if (this._likes.find(el => el._id === this._userId)) {
      this._buttonLike.classList.add('card__like_active');
      this._myLike = true;
    };

    this._cardItem.myLike = this._myLike;

    this._setEventListeners();

    return this._cardItem;
  };
};
