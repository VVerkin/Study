'use strict';

/* 

Получите от пользователя 2 числа

Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов

Не используйте Math.max и Math.min

*/

const userNumber1 = +prompt('Введите первое число', '');
const userNumber2 = +prompt('Введите второе число', '');

const getMinNumber = (userNumber1, userNumber2) => {
  let minNumber = (userNumber1 > userNumber2) * userNumber2 + (userNumber2 > userNumber1) * userNumber1;
  return minNumber;
}
console.log(getMinNumber(userNumber1, userNumber2));