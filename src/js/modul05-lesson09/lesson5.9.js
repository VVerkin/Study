'use strict';

const $ = (() => {
  const privatVar = 'Приватные данные';
  const openVar = 'Открытые данные';
  const app = () => {
    console.log('Моё новое крутое приложение');
  };

  const getData = () => privatVar;

  return {
    app,
    openVar,
    getData,
  };
})();

console.log($);

$.app();
console.log($.openVar);
console.log($.getData());
