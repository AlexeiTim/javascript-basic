const roles = ['user', 'admin', 'manager', 'admin'];

const elIndex = roles.indexOf('admin');
console.log(elIndex);

const elLastIndex = roles.lastIndexOf('admin');
console.log(elLastIndex);

if (roles.indexOf('admin') != -1) {
  console.log('Доступ есть')
}


console.log(roles.includes('admin'));
console.log(roles.includes('asdasd'));


if (roles.includes('admin')) {
  console.log('Доступ есть')
}
