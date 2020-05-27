class Product {
  constructor(item, container, callbackPopup, addToCart) {
    this.item = item;
    this.addToCart = addToCart;
    this.container = container;
    this.callbackPopup = callbackPopup;
    this.product = null;
    this.showProduct = this.showProduct.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  template() {
    const templateString = `<div class="col-lg-6" style="margin-bottom: 20px;">
      <div class="card">
        <div class="card-body">
          <h5 class="product-name card-title" ></h5>
          <p class="product-cost"></p>
          <button href="#" class="btn btn-primary showProduct">Подробнее</button>
          <button href="#" class="btn btn-warning buyProduct">В корзину</button>
        </div>
      </div>
    </div>`;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  render() {
    this.product = this.template();
    this.product.querySelector(".product-name").textContent = this.item.name;
    this.product.querySelector(".product-cost").textContent = this.item.cost;
    this.container.append(this.product);
    this.addListeners();
   
  }

  showProduct() {
    this.callbackPopup(this.item.text);
  }

  addProductToCart(){
    this.addToCart(this.item)
  }

  addListeners() {
    this.product.querySelector('.showProduct').addEventListener('click', this.showProduct)
    this.product.querySelector('.buyProduct').addEventListener('click', this.addProductToCart)
  }

  removeListener(){

  }

}