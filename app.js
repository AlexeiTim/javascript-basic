const userArray = ['Вася', 'Пупкин', 24];
const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  skills: [
    'Программирование', 'Готовка'
  ],
  eduBasic: 'Школа 10',
  eduPro: 'МФТИ',
};
console.log(user);
console.log(user.skills);
const level = 'Pro';
console.log(user['edu' + level]);
console.log(user[`edu${level}`]);
user.city = 'Москва';
user['city'] = 'Москва';
console.log(user);

user.age = 30;
user['age'] = 35;

console.log(user);
