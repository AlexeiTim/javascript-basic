const operations = [1000, -700, 300, -500, 10000];

const resultBalance = arr => {
  let balance = 100;
  for (let element of operations) {
    balance += element;
  };
  return balance;
}
const countMoney = arr => {
  let result = 100;
  let isOk = true;
  for (let element of arr) {
    result += element;
    if (result < 0) {
      isOk = false;
      break
    }
  }
  return isOk;
}

const getAdvancedSumOfAdded = arr => {
  let added = [];
  let odd = [];
  for (let element of operations) {
    element < 0 ? odd.push(element) : added.push(element);
  }
  let resultAdded = 0;
  for (let element of added) {
    resultAdded += element;
  }

  let resultOdd = 0;
  for (let element of odd) {
    resultOdd += element;
  }
  resultOdd = resultOdd / odd.length;
  resultAdded = resultAdded / added.length;
  console.log(`Средний доход : ${resultAdded}`);
  console.log(`Средний расход : ${resultOdd}`);
}

console.log(resultBalance(operations));
console.log(countMoney(operations));
getAdvancedSumOfAdded(operations);



