function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function power(a, b) {
  return a ** b;
}
// Функция высшего порядка

function calculate(a, b, fn) {
  console.log(fn.name);
  const result = fn(a, b);
  return result;
};

const res1 = calculate(3, 5, add);
console.log(res1);
const res = calculate(3, 5, subtract);
console.log(res);
const res3 = calculate(3, 5, power);
console.log(res3);