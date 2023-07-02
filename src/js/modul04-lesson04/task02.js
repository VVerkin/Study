'use strict';

/* 
Вторая задача

Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие



Пример:  "привет Мир" => "Привет мир"
 */

const stringChange = (str) => {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}
console.log(stringChange('привет Мир'));