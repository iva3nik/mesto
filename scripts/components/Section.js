import { Card } from './Card.js';
import { placeInput, linkPlace } from '../utils/constants.js';

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItem() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  setItem(element) {
    this._container.append(element);
  }

  addItem() {
    const item = {name: placeInput.value, link: linkPlace.value};
    const newCard = new Card(item, '#card').getCard();
    this._container.prepend(newCard);
  }

}
