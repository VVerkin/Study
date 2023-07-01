'use strict';

const enterSum = +prompt('Введите сумму', 'руб.');
let tax = 0;

if (enterSum > 50000) {
  tax += (((enterSum - 50000) * 0.3) + ((50000 - 15000) * 0.2) + (15000 * 0.13));
  console.log(`Сумма налога составляет ${tax} руб.`);
} 

if (enterSum <= 50000 && enterSum >= 15000) {
  tax += (((enterSum - 15000) * 0.2) + (15000 * 0.13));
  console.log(`Сумма налога составляет ${tax} руб.`);
}

if (enterSum < 15000) {
  tax += enterSum * 0.13;
  console.log(`Сумма налога составляет ${tax} руб.`);
}