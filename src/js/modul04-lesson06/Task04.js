'use strict';

/*
Напишите функцию getAveragePriceGoods

для получения средней цены товара

Дан многомерный  массив:

.const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
Необходимо посчитать среднюю стоимость одного товара в магазине.

*/

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (cashbox) => {
  let sumAverageChek = 0;

  for (let i = 0; i < cashbox.length; i++) {
    sumAverageChek  += (cashbox[i][1] / cashbox[i][0]);
  }
  return (sumAverageChek / cashbox.length).toFixed(2);
}
console.log(getAveragePriceGoods(allCashbox));