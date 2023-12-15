'use strict';

{
  const app = document.querySelector('#app');
  // Создаем переменную, которая будет содержать количество залов.
  let countArea = 0;
  // Ф-я создает стул
  const createSeat = i => {
    // На основе i создаем стул
    const seat = document.createElement('div');
    // Задаем ему класс
    seat.classList.add('seat');
    // Добавляем дата-атрибут
    seat.dataset.seatNumber = i;
    // Возвращаем стул 
    return seat;
  }

// Ф-я принимаем номер линии и сколько стульев в ряду - (y)
  const createLine = (countLine, y) => {
  // Создаем линю
  const line = document.createElement('div');
  // Задаем класс линии
  line.classList.add('line');
  // Добавляем дата-атрибут
  line.dataset.lineNumber = countLine;
  // с помощью цикла создадим переменную - кол-во стульев
  for (let i = 1; i <= y; i++) {
      // Создаем сиденье и вставляем в линию
      line.append(createSeat(i));
    }
    return line;
  };

  // Ф-я, которая создает залы
  // Принимает сколько у нас рядов -х и сколько стульев в ряду - у
  const createArea = (x, y) => {
    // Увеличиваем количество залов
    countArea += 1;
    // Создаем зал
    const area = document.createElement('div');
    // Добавляем класс для зала
    area.classList.add('area');
    // Добавляем дата-атрибут
    area.dataset.areaNumber = countArea;

     // С помощью цикла создаем ряды
     for (let i = 1; i <= x; i++) {
        area.append(createLine(i, y));
     }

    return area;

  };

  // Всавляем заллы, которые создаются в createArea в app
  app.append(createArea(5, 6));
  app.append(createArea(8, 6));
  app.append(createArea(6, 6));

// Навешаем событие на app (можно было и на зал) что бы не навешивать событие на каждый стул.
// Применим делегирование
  app.addEventListener('click', event => {
    const target = event.target;
    // Создаем условие, при котором событие сробатывает только при клике на стул
    if (target.classList.contains('seat')) {
        // Переменная для определения места и передачи в алерт
        const seat = target.dataset.seatNumber;
        // Переменная для определения ряда и передачи в алерт
        const line = target.closest('.line').dataset.lineNumber;
        // Переменная для определения зала и передачи в алерт
        const area = target.closest('.area').dataset.areaNumber;
        // Меняем цвет нажатого объекта
        target.style.backgroundColor = 'green';
        alert(`Ваш зал №${area} / ряд №${line} / место №${seat}`);
    }
});
}

