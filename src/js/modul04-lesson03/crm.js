'use strict';

/* Задача 1

В прошлом задании вы от пользователя получали количество товара и цену.

✔ С помощью конструкции if (else) убедитесь, что пользователь ввёл число

✔ Если число, то всё должно работать как и в прошлом задании

✔ Если пользователь вёл не число, то вывести сообщение "Вы ввели некорректные данные"

✔ Других сообщений в консоли быть не должно.

*/

{
  const goodsName = prompt('Введите наименование товара', '');

  const goodsCount = +prompt('Введите количество товара', 'шт');
  if (isNaN(goodsCount)) {
    console.log('Вы ввели некорректные данные');
  }
  // console.log('Количество', typeof goodsCount);

  const goodsCategory = prompt('Введите категорию товара', '');

  const goodsPrice = +prompt('Введите цену товара', '');
  if (isNaN(goodsPrice)) {
    console.log('Вы ввели некорректные данные');
  }
  // console.log('Цена:',typeof goodsPrice);

  const goodsCurrency = 'деревянных';
  const goodsResult = goodsCount * goodsPrice;

  // console.log(`На складе ${goodsCount} единицы товара "${goodsName}" на сумму ${goodsResult} ${goodsCurrency}`);
}
