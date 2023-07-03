'use strict';

/* 

Напишите функцию, которая принимает строку и возвращает обратную строку

Пример: "Привет мир" => "рим тевирП"

*/

const reverseString = (str) => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
    }
    return newStr;
  }

console.log(reverseString('Привет мир'));
