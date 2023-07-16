'use strict';

/*

Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции


4-ый опциональный параметр это строка:

если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел

*/

const randomArray = (length, n, m, str) => {

	const arr = [];
	let num;
	let i = 0;
	if (str === 'odd') {
		while (i < length) {
			num = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);
			if (num % 2 === 0) {
				arr.push(num);
				i++;
			}
		}
		return arr;
	} else if (str === 'even') {
		while (i < length) {
			num = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);
			if (num % 2 !== 0) {
				arr.push(num);
				i++;
			}
		}
		return arr;
	} else {
		while (i < length) {
			num = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);
			arr.push(num);
			i++;
		}
		return arr;
	}
};

console.log('even', randomArray(10, -5, 10, 'even'));
console.log('odd', randomArray(10, -5, 10, 'odd'));
console.log('empty', randomArray(10, -5, 10));