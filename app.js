const transactionInUSD = [10, -7, 50, -10, 100];
const transactionInRUB = [];
for (const transaction of transactionInUSD) {
  transactionInRUB.push(transaction * 60);
}

console.log(transactionInRUB);

const transactionInRUBMap = transactionInUSD
  .map((transition, i) => {
    console.log(i);
    return transition * 60
  });
console.log(transactionInUSD);
console.log(transactionInRUBMap);