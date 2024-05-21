const timer = deadline => {
  const timerBlockHour = document.querySelector('.timer__block_hour');
  const timerBlockMin = document.querySelector('.timer__block_min');
  const timerBlockSec = document.querySelector('.timer__block_sec');

  const getTimeRemaining = () => {
    // Дата, когда функция должна завершить свое выполнение и сразу получаем от нее таймстемп
    const dateStop = new Date(deadline).getTime();
    // Получаем текущую дату
    const dateNow = Date.now();
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

    const intervalId = setTimeout(start, 1000);

    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerBlockHour.textContent = '00';
      timerBlockMin.textContent = '00';
      timerBlockSec.textContent = '00';
    }
  };

  start();
};

timer('2024/05/21 21:45');
