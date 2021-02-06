import Cart from './Cart.js';
import Product from "./Product.js";
import Popup from "./Popup.js";
import {data as productData} from "./data.js"
import Section from './Section.js';

const popup = new Popup('#popup-template');

const createPopup = function (content){
	popup.render(content);
}

function renderProducts(product){
	const newProduct = new Product({
		data: product,
		callbackPopup: createPopup,
		addToCart: callbackAddToCart
	}, '#product-template').genetateCard();

	productList.setItem(newProduct);
}

const productList = new Section({
	data: productData, 
	renderer: renderProducts
	},'#card-list')

const cart = new Cart({container:'#cart-container', createPopup}, '#cart-template');


function callbackAddToCart(product){
	cart.addProduct(product)
}

cart.generateCart()
productList.renderItems();

// data.forEach( function(productData) {
// 	const product = new Product(productData, '#product-template', createPopup).render();
// })


// const buttonCard = document.querySelector('.buyProduct');
// buttonCard.addEventListener('click',alarm('Привет!!!'))