'use strict';

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,
	getTotalPrice() {
		return this.calculateItemPrice();
	},
	add(name, price, amount = 1) {
		const good = {
			name,
			price,
			amount,
		};
		this.items.push(good);
		this.increaseCount(amount);
	},
	increaseCount(amount) {
		this.count += amount;
	},
	calculateItemPrice() {
		return this.items.reduce((acc, item) => {
			return acc + item.price * item.amount;
		}, 0);
	},
	clear() { 
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
	},
	print() {
		console.log(JSON.stringify(this.items));
		console.log(` Total price: ${this.getTotalPrice()}`);
		console.log(` Count: ${this.count}`);
	},

};
cart.add('вилка', 3);
cart.add('ложка', 4, 2);
cart.add('нож', 5, 3);
cart.print();