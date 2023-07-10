'use strict';

/*

Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции


4-ый опциональный параметр это строка:

если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел

*/

const randomArray = (length, n, m, str) => (
  [...new Array(length)]
    .map(() => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m))
    .filter(item => item % 2 == (str == 'odd')));
console.log(randomArray(10, 1, 10, 'odd'));
console.log(randomArray(10, 1, 10, 'even'));
