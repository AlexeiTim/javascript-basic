const prices = [[2, [3, [2, 3]]], [3, 4], [10, 20]];
const result = prices.flat(Infinity);
const res2 = prices.flatMap(el => {
  return el.concat([1]);
})
// const resultFlatMap = prices.flatMap(1);
console.log(result)
// console.log(resultFlatMap)
