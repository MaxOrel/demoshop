
export default class Element {
  constructor(tempateSelector) {
    this._tempateSelector = tempateSelector;
  }
  
  _getTemplate() {
    // забираем размеку из HTML и клонируем элемент
      const productElement = document
      .querySelector(this._tempateSelector)
      .content
     	.firstElementChild
      .cloneNode(true);

      // console.dir(productElement);
    // вернём DOM-элемент карточки
      return productElement;
  }

}
