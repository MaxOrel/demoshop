export default class Popup {
  constructor(tempateSelector) {
    this._tempateSelector = tempateSelector;
  }

  _getTemplate() {
    // забираем размеку из HTML и клонируем элемент
      const popup = document
      .querySelector(this._tempateSelector)
      .content
      .querySelector('.popup')
      .cloneNode(true);


    // вернём DOM-элемент карточки
      return popup;
  }

  render(content) {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._popup = this._getTemplate();
    // Добавим данные
    this._popup.querySelector('#popup-content').textContent = content;
    
    this._setEvenetListener();

    document.querySelector('body').append(this._popup);
  } 

  close = () => {
    this._popup.remove();
    this._removeEvenetListener();
  }
  
  _setEvenetListener(){
    this._popup.querySelector('.popup__close').addEventListener('click', this.close);
  }

  _removeEvenetListener(){
    this._popup.querySelector('.popup__close').removeEventListener('click', this.close);
  }
}