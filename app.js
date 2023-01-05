console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);


let a;
const userName = a || 'Петя';
console.log(userName);

const isAdmin = true;
const filename = isAdmin && 'file.mp4';
console.log(filename);



