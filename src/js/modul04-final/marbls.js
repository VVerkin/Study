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
        if (!isNaN(userNumber)) {
          userNumber = +userNumber;
          if ((userNumber > 0 && userNumber <= balls.player)) return userNumber;
          alert(`Число должно быть от 1 до ${balls.player}`);
        } else {
          alert('Введи число');
        }
        return getUserNumber();
      };
      const userChoice = getUserNumber();
      console.log(`Число игрока ${userChoice}`);


      const getWinner = () => {
        if (((userChoice % 2 === 0) && (computerChoice === 0)) ||
          ((userChoice % 2 !== 0) && (computerChoice === 1))) {
          alert(`Ты проиграл! Компьютер выбрал ${evenOrOdd[computerChoice]}`);
          balls.bot += +userChoice;
          balls.player -= +userChoice;
          if (balls.player <= 1 || balls.bot >= 9) {
            alert(`Игра окончена! Компьютер победил! Счет: игрок: ${balls.player}, 
                компьютер: ${balls.bot}`);
            return;
          } else {
            console.log(balls);
            return start();
          }
        } else {
          alert(`Ты выиграл! Компьютер выбрал ${evenOrOdd[computerChoice]}`);
          balls.player += +userChoice;
          balls.bot -= +userChoice;
          if (balls.bot <= 1 || balls.player >= 9) {
            alert(`Игра окончена! Ты победил! Счет: игрок: ${balls.player}, 
              компьютер: ${balls.bot}`);
            return;
          } else {
            console.log(balls);
            return start();
          }
        }
      };
      getWinner();
    };
  };
  window.marbls = game;
})();


