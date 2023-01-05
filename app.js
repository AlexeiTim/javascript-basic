const roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2);
console.log(roles);
console.log(res);


const res2 = roles.slice(0, 2);
console.log(res2);

const res3 = roles.slice(-1)
console.log(res3);

const res4 = roles.slice(1, -1)
console.log(res4);

// const res5 = roles.splice(2)
// console.log(res5);
// console.log(roles);

// const res6 = roles.splice(2, 1)
// console.log(roles);
// console.log(res6);

// const res7 = roles.splice(-1)
// console.log(roles);
// console.log(res7);

// const res8 = roles.reverse();
// console.log(roles);
// console.log(res8);

const newRoles = ['sysadmin', 'developer'];

const res9 = roles.concat(newRoles);
console.log(roles);
console.log(res9);

