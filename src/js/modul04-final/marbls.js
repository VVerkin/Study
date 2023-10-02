'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];

  const game = () => {
    const ballsNumber = {
      player: 5,
      bot: 5,
    };
    return function start() {
      // const getRandomInt = (min, max) => {
      //   min = Math.ceil(min);
      //   max = Math.floor(max);
      //   return Math.floor(Math.random() * (max - min + 1) + min);
      // };
      // const computerNumber = getRandomInt(0, 2);
      // console.log(`Случайное число: ${computerNumber}`);
      // const computerChoice = figures[computerNumber];
      // console.log(`Выбор компьютера: ${computerChoice}`);

      const getUserNumber = () => {
        let userNumber = prompt(`Введи число от 1 до  ${ballsNumber.player}`, '');
        if (userNumber === null) {
          const endGame = confirm('Точно хочешь выйти?');
          if (endGame === false) {
            return getUserNumber();
          }
          alert(`Счет: игрок - ${ballsNumber.player}, бот - ${ballsNumber.bot}`);
          return;
        } else if (userNumber < 1 || userNumber > ballsNumber.player) {
          alert(`Число должно быть от 1 до ${ballsNumber.player}`);
          return getUserNumber();
        }
        if (isNaN(userNumber)) {
          userNumber = +userNumber;
        } else {
          alert('Введи число');
        }
        return getUserNumber();
      };
      console.log(getUserNumber());

      // const getWinner = () => {
      //   const subtraction = computerNumber - userNumber;
      //   console.log(`разница: ${subtraction}`);

      //   if (subtraction === 0) {
      //     alert('Ничья');
      //     return start();
      //   } else if (subtraction === 1 || subtraction === -2) {
      //     alert(`Ты победил! Компьютер выбрал ${computerChoice}`);
      //     result.player += 1;
      //     return start();
      //   } else if (subtraction === -1 || subtraction === 2) {
      //     alert(`Ты проиграл! Компьютер выбрал ${computerChoice}`);
      //     result.computer += 1;
      //     return start();
      //   }
      //   console.log(result);
      // };
      // getWinner();
    };
  };
  window.marbls = game;
})();
