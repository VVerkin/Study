'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const computerNumber = getRandomInt(0, 2);
      console.log(`Случайное число: ${computerNumber}`);
      const computerChoice = figures[computerNumber];
      console.log(`Выбор компьютера: ${computerChoice}`);

      const getUserAnswer = () => {
        const userAnswer = prompt(`Выбери: ${figures.join(', ')}`, '');
        if (userAnswer === null) {
          const endGame = confirm('Точно хочешь выйти?');
          if (endGame === false) {
            return getUserAnswer();
          }
          alert(`Счет: игрок - ${result.player}, компьютер - ${result.computer}`);
          return;
        }
        const userChoice = figures.find(item =>item.startsWith(userAnswer.toLowerCase()));
        console.log(`Выбор игрока: ${userChoice}`);

        if (!figures.includes(userChoice)) {
          alert('Можно выбирать только предложенные варианты');
          return getUserAnswer();
        }

        return figures.indexOf(userChoice);
      };
      const userNumber = getUserAnswer();
      console.log(`Число игрока: ${userNumber}`);

      const getWinner = () => {
        const subtraction = computerNumber - userNumber;
        console.log(`разница: ${subtraction}`);

        if (subtraction === 0) {
          alert('Ничья');
          return start();
        } else if (subtraction === 1 || subtraction === -2) {
          alert(`Ты победил! Компьютер выбрал ${computerChoice}`);
          result.player += 1;
          return start();
        } else if (subtraction === -1 || subtraction === 2) {
          alert(`Ты проиграл! Компьютер выбрал ${computerChoice}`);
          result.computer += 1;
          return start();
        }
        console.log(result);
      };
      getWinner();
    };
  };
  window.RPS = game;
})();
