const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 10005;

let message = budget > 100000
  ? 'BMW'
  : budget > fordFocusPrice
    ? 'Ford'
    : 'Велосипед';


console.log(`Я хочу купить ${message}`)