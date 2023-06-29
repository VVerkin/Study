'use strict';

//Задача 1

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
