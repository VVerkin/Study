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

  // Сохраним наши данные как объект
  // Все свойства возьмем у родителей
  const style = {
    backgroundColor: parent.color.value,
    fontSize: parent['font-size'].value,
  };

  // Теперь используем сохраненные в объект данные для вывода на страницу
  parent.style.backgroundColor = style.backgroundColor;
  parent.style.fontSize = style.fontSize + 'px';
  // Теперь у нас меняются фон и размер шрифта при выборе их в соотв. полях

  // Определяем в каком из блоков происходит событие
  if (parent === session) {
    console.log('session');
    // Отправляем в sessionStorage поле, которое поменялось и конвертируем объект
    sessionStorage.setItem('session-style', JSON.stringify(style));
  }

  if (parent === local) {
    console.log('local');
    // Отправляем в localStorage поле, которое поменялось и конвертируем объект
    sessionStorage.setItem('session-style', JSON.stringify(style));
    localStorage.setItem('local-style', JSON.stringify(style));
  }
});

// Теперь пишем функцию, что бы забирать данные из ss и ls
// Функция при загрузки страницы запускается и инициализируется 
// подхватывая необходимые стили
const init = () => {
  // Создадим объект, который получаем из sesionStorage и распарсиваем полученный из ss объект
  const sessionStyle = JSON.parse(sessionStorage.getItem('session-style'));
  console.log('sessionStyle:', sessionStyle);

  /* обращаемся к session, у него есть font-size, сразу задаем value, 
  что бы значение поменялось и забираем его из session storage*/
  session['font-size'].value = sessionStyle?.fontSize ||
    session['font-size'].value;
  // То же самое проделываем и для color
  session.color.value = sessionStyle?.backgroundColor ||
    session.color.value;
  /* При запуске в первый раз значений может не быть в session или 
  local storage, поэтому добавляем условия (или) с новой строки, в которых 
  прописываем  исходные значеения,  если их не получили. */

    // Значения подтянулись, но пока не применяются к самой странице.
  // Для этого нужно прописать для самих элементов данные стили. Как выше делали для parent
  session.style.backgroundColor = session.color.value;
  session.style.fontSize = session['font-size'].value + 'px';

  const localStyle = JSON.parse(localStorage.getItem('local-style'));
  console.log('localStyle:', localStyle);

  // Аналогично все делаем и для local
  local['font-size'].value = localStyle?.fontSize ||
    local['font-size'].value;
  local.color.value = localStyle?.backgroundColor ||
    local.color.value;

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
// У глобального объекта window есть определенная особенность – событие storage.
// Добавив ф-ю init, меняя значенния в localStorage на одной вкладке, поменяется и на другой
window.addEventListener('storage', e => {
  console.log(e);
  init();
});

// При работе с localStorage, если хотим хранить много данных
// и их нужно в какой-то момент перебирать, то лучше всего использовать
const getLocalStorageData = () => Object.entries(localStorage)
  .reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch {
      nawValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  })
