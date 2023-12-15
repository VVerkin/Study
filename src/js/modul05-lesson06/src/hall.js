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
  app.append(createArea(2, 3));
  app.append(createArea(2, 3));
  app.append(createArea(2, 3));
}

