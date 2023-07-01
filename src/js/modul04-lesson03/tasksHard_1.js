'use strict';

const enterSum = +prompt('Введите сумму', 'руб.');

if (enterSum >= 50000) {
  console.log(`Сумма налога составляет ${enterSum * 0.3} руб.`);
} 

if (enterSum < 50000 && enterSum >= 15000) {
  console.log(`Сумма налога составляет ${enterSum * 0.2} руб.`);
} 

if (enterSum < 15000) {
  console.log(`Сумма налога составляет ${enterSum * 0.13} руб.`);
}

