'use strict';

/*
Создать объект rectangle, который описывает ширину и высоту
(свойства width и height) прямоугольника
Объект должен иметь 2 сеттера для записи ширины и высоты
и два геттера для получения периметра и площади прямоугольника

Сеттеры могут принимать только числа
Геттеры возвращают строку число + "см"
пример "40см"

По умолчанию значения высоты и ширины заданы 5 см
*/

const rectangle = {

  _width: 5,
  _height: 5,

  get perimeter() {
    return `${(this._width + this._height) * 2} см`;
  },

  get square() {
    return `${this._width * this._height} см2`;
  },

  set width(newWidth) {
    if (typeof newWidth === 'number') {
      return this._width;
    }
  },

  set height(newHeight) {
    if (typeof newHeight === 'number') {
      return this._height;
    }
  },
};

rectangle.newWidth = 100;
rectangle.newHeight = '456';

console.log(rectangle.perimeter);
console.log(rectangle.square);
