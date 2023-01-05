function toPower(num = 2, power = 2) {
  // power = power || 2;
  const res = num ** power;
  return res;
}

console.log(toPower(2, 3));
console.log(toPower(2))