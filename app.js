// const hoursPerDay = 5;
// const daysPerWeek = 5;
// const daysForWork = 11 - 7 + 5;
// console.log(daysForWork * 5 >= 40);
// const price = daysForWork  * 80;
// console.log(price + '$');

//Данные
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

//Результат
console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Стоимость работ? ' + (projectHours * payRateUSD + '$'));
