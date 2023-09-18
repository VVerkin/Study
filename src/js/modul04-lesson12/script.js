function game() { 
    const userChoice = prompt('Ваш ход! Камень, ножницы или бумага?,' ''); 
    const computerChoice = getRandomIntInclusive(0, 2); 
    const isDraw = userChoice === computerChoice; 
    const isUserWins = [0, 1, 2].includes(userChoice) && !isDraw && [0, 1].includes(computerChoice - userChoice); 
    const isComputerWins = !isUserWins && !isDraw; if (isUserWins) { console.log(Вы победили!); } 
    else if (isComputerWins) { console.log('Компьютер победил...'); } 
    else { console.log(‘Ничья’); } 
    if (confirm(“Хотите продолжить игру?”)) 
    { game(); } else { const gamesCount = +prompt('Сколько игр вы хотели бы сыграть?');
     for (let i = 0; i < gamesCount; i++) { game(); } 
     console.log(`Результат игр: Вы набрали ${i} очков.`); } 
    };
     game(); 