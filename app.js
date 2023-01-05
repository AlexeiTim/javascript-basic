'use strict'

// let, vat, const, func, arguments
// Scope chain
// this

function sumNum(num1, num2) {
  console.log(arguments);
  return num1 + num2;
}

const sumNumArrow = (num1, num2) => {
  // console.log(arguments); // нету this и arguments
  return num1 + num2;
}
console.log(sumNumArrow(1, 3))
console.log(sumNum(1, 4, 3, 7));
