const count = 12000;
const procentOnYear = 7;
const waitingMoney = 13500;
const waitingTime = 2 * 12;
const currentMoney = count * (1 + procentOnYear / 100 / 12) ** waitingTime;
console.log(currentMoney)
if (currentMoney > waitingMoney) {
  console.log(`Сможет купить дом за ${waitingMoney}$, остаток ${currentMoney - waitingMoney}. Мы накопили ${currentMoney}`)
} else {
  console.log(`Не сможет купить дом за ${waitingMoney}`)
}