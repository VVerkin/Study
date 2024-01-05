'use strict';

const form = document.querySelector('.my-form');

// Ф-я, которая будет отправлять данные (data) на сервер
const sentData = data => console.log('Отправка: ', data);

form.addEventListener('submit', e => {
  // Убираем стандартное поведение браузера
  e.preventDefault();
  // Создаем массив чекбоксов
  const checkboxes = new Set();

  // Преобразовываем form.elements в массив и перебераем его
  [...form.elements].forEach(elem => {
    // Если тип элемента - чекбокс
    if (elem.type === 'checkbox') {
      // Добавляем элемент в массив
      checkboxes.add(elem.name);
    }
  });
  // Создаем объект
  const data = {};

  const formData = new FormData(e.target);

  // Перебераем FormData, получаем массив [name, value], который деструктурируем
  for (const [name, value] of formData) {
    // Перебераем если такой name есть, то
    if (checkboxes.has(name)) {
      // Проверяем data[name] на массив
      if (Array.isArray(data[name])) {
        // Если data[name] массив, то пушим туда данные
        data[name].push(value);
      } else {
        // Если data[name] НЕ массив, то создаем массив? вкотором уже будет value
        data[name] = [value];
      }
    } else {
      // Собираем объект
      data[name] = value;
    }
  }

  sentData(JSON.stringify(data));
});
