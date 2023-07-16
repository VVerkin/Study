'use strict';

/* 
Написать простой игровой бот "Угадай число", который умеет следующее:

Загадывает число от 1 до 100;
предлагает пользователю ввести свой вариант отгадки;
если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
если пользователь вводит правильное число, то бот выводит “Правильно!”;
если пользователь ввел не число, то выводит “Введи число!”;
если пользователь нажимает “Отмена”, то игра заканчивается. 
*/

const guessNumber = Math.floor(Math.random() * 100 + 1);
console.log(`Загаданное число ${guessNumber}`);


const getNumber = () => {

  while (true) {

    let userNumber = prompt('Введи загаданное число от 1 до 100', '');

    if (userNumber === null) {
      break;
    }

    userNumber = +userNumber;

    if (isNaN(userNumber)) {
      alert( 'Введи число' );
      // continue;
    } 

    if (userNumber < 1 || userNumber > 100) {
      alert( 'Число должно быть от 1 до 100' );
      continue;
    } 

    if (+userNumber === guessNumber) {
      alert('Правильно!');
      break;
      } else if (userNumber > guessNumber) {
        alert('Меньше');
      } else if (userNumber < guessNumber) {
        alert('Больше');
      }
  }
}

getNumber();







