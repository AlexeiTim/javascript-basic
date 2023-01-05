function logName(name, surname) {
  console.log(`Моё имя ${name} ${surname}`)
}


logName('Алексей', 'Тимашков');

function countDepositSum(depositInUSD, mounth, rate) {
  return depositInUSD * (1 + rate / 12) ** mounth;
}

const example1 = countDepositSum(15000, 48, 0.183)
console.log(example1);
console.log(countDepositSum(15500, 24, 0.183))