const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations) {
  balance += operation;
}

let result = operations.reduce((acc, el) => acc += el, 0)
console.log(result);

const minElement = operations.reduce((acc, operation, i) => {
  return operation < acc ? acc : operation
}, 0);

console.log(minElement)