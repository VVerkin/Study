'use strict';

// Функционал скрыт в отдельном модуле IIFE
(() => {
  // Массив с вариантами ответа компьютера
  const evenOrOdd = ['четное', 'нечетное'];

  const game = () => {
    const balls = { // В замыкании хранится информация о количестве шариков:
      player: 5, // у игрока
      bot: 5, // у бота
    };
    return function start() {
      // Ф-я получает рандомное число от 0 до последнего эл-та  массива
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const computerChoice = getRandomInt(0, evenOrOdd.length - 1);
      // Выводим в консоль выбор компьютера
      console.log(`Компьютер выбрал: ${evenOrOdd[computerChoice]}`);
      // Ф-я определения победителя
      const getWinner = () => {
        // Получаем число поьзователя от 1 до имеющегося у него кол-ва шариков
        let userNumber = prompt(`Введи число от 1 до ${balls.player}`, '');
        // Если пользователь нажал отмену, то спрашиваем хочет ли он выйти
        if (userNumber === null) {
          const endGame = confirm('Точно хочешь выйти?');
          // Если нажал отмену, то возвращаемся в игру
          if (endGame === false) {
            return start();
          }
          // Если нажал "Ок", то выводим счет и завершаем игру
          alert(`Счет: игрок - ${balls.player}, 
            компьютер - ${balls.bot}`);
          return;
        }
        // Выполняем проверку ввода пользователя на число и диапазон имеющихся у
        if (isNaN(userNumber) || userNumber < 1 || userNumber > balls.player) {
          alert(`Введи число от 1 до ${balls.player}`);
        } else {
          userNumber = +userNumber;
          if (((userNumber % 2 === 0) && (computerChoice === 0)) ||
            ((userNumber % 2 !== 0) && (computerChoice === 1))) {
            alert(`Ты проиграл! 
              Компьютер выбрал ${evenOrOdd[computerChoice]}`);
            balls.bot += +userNumber;
            balls.player -= +userNumber;
            if (balls.player <= 0 || balls.bot >= 10) {
              alert(`Игра окончена! Компьютер победил!
                Счет: игрок: ${balls.player}, 
                  компьютер: ${balls.bot}`);
              return;
            } else {
              console.log(balls);
              return start();
            }
          } else {
            alert(`Ты выиграл! 
              Компьютер выбрал ${evenOrOdd[computerChoice]}`);
            balls.player += +userNumber;
            balls.bot -= +userNumber;
            if (balls.bot <= 0 || balls.player >= 10) {
              alert(`Игра окончена! Ты победил! Счет: игрок: ${balls.player}, 
                компьютер: ${balls.bot}`);
              return;
            } else {
              console.log(balls);
              return start();
            }
          }
        }
        return getWinner();
      };
      getWinner();
    };
  };
  window.marbls = game;
})();

// (() => {
//   const evenOrOdd = ['четное', 'нечетное'];

//   const game = () => {
//     const balls = {
//       player: 5,
//       bot: 5,
//     };
//     return function start() {
//       const getRandomInt = (min, max) => {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//       };
//       const computerChoice = getRandomInt(0, evenOrOdd.length - 1);
//       console.log(`Выбор компьютера: ${computerChoice}`);

//       const getUserNumber = () => {
//         let userNumber = prompt(`Введи число от 1 до ${balls.player}`, '');
//         if (userNumber === null) {
//           const endGame = confirm('Точно хочешь выйти?');
//           if (endGame === false) {
//             return getUserNumber();
//           }
//           alert(`Счет: игрок - ${balls.player}, 
//             компьютер - ${balls.bot}`);
//           return;
//         }
//         if (!isNaN(userNumber)) {
//           userNumber = +userNumber;
//           if ((userNumber > 0 && userNumber <= balls.player)) return userNumber;
//           alert(`Число должно быть от 1 до ${balls.player}`);
//         } else {
//           alert('Введи число');
//         }
//         return getUserNumber();
//       };
//       const userChoice = getUserNumber();
//       console.log(`Число игрока ${userChoice}`);


//       const getWinner = () => {
//         if (((userChoice % 2 === 0) && (computerChoice === 0)) ||
//           ((userChoice % 2 !== 0) && (computerChoice === 1))) {
//           alert(`Ты проиграл! Компьютер выбрал ${evenOrOdd[computerChoice]}`);
//           balls.bot += +userChoice;
//           balls.player -= +userChoice;
//           if (balls.player <= 1 || balls.bot >= 9) {
//             alert(`Игра окончена! Компьютер победил! Счет: игрок: ${balls.player}, 
//                 компьютер: ${balls.bot}`);
//             return;
//           } else {
//             console.log(balls);
//             return start();
//           }
//         } else {
//           alert(`Ты выиграл! Компьютер выбрал ${evenOrOdd[computerChoice]}`);
//           balls.player += +userChoice;
//           balls.bot -= +userChoice;
//           if (balls.bot <= 1 || balls.player >= 9) {
//             alert(`Игра окончена! Ты победил! Счет: игрок: ${balls.player}, 
//               компьютер: ${balls.bot}`);
//             return;
//           } else {
//             console.log(balls);
//             return start();
//           }
//         }
//       };
//       getWinner();
//     };
//   };
//   window.marbls = game;
// })();


