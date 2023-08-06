'use strict';

/* 

Объект будет содержать следующие свойства:

items = пустой массив - это товары
totalPrice = 0 - общая стоимость корзины
count = 0 - количество товаров
и методы

getTotalPrice - получить общую стоимость товаров
add - добавить товар
increaseCount - увеличить количество товаров
calculateItemPrice - посчитать общую стоимость товаров
clear - очистить корзину
print - распечатать корзину


Далее описание каждого метода

getTotalPrice()

метод возвращает значение свойства totalPrice



calculateItemPrice()

пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice 



increaseCount()

Принимает один параметр(число)

Увеличивает свойство count на это число



add()

Принимает три параметра:

название товара
цену товара
количество товара (опциональный параметр, по умолчанию 1 товар)
этот метод формирует объект из полученных параметров и добавляет его в свойство items

так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные



clear()

Очищает полностью нашу корзину, возвращает все значения в изначальные



print()

Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины







Для проверки работы функционала добавить 3 или более товаров в корзину



После вызвать метод print для вывода информации в консоль

*/

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,

	/*getTotalPrice() {
		return this.totalPrice;
	},*/

	get totalPrice() {
		return this.calculateItemPrice();
	},

	add(name, price, amount = 1) {
		const item = {
			name,
			price,
			amount,
		};
		this.items.push(item);
		this.increaseCount(amount);
		// this.calculateItemPrice();
	},

	increaseCount(amount) {
		this.count += amount;
	},

	calculateItemPrice() {
		// this.totalPrice = this.items.reduce((acc, item) => acc+ (item.price * item.amount), 0);
		return this.items.reduce((acc, item) => acc+ (item.price * item.amount), 0);
	},

	clear() { 
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
	},

	print() {
		console.log(JSON.stringify(this.items));
		console.log(` Total price: ${this.totalPrice} `);
		console.log(` Count: ${this.count} `);
	},

};


cart.add('вилка', 3);
cart.add('ложка', 4, 2);
cart.add('нож', 5, 3);
cart.totalPrice = 10;
cart.print();