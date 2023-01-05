//Проверить, верные ли номера телефонов
/**Верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910) 323-53-56';
const num4 = '7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56';

/** Неверные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

const checkNumber = str => {
  let number = str.trim();
  if (number[0] === '+') {
    number = number.slice(1);
  };
  number = number.replaceAll(/\(/g, '');
  number = number.replaceAll(/\)/g, '');
  number = number.replaceAll(/\-/g, '');
  number = number.replaceAll(/\ /g, '');

  for (let i = 0; i < number.length - 1; i++) {
    if (isNaN(number[i])) {
      return false;
    }
  }

  if (number.length !== 11) {
    return false;
  }
  return true;
};

console.log(checkNumber(num1))
console.log(checkNumber(num2))
console.log(checkNumber(num3))
console.log(checkNumber(num4))
console.log(checkNumber(num5))
console.log(checkNumber(num1Error))
console.log(checkNumber(num2Error))
console.log(checkNumber(num3Error))
console.log(checkNumber(num4Error))







