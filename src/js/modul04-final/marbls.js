'use strict';

/*
- Игрок загадывает число и вводит его в prompt
Число от 1-го до количества имеющихся у
него шариков
- Бот рандомно угадывает чётное или нечётное
количество шариков
- Если угадал то забирает все шарики
загаданное количество шариков суммируются
к шарикам бота и вычитаются у игрока
- Если бот не угадал то это количество шариков
суммируются к шарикам игрока и вычитаются
у бота
- Проигрывает тот у кого закончились
шарики
*/

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
        let userNumber = '';
        // Цикл для запроса ввода данных от пользователя
        do {
          userNumber = prompt(`Введи число от 1 до ${balls.player}`, '');
          // Реализован выход по нажатию кнопки "Отмена"
          if (userNumber === null) {
            // Вопрос для подтверждения выхода
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
          /* Цикл выполняется, покапользователь вводит не число
          или число меньше 1 или болше имеющихся шариков
          */
        } while (isNaN(userNumber) ||
        userNumber < 1 || userNumber > balls.player);
        // Условие победы/проигрыша пользователя
        if ((userNumber % 2 === computerChoice)) {
          alert(`Ты проиграл! 
              Компьютер выбрал ${evenOrOdd[computerChoice]} число`);
          balls.bot += +userNumber;
          balls.player -= +userNumber;
          if (balls.player <= 1 || balls.bot >= 9) {
            balls.bot += balls.player;
            balls.player = 0;
            alert(`Игра окончена! Компьютер победил!
                Счет: игрок: ${balls.player}, 
                  компьютер: ${balls.bot}`);
            return;
          } else {
            return start();
          }
        } else {
          alert(`Ты выиграл! 
              Компьютер выбрал ${evenOrOdd[computerChoice]}`);
          balls.player += +userNumber;
          balls.bot -= +userNumber;
          if (balls.bot <= 1 || balls.player >= 9) {
            balls.player += balls.bot;
            balls.bot = 0;
            alert(`Игра окончена! Ты победил! Счет: игрок: ${balls.player}, 
                компьютер: ${balls.bot}`);
            return;
          } else {
            return start();
          }
        }
      };
      getWinner();
    };
  };
  window.marbls = game;
})();

