'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];
  const figuresEng = ['rock', 'scissors', 'paper'];


  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const dict = {
      youWin: ['you win', 'ты выиграл'],
      youLose: ['you lose', 'ты проиграл'],
      draw: ['draw', 'ничья'],
      quit: ['quit', 'выйти'],
      score: ['score', 'счет'],
      player: ['player', 'игрок'],
      computer: ['computer', 'компьютер'],
    };
    const lang = language === 'EN' || language === 'ENG' ?
    figuresEng : figures;
    console.log(lang);

    return function start() {
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const computerNumber = getRandomInt(0, 2);
      console.log(`Случайное число: ${computerNumber}`);
      const computerChoice = lang[computerNumber];
      console.log(`Выбор компьютера: ${computerChoice}`);

      const getUserAnswer = () => {
        const userAnswer = prompt(`${lang.join(', ')} ?`, '');
        if (userAnswer === null) {
          const endGame = language === 'EN' || language === 'ENG' ?
          confirm('Do you want to quit the game?') :
          confirm('Точно хочешь выйти?');

          if (endGame === false) {
            return getUserAnswer();
          }
          if (language === 'EN' || language === 'ENG') {
            alert(`Score: player - ${result.player}, computer - ${result.computer}`);
          } else {
            alert(`Счет: игрок - ${result.player}, компьютер - ${result.computer}`);
          }
          return;
        }
        const userChoice = lang.find(item =>item.startsWith(userAnswer.toLowerCase()));
        console.log(`Выбор игрока: ${userChoice}`);

        if (!lang.includes(userChoice) || userAnswer === '') {
          return getUserAnswer();
        }
        return lang.indexOf(userChoice);
      };
      const userNumber = getUserAnswer();
      console.log(`Число игрока: ${userNumber}`);

      const getWinner = (lang) => {
        const subtraction = computerNumber - userNumber;
        console.log(`разница: ${subtraction}`);

        if (subtraction === 0) {
          if (language === 'EN' || language === 'ENG') {
            alert('Draw');
          } else {
            alert('Ничья');
          }
          return start();
        } else if (subtraction === 1 || subtraction === -2) {
          if (language === 'EN' || language === 'ENG') {
            alert(`You win! The computer chose ${computerChoice}`);
          } else {
            alert(`Ты победил! Компьютер выбрал ${computerChoice}`);
          }
          result.player += 1;
          return start();
        } else if (subtraction === -1 || subtraction === 2) {
          if (language === 'EN' || language === 'ENG') {
            alert(`You lose! The computer chose ${computerChoice}`);
          } else {
            alert(`Ты проиграл! Компьютер выбрал ${computerChoice}`);
          }
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
