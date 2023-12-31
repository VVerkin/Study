'use strict';

/*

Напишите функцию генератор  массива случайных чисел в файле task01.js

Функция принимает один обязательный параметр это количество элементов в массиве
И возвращает массив со случайными числами от одного до 100 включительно;

*/

const randomArray = (length) => (
  [...new Array(length)] // генерируем массив нужной длинны с помощью конструктора
    .map(() => Math.floor(Math.random() * 100) + 1) // заполняем массив элементами, генерирую случайные числа от 1 до 100
);
console.log(randomArray(10)); // передаем в консоль массив длинной 10 элементов