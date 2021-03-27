import { openPopup } from '../utils/utils.js';
import { popupView, popupImage, popupAbout } from '../utils/constants.js';

export class Card {
  constructor(item, selector) {
    this._selector = selector;
    this._link = item.link;
    this._name = item.name;
  };

  _getTemplate() {
    this._cardTemplate = document
      .querySelector(this._selector).content
      .querySelector('.card').cloneNode(true);
    this._cardElement = this._cardTemplate.querySelector('.card__element');
    this._buttonLike = this._cardTemplate.querySelector('.card__like');
    this._buttonDelete = this._cardTemplate.querySelector('.card__trash');

    return this._cardTemplate;
  }

  _like() {
    this._buttonLike.classList.toggle('card__like_active');
  };

  _handleDeleteCard() {
    this._cardItem.remove();
  };

  _handlePreviewPicture() {
    openPopup(popupView);
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupAbout.textContent = this._name;
  };

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => this._like());
    this._buttonDelete.addEventListener('click', () => this._handleDeleteCard());
    this._cardElement.addEventListener('click', () => this._handlePreviewPicture());
  };

  getCard() {
    this._cardItem = this._getTemplate();
    this._cardElement.src = this._link;
    this._cardElement.alt = this._name;
    this._cardItem.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();

    return this._cardItem;
  };
};
