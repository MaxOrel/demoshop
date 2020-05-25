class Cart {
  constructor() {

  }

  template() {
    const templateString = `<div class="cart">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your cart</span>
          <span class="badge badge-secondary badge-pill">3</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">Product name</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$200</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">Product name</h6>
              <small class="text-muted">Brief description 2</small>
            </div>
            <span class="text-muted">$100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">Product name</h6>
              <small class="text-muted">Brief description 3</small>
            </div>
            <span class="text-muted">$100</span>
          </li>
        </ul>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$400</strong>
          </li>
        </ul>

        <div class="card p-2 pull-right">
          <button id="makeOrderBtn" class="btn btn-success">Купить!</button>
        </div>
      </div>
    `;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

}