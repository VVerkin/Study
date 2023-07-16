'use strict';

/*

Скопируйте код task01.js в task02.js

Продолжаем работать с предыдущей функцией

Функция принимает еще два параметра n и m

Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
m и n включительно

Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

*/

const randomArray = (length, n, m) => (
  [...new Array(length)] // генерируем массив нужной длинны с помощью конструктора
    .map(() => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m))
    );
console.log(randomArray(10, -5, 50)); // передаем в консоль массив длинной 10 элементов и минимальным и максимальным числами