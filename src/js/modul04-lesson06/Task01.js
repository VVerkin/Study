'use strict';

/*

Напишите функцию filter()

функция принимает в параметрах 2 массива

Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

*/

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

let successStudent = allStudents.filter(student => !failedStudents.includes(student));
console.log(successStudent);