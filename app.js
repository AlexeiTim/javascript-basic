const operations = [100, -20, 7, -20, 50];

// const positiveOperation = [];
// for (const operation of operations) {
//   if (operation > 0) {
//     positiveOperation.push(operation);
//   }
// }

// console.log(positiveOperation);

const positiveOperation = operations.filter(operation => operation > 0);
console.log(positiveOperation);

const positiveRUBOperations = operations
  .filter(operation => operation > 0)
  .map(operation => operation * 60);


console.log(positiveRUBOperations)