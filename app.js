const user = {
  name: 'Вася',
  age: 40,
  city: 'Moscow',
}

const { age, ...userWithoutAge } = user;

console.log(age, userWithoutAge);

const additionalData = {
  skills: ['Разработка', 'Дизайн'],
  creditCart: '2342-2354-2734-2634',
};
user.test = 'sasd';

// user = {
//   ...user,
//   ...additionalData,
// }
console.log(user);