'use strict';

{
  const myWeight = 94;
  const speedLight = 3e8;
  
  // console.log('тип:',typeof speedLight);

  const myEnergy = myWeight * (speedLight ** 2);
  
  console.log(`Энергия моего тела равна ${myEnergy} Дж`);
  console.log(`Энергия моего тела равна ${myEnergy.toExponential()} Дж`);
}
