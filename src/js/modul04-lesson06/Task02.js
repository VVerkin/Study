'use strict';

/* 

Напишите функцию getAverageValue
для получения среднеарифметического значения
с округлением в меньшую сторону до целого числа

С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

*/

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (cashbox) => {
  let sum = 0; // переменная, в которой будет храниться сумма всех чисел массива
  for (let i = 0; i < cashbox.length; i++) { // инициализируем цикл
    sum += cashbox[i]; // на каждой итерации прибавляем к сумме значение текущего элемента массива
  }
  return sum / cashbox.length; // возвращаем среднее арифметическое значение
};

console.log(getAverageValue(allCashbox));