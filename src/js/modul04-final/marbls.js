'use strict';

(() => {
  const evenOrOdd = ['четное', 'нечетное'];

  const game = () => {
    const balls = {
      player: 5,
      bot: 5,
    };
    return function start() {
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const computerChoice = getRandomInt(0, evenOrOdd.length - 1);
      console.log(`Выбор компьютера: ${computerChoice}`);

      const getUserNumber = () => {
        let userNumber = prompt(`Введи число от 1 до ${balls.player}`, '');
        if (userNumber === null) {
          const endGame = confirm('Точно хочешь выйти?');
          if (endGame === false) {
            return getUserNumber();
          }
          alert(`Счет: игрок - ${balls.player}, 
          компьютер - ${balls.bot}`);
          return;
        }
        if (userNumber < 1 || userNumber > balls.player) {
          alert(`Число должно быть от 1 до ${balls.player}`);
          return getUserNumber();
        }
        if (!isNaN(userNumber)) {
          userNumber = +userNumber;
          if (userNumber > 0 || userNumber <= balls.player) return userNumber;
          alert(`Число должно быть от 1 до ${balls.player}`);
        } else {
          alert('Введи число');
        }
        return getUserNumber();
      };
      const userChoice = getUserNumber();
      console.log(userChoice);


      const getWinner = () => {
        if (balls.bot >= 1 && balls.player >= 1) {
          if ((userChoice % 2 === 0 && computerChoice === 0) ||
          (userChoice % 2 !== 0 && computerChoice === 1)) {
            alert(`Ты проиграл! Компьютер выбрал ${evenOrOdd[computerChoice]}`);
            balls.bot += userChoice;
            balls.player -= userChoice;
            return start();
          } else {
            alert(`Ты выиграл! Компьютер выбрал ${evenOrOdd[computerChoice]}`);
            balls.player += userChoice;
            balls.bot -= userChoice;
            return start();
          }
        } else {
          alert(`Игра окончена! Счет: игрок: ${balls.player}, 
          компьютер: ${balls.bot}`);
          return;
        }
      };
      getWinner();
    };
  };
  window.marbls = game;
})();


