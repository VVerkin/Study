'use strict';

/* 

В отдельном файле hard_task_01

Напишите функцию, вычисляющую наибольший общий делитель двух чисе 

*/

const getNod = (a, b) => Math.abs(b) == 0 ? Math.abs(a) : getNod(Math.abs(b), Math.abs(a) % Math.abs(b));
console.log(getNod(64, 48));