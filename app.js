const users = ['Вася', 'Маша', 'Катя', 'Аня'];

console.log(users);
users.sort();
console.log(users);


const operations = [100, -300, -100, 50, 480];
console.log(operations);
operations.sort((a, b) => {
  if (a > b) {
    return -1
  } else if (a < b) {
    return 1
  } else {
    return 0
  }
});
console.log(operations);
