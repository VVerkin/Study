'use strict';

/* 
Переписать игровой бот для игры "Угадай число"
Функционал остаётся прежний, но вместо цикла (while или for) используйте рекурсию
*/

const guessNumber = Math.floor(Math.random() * 100 + 1);
console.log(`Загаданное число ${guessNumber}`);


const getNumber = () => {
  let userNumber = prompt('Введи загаданное число от 1 до 100', '');

  if (userNumber === null) {
    return;
  } else if (userNumber < 1 || userNumber > 100) {
    alert('Число должно быть от 1 до 100');
    return getNumber();
  };

  if (!isNaN(userNumber)) {
    userNumber = +userNumber;

    if (userNumber < guessNumber) {
      alert('Больше');
    } else if (userNumber > guessNumber) {
      alert('Меньше');
    } else if (userNumber === guessNumber) {
      alert('Правильно!');
      return userNumber;
    }
  } else {
    alert('Введи число');
  }
  return getNumber();
};

console.log(getNumber());
