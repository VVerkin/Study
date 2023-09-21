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

  const computerChoice = figures[computerNumber];
  console.log(`Выбор компьютера: ${computerChoice}`);
  
  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const getUserNumber = () => {
        const userChoice = prompt(`Выбери: ${figures.join(', ')}`, '');
        console.log(`Выбор пользователя: ${userChoice}`);
        if (userChoice === null) {
          return;
        } else if (!figures.includes(userChoice.toLowerCase())) {
          alert('Можно выбирать только предложенные варианты');
          return getUserNumber();
        }
        return figures.indexOf(userChoice.toLowerCase());
      };
      const userNumber = getUserNumber();
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
