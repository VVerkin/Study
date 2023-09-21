'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const computerNumber = getRandomIntInclusive(0, 2);
  console.log(`Случайное число: ${computerNumber}`);

  const computerChoise = figures[computerNumber];
  console.log(`Выбор компьютера: ${computerChoise}`);
  
  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const userChoice = prompt(`Выбери: ${figures.join(', ')}`, '');
      const userNumber = figures.indexOf(userChoice);
      console.log(`Выбор пользователя: ${userChoice}`);
      console.log(`Число пользователя: ${userNumber}`);
      const subtraction = computerNumber - userNumber;
      console.log(`разница: ${subtraction}`);
      
      if (subtraction === 0) {
        alert('Ничья');
      } else if (subtraction === 1 || subtraction === -2) {
        alert('Ты победил');
        result.player += 1;
      } else {
        alert('Ты проиграл');
        result.computer += 1;
      }
      console.log(result);
    };
  };
  window.RPS = game;
})();
