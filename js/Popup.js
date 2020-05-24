export class Popup {
  constructor() {
  }

  template() {
    const templateString = `<div class="popup">
        <div class="popup__box">
          <button class="popup__close" type="button">x</button>
          <div class="popup__body" id="popup-content"></div>
        </div>
      </div>
    `;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

}