'use strict';

// Получаем со страницы контейнер
const container = document.querySelector('.container');
// Получим обертки session и local Storage (левые и правые элементы)
const session = document.querySelector('.session-storage');
const local = document.querySelector('.local-storage');

// Получим кнопочки "сбросить"
const resetSession = document.querySelector('.reset-session');
const resetLocal = document.querySelector('.reset-local');
// На контейнер навешиваем событие change и получаем event
container.addEventListener('change', e => {
  // event и его значение выводим в консоль
  // Теперь при нажатии на элемнты внутри контейнера (например цвет) 
  // Их значения будут передаваться в консоль
  console.log(e.target.value);

  // При смене change нужно будет определять таргет
  const target = e.target;
  // Получим кого-то из родителей (у них есть рамки)
  // (это могут быть session или local storage, у них есть общий класс storage)
  const parent = target.closest('.storage');
  // У родителя меням стиль (фон) на тот, который мы выберем в поле color
  parent.style.backgroundColor = parent.color.value;
  // У родителя меням стиль (размер шрифта) на тот, который мы выберем в поле font-size
  // Свойство записано через дефис, поэтому храним его в виде строки в квадратных скобках
  parent.style.fontSize = parent['font-size'].value + 'px';
  // Теперь у нас меняются фон и размер шрифта при выборе их в соотв. полях

  // Определяем в каком из блоков происходит событие
  if (parent === session) {
    console.log('session');
    // Отправляем в sessionStorage поле, которое поменялось
    sessionStorage.setItem(target.name, target.value);
  }

  if (parent === local) {
    console.log('local');
    // Отправляем в localStorage поле, которое поменялось
    localStorage.setItem(target.name, target.value);
  }
});

// Теперь пишем функцию, что бы забирать данные из ss и ls
// Функция при загрузки страницы запускается и инициализируется 
// подхватывая необходимые стили
const init = () => {
  /* обращаемся к session, у него есть font-size, сразу задаем value, 
  что бы значение поменялось и забираем его из session storage*/
  session['font-size'].value = sessionStorage.getItem('font-size') ||
    session['font-size'].value;
  // То же самое проделываем и для color
  session.color.value = sessionStorage.getItem('color') ||
    session.color.value;
  /* При запуске в первый раз значений может не быть в session или 
  local storage, поэтому добавляем условия (или) с новой строки, в которых 
  прописываем  исходные значеения,  если их не получили. */

  // Аналогично все делаем и для local
  local['font-size'].value = localStorage.getItem('font-size') ||
    local['font-size'].value;
  local.color.value = localStorage.getItem('color') ||
    local.color.value;

  // Значения подтянулись, но пока не применяются к самой странице.
  // Для этого нужно прописать для самих элементов данные стили. Как выше делали для parent
  session.style.backgroundColor = session.color.value;
  session.style.fontSize = session['font-size'].value + 'px';

  local.style.backgroundColor = local.color.value;
  local.style.fontSize = local['font-size'].value + 'px';

  /* Теперь при обнавлении у нас стили в session и local storage остаются неизменны.
  НО! Если открыть новую вкладку, то стили в session storage обнулятся. А в local - все останется как и было*/
};

// Навесим обработчики события на кнопки "сбросить" для очистки форм
resetSession.addEventListener('click', () => {
  sessionStorage.clear();
  // Сбрасываем все значения с полей формы
  session.reset();
  // Вызываем ф-ю init для обновления при нажатии на кнопку
  init();
});
resetLocal.addEventListener('click', () => {
  localStorage.clear();
  local.reset();
  init();
});
init();