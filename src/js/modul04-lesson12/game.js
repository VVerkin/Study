'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const computerChoice = getRandomIntInclusive(0, 2);

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const userChoice = prompt('Выбери камень, ножницы или бумагу', '');
    };
  };
})();
