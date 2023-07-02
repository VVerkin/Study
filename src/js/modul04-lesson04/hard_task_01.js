'use strict';

/* 

В отдельном файле hard_task_01

Напишите функцию, вычисляющую наибольший общий делитель двух чисе 

*/

const getNod = (a, b) => {
  if (Math.abs(b) === 0) {
  return Math.abs(a);
} else {
  return getNod(Math.abs(b), Math.abs(a) % Math.abs(b));
}
}

console.log(getNod(14, 0));
