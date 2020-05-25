const cardList = document.querySelector('#card-list');
const cartContainer = document.querySelector('#cart-container');

const popup = new Popup();

function createPopup (content) {
    popup.render(content); 
}

data.forEach(item => {
const product = new Product(item, cardList, createPopup);
console.log(product);
product.render();
})