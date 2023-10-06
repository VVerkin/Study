'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];
  const figuresEng = ['rock', 'scissors', 'paper'];


  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const dictEng = {
      youWin: 'you win',
      youLose: 'you lose',
      draw: 'draw',
      quit: 'quit',
      score: 'score',
      player: 'player',
      computer: 'computer',
      choice: 'choice',
    };
    const dictRu = {
      youWin: 'ты выиграл',
      youLose: 'ты проиграл',
      draw: 'ничья',
      quit: 'выйти',
      score: 'счет',
      player: 'игрок',
      computer: 'компьютер',
      choice: 'выбрал',
    };

    const lang = language === 'EN' || language === 'ENG' ?
    figuresEng : figures;
    console.log(lang);
    const dict = language === 'EN' || language === 'ENG' ?
    dictEng : dictRu;
    console.log(dict);

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
          const endGame = confirm(`${dict.quit}?`);

          if (endGame === false) {
            return getUserAnswer();
          }
            alert(`${dict.score}: ${dict.player} - ${result.player}, ${dict.computer} - ${result.computer}`);
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
            alert(`${dict.draw}!`);
          return start();
        } else if (subtraction === 1 || subtraction === -2) {
            alert(`${dict.youWin}! ${dict.computer} ${dict.choice}: ${computerChoice}`);
          result.player += 1;
          return start();
        } else if (subtraction === -1 || subtraction === 2) {
            alert(`${dict.youLose}! ${dict.computer} ${dict.choice}: ${computerChoice}`);
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
