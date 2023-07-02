'use strict';

/* 
Третья задача:

Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра:
Общая сумма корзины
Количество товаров в корзине
Промокод
Правила и порядок (порядок важен!) начисления скидок:
Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

Порядок применения скидок должен соблюдаться
*/

const calculate = (basketAmount, goodsCount, promo) => {
  let totalPrice = basketAmount; {
    if (goodsCount > 10) {
      totalPrice = totalPrice *= 0.97;
    }

    if (totalPrice > 30000) {
      totalPrice = totalPrice = 30000 + (totalPrice - 30000) * 0.85;
    }

    if (promo === 'METHED') {
      totalPrice = totalPrice *= 0.9;
    }

    if (promo === 'G3H2Z1' && totalPrice > 2000) {
      totalPrice = totalPrice -= 500;
    }
    return totalPrice;
  }
}

console.log(calculate(100, 11));
console.log(calculate(31000, 9));
console.log(calculate(1000, 10, 'METHED'));
console.log(calculate(3000, 11, 'G3H2Z1'));