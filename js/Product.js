import Element from "./Element.js";
export default class Product extends Element{
  constructor({data , callbackPopup, addToCart}, tempateSelector) {
    super(tempateSelector)
    this._data = data;
    this._callbackPopup = callbackPopup;
    this._addProductToCart = addToCart;
    this._product = null;
  }

  genetateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._product = super._getTemplate();
  
    // Добавим данные
    this._product.querySelector('.product-name').textContent = this._data.name;
    this._product.querySelector('.product-cost').textContent = this._data.cost;
  
    this._setEvenetListener()
    // Вернём элемент наружу
    return this._product;
  } 

  _showProduct = () => {
   this._callbackPopup(this._data.text)
  }
  _addToCart = () =>{
    this._addProductToCart(this._data);
  }

  _setEvenetListener(){
    this._product.querySelector('.showProduct').addEventListener('click',this._showProduct);
    this._product.querySelector('.buyProduct').addEventListener('click',this._addToCart)
  }

}