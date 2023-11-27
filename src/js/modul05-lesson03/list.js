'use strict';

/*

1) Добавьте на HTML-страницу пустой список ul.

2) Через prompt запрашивайте у пользователя строку, программа должна работать в бесконечном цикле или в бесконечной рекурсии, условия выхода в 6 пункте

3) Добавляйте все строки внутрь списка ul, текст должен быть внутри li.

4) Если пользователь введёт del, то последний элемент удаляется

5) Если пользователь введёт clear, то список ul очищается

6) Если пользователь введёт exit или нажмет отмена, то программа завершает выполнение

Если пользователь ничего не ввел или ввел только пробелы , то пункт списка не должен быть добавлен

Программу максимально декомпозируйте

Чистые функции для вычисления и процедуры для запроса данных от пользователя и вывод на страницу

Внешний вид на ваше усмотрение
*/

const list = document.querySelector('.list');
let input;

// Функция для добавления элемента в список
function addListItem(input) {
    list.insertAdjacentHTML('beforeend',`<li>${input}</li>`)
}

// Функция удаляет последний элемент списка
function removeLastItem () { 
  const lastItem = list.lastChild;
lastItem.remove();
}

// Функция очищает список
function clearList () {
    list.forEach(element => {
      remove();
    });
    }


function doList () {
  while (true) {
    input = prompt('Введите строку', '');

    if (input === null || input.toLowerCase() === "exit") {
      break;
    } else if (input.toLowerCase() === "del") {
      removeLastItem();
    } else if (input.toLowerCase() === "clear") {
      clearList();
    } else {
      addListItem(input);
      console.log(`Добавлен элеимент: ${input}`);
    }
  }
}
doList();
