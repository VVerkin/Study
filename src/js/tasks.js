'use strict';

// Задача 2

{
const rain = Math.round(Math.random());
console.log(rain);
if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}
}

// Задача 3

{
  const pointMath = +prompt('Введите кол-во баллов по математике:', '');
  const pointRusLang = +prompt('Введите кол-во баллов по русскому языку:', '');
  const pointInformatics = +prompt('Введите кол-во баллов по информатике:', '');
  const pointSum = (pointMath + pointRusLang + pointInformatics);
  console.log(pointSum);
  if (pointSum >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
  } else {
    console.log('Вы не поступили, попробуйте платное обучение!');
  }
}

// Задача 4

{
  const cashBack = +prompt('Сколько денег вы хотите снять', 'руб.');
  if (cashBack % 100 == 0) {
    console.log('Сумма готова к выдачи!');
  } else {
    console.log('Сумму нельзя выдать!');
  }
}


