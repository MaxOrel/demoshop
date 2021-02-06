import Element from "./Element.js";

export default class CartProduct extends Element{
  constructor(tempateSelector) {
    super(tempateSelector)
  }

  genetateCartProduct(data) {
    this._product = super._getTemplate();
    this._product.querySelector('.list-group-item__name').textContent = data.name;
    this._product.querySelector('.list-group-item__price').textContent = `$${data.cost}`;

    return this._product;
  } 

}