const timer = deadline => {
    const timerBlockHour = document.querySelector('.tiner__block_hour');
    const timerBlockMin = document.querySelector('.tiner__block_min');
    const timerBlockSec = document.querySelector('.tiner__block_sec');
  
    const getTimeRemaining = () => {
      // Дата, когда функция должна завершить свое выполнение и сразу получаем от нее таймстемп
      const dateStop = new Date(deadline).getTime();
      // Получаем текущую дату
      const dateNow = Date.now();
      console.log(dateNow);
      // Ролучаем время, по истечение которгого таймер остановится
      const timeRemaining = dateStop - dateNow;
  
    const seconds = (Math.floor(timeRemaining / 1000 % 60)); // В секундах
    const minutes = (Math.floor(timeRemaining / 1000 / 60 % 60)); // В минутах
    const hours = (Math.floor(timeRemaining / 1000 / 60 / 60)); // В часах

    return {timeRemaining, seconds, minutes, hours};
    };

  const start = () => {
    const timer = getTimeRemaining();

    timerBlockHour.textContent = timer.hours;
    timerBlockMin.textContent = timer.minutes;
    timerBlockSec.textContent = timer.seconds;
  };

  start();
};
  
timer('2024/04/20 22:00');
