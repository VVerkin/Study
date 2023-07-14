'use strict';

/*

✔ Добавьте еще один файл в проект einstein.js

✔ Подключите его к index.html

✔ Создайте 2 константы myWeight и speedLight

✔ В myWeight запишите вашу массу тела (или кота), а в speedLight запишите скорость света 3e8


✔ Используя формулу E=mc2 посчитайте значение энергии вашего тела

✔ Результат выведите в консоль

*/

{
  const myWeight = 94;
  const speedLight = 3e8;
  
  // console.log('тип:',typeof speedLight);

  const myEnergy = myWeight * (speedLight ** 2);
  
  console.log(`Энергия моего тела равна ${myEnergy} Дж`);
  console.log(`Энергия моего тела равна ${myEnergy.toExponential()} Дж`);
}
