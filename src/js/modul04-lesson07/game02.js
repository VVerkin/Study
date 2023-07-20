'use strict';

/* 
Усовершенствуйте игру, которую написали в game01

бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
бот запоминает каждое число которое ввел пользователь и записывает в массив
бот отграничивает количество попыток до 30% от количества цифр в диапазоне
если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
если диапазон от 50 до 100, то попыток бот даёт 15
если попытки закончились игра прекращается
*/

let min;
let max;

do {
	min = +prompt('Введи первое число от 1 до 100', '');
} while (isNaN(min) || min < 1 || min > 100);

do {
	max = +prompt('Введи второе число от 1 до 100', '');
} while (isNaN(max) || max < 1 || max > 100);

let attempt = Math.ceil((Math.max(min, max) - Math.min(min, max) + 1) * 0.3);

if ((Math.max(min, max) - Math.min(min, max) + 1) >= 50 && (Math.max(min, max) - Math.min(min, max) + 1) <= 100) {
	attempt = 15;
}

console.log(`первое число ${min}`);
console.log(`второе число ${max}`);
console.log(`количество возможных попыток ${attempt}`);

const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * ((Math.max(min, max) - Math.min(min, max) + 1)) + Math.min(min, max));
};

const randomNumber = getRandomNumber(min,max);
console.log(randomNumber);


const getNumber = () => {
	const arr = [];
	let count = 0;

	while (true) {

		let userNumber = prompt(`Введи загаданное число. Осталось попыток: ${attempt - count}`, '');

		if (userNumber === null) {
			break;
		}

		userNumber = +userNumber;

		if (isNaN(userNumber)) {
			alert( 'Введи число' );
		} 

		if (count >= attempt) {
			alert('Попытки закончились!');
			break;
		}

		if (userNumber < 1 || userNumber > 100) {
			alert( 'Число должно быть от 1 до 100' );
			continue;
		} 

		if (arr.includes(userNumber)) {
			alert('Это число вы уже вводили');
			continue;
		}

		if (userNumber === randomNumber) {
			alert('Правильно!');
			arr.push(userNumber);
			break;
		} else if (userNumber > randomNumber) {
			alert('Меньше');
			arr.push(userNumber);
		} else if (userNumber < randomNumber) {
			alert('Больше');
			arr.push(userNumber);
		}
		count += 1;
	}

	console.log(arr);
	console.log(`Количество использованных попыток ${count + 1}`);
};

getNumber();