'use strict';

(() => {
  // const figures = ['камень', 'ножницы', 'бумага'];

  const game = () => {
    const balls = {
      player: 5,
      bot: 5,
    };
    console.log(balls);
    return function start() {
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const computerNumber = getRandomInt(1, `${balls.player}`);
      console.log(`Случайное число: ${computerNumber}`);
      if (computerNumber % 2 === 0) {
        console.log(`четное`);
      } else {
        console.log(`не четное`);
      }

      const getUserNumber = () => {
        const userNumber = prompt(`Введи число от 1 до  ${balls.player}`, '');
        if (userNumber === null) {
          const endGame = confirm('Точно хочешь выйти?');
          if (endGame === false) {
            return getUserNumber();
          }
          alert(`Счет: игрок - ${balls.player}, бот - ${balls.bot}`);
          return;
        } else if (userNumber < 1 || userNumber > balls.player) {
          alert(`Число должно быть от 1 до ${balls.player}`);
          return getUserNumber();
        }
        if (isNaN(userNumber)) {
          alert('Введи число');
        } else {
          return +userNumber;
        }
        return getUserNumber();
      };
      const playerNumber = getUserNumber();
      console.log(playerNumber);

      const getWinner = () => {
        if (balls.bot > 0 && balls.player > 0) {
          if ((playerNumber % 2 === 0 && computerNumber % 2 === 0) ||
          (playerNumber % 2 !== 0 && computerNumber % 2 !== 0)) {
            alert('Компьютер угадал!');
            balls.bot += playerNumber;
            balls.player -= playerNumber;
          } else {
            alert('Компьютер не угадал!');
            balls.player += playerNumber;
            balls.bot -= playerNumber;
          }
        } else {
          alert('игра закончена!');
        }
        return start();
      };
      console.log(balls);
      getWinner();
    };
  };
  window.marbls = game;
})();


