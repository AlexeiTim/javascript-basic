const balance = 1100;
const bonus = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const result = (balance > 1000 || bonus > 100)
  && !isBanned
  && !isExist
  && isSelling;

console.log(`Могу купить игру: ${result ? 'Да' : 'Нет'}`)