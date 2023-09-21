'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomNumber = getRandomIntInclusive(0, 2);
  console.log(`Случайное число: ${randomNumber}`);
  
  const computerChoise = figures[randomNumber];
  console.log(`Выбор компьютера: ${computerChoise}`);
  
  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const userChoice = prompt(`Выбери: ${figures.join(', ')}`, '');
    };
  };
  window.RPS = game;
})();
