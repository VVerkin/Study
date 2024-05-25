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
    // Вычисляем секунды, минуты, часы
    const seconds = (Math.floor(timeRemaining / 1000 % 60)); // В секундах
    const minutes = (Math.floor(timeRemaining / 1000 / 60 % 60)); // В минутах
    const hours = (Math.floor(timeRemaining / 1000 / 60 / 60)); // В часах
    // Возвращаем все в виде объекта
    return {timeRemaining, seconds, minutes, hours};
  };

  const start = () => {
    const timer = getTimeRemaining();
    // Обновляем значения в верстке
    timerBlockHour.textContent = timer.hours;
    timerBlockMin.textContent = timer.minutes;
    timerBlockSec.textContent = timer.seconds;

    const intervalId = setTimeout(start, 1000);
    // Создаем условие, что бы таймер не уходил в минус, а остонавливался и показывал ноли
    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerBlockHour.textContent = '00';
      timerBlockMin.textContent = '00';
      timerBlockSec.textContent = '00';
    }
  };

  start();
};
// Вызываем ф-ю таймер и передаем время, когда он должен остановиться
timer('2024/05/21 21:45');
