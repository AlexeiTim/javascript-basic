const arr = [2, 4, 4, 10];
const average = arr.reduce((acc, el, i) => {
  if (i != arr.length - 1) {
    return acc += el;
  } else {
    return (acc + el) / 2
  }
}, 0);

console.log(average);