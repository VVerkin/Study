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
  arr.push(randomNumber);
  console.log(randomNumber);
  console.log(arr);
};

console.log(addNumToArr(arr));
