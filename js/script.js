const cardList = document.querySelector('#card-list');
const cartContainer = document.querySelector('#cart-container');

const popup = new Popup();
const cart = new Cart(cartContainer, createPopup);
cart.render();

function createPopup (content) {
    popup.render(content); 
}

function addToCart(product){
    cart.addProduct(product)
}


data.forEach(item => {
const product = new Product(item, cardList, createPopup, addToCart);
console.log(product);
product.render();
})