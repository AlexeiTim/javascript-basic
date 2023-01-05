const age = 25;
const haveJob = false;
const money = 2000;

const priceMacBook = 2000;


function canGetCredit(age, job = false) {
  const countCredit = age > 24 && job
    ? 500
    : age > 24
      ? 100
      : 0;
  return countCredit;
};

function canBuyMacBook(money, price) {
  const checking = money >= price ? true : false;
  return checking;
}

function tryToGetMacBook(age, money, priceMacBook, haveJob = false) {
  const additionalMoney = canGetCredit(age, haveJob);
  const allMoney = money + additionalMoney;
  return canBuyMacBook(allMoney, priceMacBook);
};


console.log(tryToGetMacBook(age, money, priceMacBook, haveJob));