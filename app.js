const users = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'DevOps'],
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 30,
    skills: ['Дизайн'],
  }
];

const res = users
  .map(user => {
    return {
      fullName: `${user.name} ${user.surname}`,
      skills: user.skills.length,
    }
  });
console.log(res);