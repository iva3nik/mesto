export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameUser = document.querySelector(nameSelector);
    this._aboutUser = document.querySelector(aboutSelector);
    this._avatarUser = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameUser.textContent,
      about: this._aboutUser.textContent,
      avatar: this._avatarUser.url
    };
  }

  setUserInfo({ name, about }) {
    this._nameUser.textContent = name;
    this._aboutUser.textContent = about;
  }
}
