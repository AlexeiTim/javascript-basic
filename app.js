const user2 = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  getFullName: function () {
    return this.name + ' ' + this.surname;
  }
};

console.log(user2.getFullName())


const arr = [2, 1];
arr.sort();
console.log(arr);
console.log('232323'.toLowerCase())