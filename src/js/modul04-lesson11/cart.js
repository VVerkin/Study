'use strict';

/*

Методы объекта cart не должны обращаться к объекту по имени

В объект cart добавьте сеттер setDiscount и свойство discount

Сеттер setDiscount будет принимать promocode

если promocode будет строка METHED, то в discount будет добавляться значение 15

если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21


метод calculateItemPrice должен учитывать скидку равную
процентному значению discount

*/
const cart = {
  items: [],
  count: 0,
  _discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this._discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this._discount = 21;
    }
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
    return this.items.reduce((acc, item) =>
      acc + ((item.price * ((100 - this._discount) / 100)) * item.amount), 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
    this._discount = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(` Total price: ${this.totalPrice} `);
    console.log(` Count: ${this.count} `);
  },

};

cart.setDiscount = 'METHED';
cart.add('вилка', 4);
cart.add('ложка', 4, 2);
cart.add('нож', 5, 3);
cart.print();

cart.clear();
console.log(cart);

cart.setDiscount = 'NEWYEAR';
cart.add('тарелка', 10, 2);
cart.add('кружка', 2, 2);
cart.print();
