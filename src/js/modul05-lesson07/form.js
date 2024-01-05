'use strict';

/* В современной разработке существуют 2 подхода к работе с формами:
1. когда нет кнопки "Добавить", "Сохранить" или "Отправить".
В этом случае каждый элемент формы связывают с обработчиком, который
отслеживает любые изменения.
Пример: "живой" поиск на сайте или фильтрация данных на странице.
2. Чаще всего (более классический вариант) когда форма имеет кнопку отправить.
В таком случае необходимо использовать событие submit на самой форме.
*/

// Получим форму
const form = document.querySelector('.my-form');
// Отправлять событие нужно именно по событию submit, а не по событию клик по кнопке
form.addEventListener('submit', e => { // e - event (событие)
  // Отменяем стандартное браузерное событие - отправку формы
  e.preventDefault();
  // Извлечение данных из формы:
  /* 1-й способ (НЕ ПРАВИЛЬНЫЙ) Получение элементов напрямую.
  Это не желательно, т.к. постоянно обращаемся к document, а это действие
  очень ресурсозатратное
    const inputName = document.qyerySelector('.input-name')
    const inputSurname = document.qyerySelector('.input-surname')
    console.log(inputName.value);
    console.log(inputSurname.value);
  */
 /* 2-й способ: У нас есть форма, а у формы есть свойство elements,
 где содержатся элементы, а именно наши name и surname.
 При таком подходе не нужно обращаться к DOM
    console.log(form.elements.name.value);
    console.log(form.elements.surname.value);
 */
 /* 3-й способ: Использование formData
Обращаемся к конструктору FofmData, который вернет formData
и передадим туда e.target
Из FormData можем получить любой элемент формы с помощью
formData.get
  const formData = new FormData(e.target);
  console.log(formData.get('name'));
  console.log(formData.get('surname'));

Так же можно воспользоваться formData.entries() 
и мы получим массив, который нужно итерировать
  const formData = new FormData(e.target);
  console.log([...formData.entries()]);

  Можно применить мето fromEntries у Object
  console.log([Object.fromEntries(formData)]);
Полученный объект можно отправлять на сервер

При итерации идет перезапись свойств, поэтому если чекбоксы 
будут содержать 1 name, но несколько значений, то при каждой
итерации они перезаписываются и остается только одно значение!
 */
  const formData = new FormData(e.target);
//   console.log([...formData.entries()]);
  console.log([Object.fromEntries(formData)]);
});

// Методы работы с элементами формы
// Фокусировка на поле ввода
form.name.addEventListener('focus', e => {
  console.warn(e.type, e.target.value);
});
// Расфокусировка
form.name.addEventListener('blur', e => {
  console.error(e.type, e.target.value);
});
// Срабатывает, когда поле ввода теряет фокус и значение до и после отличаются.
// Очень чато на change вешают валидацию фромы
// (проверку на правильность заполнения полей)
form.name.addEventListener('change', e => {
  console.log(e.type, e.target.value);
});
/* Валидация при вводе не рекомендуется, т.к. будут часто возникать события и
и будет надоедать сообщения о том, что данные не верны*/

// Запрет воода символов
// Чаще всего используется input
form.name.addEventListener('input', e => {
    console.warn(e.type, e.target.value);
  });
form.name.addEventListener('keyup', e => {
  console.warn(e.type, e.target.value);
});
form.name.addEventListener('keydown', e => {
  console.warn(e.type, e.target.value);
});
form.name.addEventListener('keypress', e => {
  console.warn(e.type, e.target.value);
});

/*  Деструктуризация элементов - не всегда удобно писать form.name и обращаться к элементу
Можно получить форму, деструктурировать из нее данные
*/

// Деструктурирем RadioNodeList и получаем обычный массив
const {name, size, file, description, color: [...color]} = form;
console.log(name, size, file, description, color);

// Можно применять делегирование

/* Получим fieldsetRadio
    const fieldsetRadio = document.querySelector('.fieldset-radio');
Навесим событие change
    fieldsetRadio.addEventListener('change', e => {
      console.log(e.target);
    });

    Событие будет срабатывать только на радиочекбоксы
*/

// При делегировании все элементы формы будут срабатывать на это событие
    const fieldsetRadio = document.querySelector('.fieldset-radio');

    form.addEventListener('change', e => {
      console.log(e.target);
    });

/* В консоль будет выводиться клавиша, которую будет нажимать пользователь
document.addEventListener('keydown', e => {
    console.log(e.code);
}); */

//При нажатии Escape данные в поле формы сбрасываются
document.addEventListener('keydown', e => {
    if(e.code === 'Escape') {
        form.reset();
    }
});
