const operations = [100, -20, 7, -20, 50];

// const positiveOperation = [];
// for (const operation of operations) {
//   if (operation > 0) {
//     positiveOperation.push(operation);
//   }
// }

// console.log(positiveOperation);

const prices = [[100, 200], [120, 100], [200, 350]];

// const positiveChangingOfPrice = prices
//   .filter(el => {
//     return el[0] < el[1]
//   })
//   .map(el => {
//     return el[1] - el[0]
//   })

const positiveChangingOfPrice = prices
  .map(el => el[1] - el[0])
  .filter(el => el > 0);

console.log(positiveChangingOfPrice);