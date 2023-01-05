const arr = [2, 4, 4, 10, 20];

const checkElement = (value, arr) => {
  let result = arr.find(el => el == value);
  return result == undefined ? false : true;
}

console.log(arr.some(el => el === 2))