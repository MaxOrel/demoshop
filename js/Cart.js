import Element from "./Element.js";
import CartProduct from './CartProduct.js';
export default class Cart extends Element {
  constructor({container, createPopup},tempateSelector) {
    super(tempateSelector);
    this._container = document.querySelector(container);
    this._createPopup = createPopup;
    this._products = [];
  }

  generateCart() {
    this._cart = super._getTemplate();
    this._cart.querySelector('.badge').textContent = this._products.length;
    this._cart.querySelector('#total-amount').textContent = this._getTotalAmount();


    this._products.forEach(item => {
      const productCart = new CartProduct('#cart-product-template').genetateCartProduct(item);
      console.log(productCart)
      this._cart.querySelector('.list-group').append(productCart);
    })

    this._setListener()
    this._container.append(this._cart);
  } 

  _getTotalAmount(){
    return this._products.reduce((acc, item) => acc = acc + item.cost, 0)
  }

  addProduct(data){
    this._products.push(data);
    console.log(this._products)
    this._update()
  }

  _remove(){
    this._cart.remove();
  }

  _update(){
    this._remove();
    this.generateCart();
  }

  _makeOrder = () =>{
    console.log(this);
    
    this._createPopup('Покупка совершена');
    this._products = [];
    this._update();
  }

  _setListener(){
    this._cart.querySelector('#makeOrderBtn').addEventListener('click', this._makeOrder)
  }


}