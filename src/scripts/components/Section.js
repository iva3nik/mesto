export default class Section {
  constructor(containerSelector) {
    this._container = document.querySelector(containerSelector);
  }

  appendItem(element) {
    this._container.append(element);
  }

  prependItem(element) {
    this._container.prepend(element);
  }
}
