'use strict';

const moduleOne = require('./modules/moduleOne');

// moduleTwo - объект, мы можем сразу его деструктурировать
const {postfix, names} = require('./modules/moduleTwo');

// Перебираем массив names с помощью forEach
// Вызываем фу-ю moduleOne
names.forEach(name => {
  // Передаем в функцию name и postfix
  console.log(moduleOne(name, postfix));
 });
