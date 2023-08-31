'use strict';

/*
Напишите рекурсивную функцию, которая принимает один параметр массив,
генерирует целое число от 0 до 10 включительно и добавляет его в массив.

Каждый раз после добавления нового числа проверяет сумму элементов массива,
если она меньше 50 запускается снова передавая себе массив. Если сумма 50
или больше, то функция возвращает этот массив.
*/

const arr = [1, 2, 3];

const addNumToArr = (arr) => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(` Случайное число ${randomNumber}`);
  arr.push(randomNumber);
  console.log(` Массив ${arr}`);
  const sum = arr.reduce((acc, item) => acc + item, 0);
  console.log(` Сумма элементов массива ${sum}`);
  if (sum >= 50) {
    return arr;
  } else {
    return addNumToArr(arr);
  };
};
console.log(addNumToArr(arr));
