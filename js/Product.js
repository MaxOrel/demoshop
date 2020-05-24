export class Product {
  constructor() {

  }

  template() {
    const templateString = `<div class="col-lg-6" style="margin-bottom: 20px;">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title" id="product-name"></h5>
          <p id="product-cost"></p>
          <button href="#" id="showProduct" class="btn btn-primary">Подробнее</button>
          <button href="#" id="buyProduct" class="btn btn-warning">В корзину</button>
        </div>
      </div>
    </div>`;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }
}