'use strict';

(() => {
  const evenOdd = ['четное', 'нечетное'];

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
      const computerChoice = getRandomInt(0, evenOdd.length - 1);
      console.log(`Выбор компьютера: ${computerChoice}`);


      const getUserNumber = () => {
        let userNumber = prompt(`Введи число от 1 до  ${balls.player}`, '');
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
          if (userNumber => 1 || userNumber <= balls.player) return userNumber;
          alert(`Число должно быть от 1 до ${balls.player}`);
        } else {
          alert('Введи число');
        }
        return getUserNumber();
      };
      const userChoice = getUserNumber();
      console.log(userChoice);

      const getWinner = () => {
        if ((userChoice % 2 === 0 && computerChoice === 0) ||
          (userChoice % 2 !== 0 && computerChoice === 1)) {
          alert(`Ты проиграл! Компьютер выбрал ${evenOdd[computerChoice]}`);
          balls.bot += userChoice;
          balls.player -= userChoice;
        } else {
          alert(`Ты выиграл! Компьютер выбрал ${evenOdd[computerChoice]}`);
          balls.player += userChoice;
          balls.bot -= userChoice;
        }
        if (balls.bot < 1) {
          alert(`Игра окончена! Ты победил! Счет: 
          игрок:${balls.player}, компьютер:${balls.bot}`);
          return;
        } else if (balls.player < 1) {
          alert(`Игра окончена! Ты проиграл! Счет: 
          игрок:${balls.player}, компьютер:${balls.bot}`);
          return;
        }
        return start();
      };
      console.log(balls);
      getWinner();
    };
  };
  window.marbls = game;
})();


