//'use strict'; - уже не нужен, браузер автоматически запустит все скрипты в строгом режиме
// .js ствится всегда, когда не пользуемся сборщиком, а используем технологию в браузере
import moduleOne from './modules/moduleOne.js';
// Используем технологию, похожую на деструктуризацию
import {postfix, names} from './modules/moduleTwo.js';

// Перебираем массив names с помощью forEach
// Вызываем фу-ю moduleOne
names.forEach(name => {
  // Передаем в функцию name и postfix
  console.log(moduleOne(name, postfix));
});
