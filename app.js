const userName = 'Вася aka Terminator Пупкин';

const nameFromArray = userName.split(' ')
console.log(nameFromArray[0] + ' ' + nameFromArray.at(-1))


const nameWithMethodOfString = userName.slice(0, 5) + userName.slice(-6)
console.log(nameWithMethodOfString);

const useName = userName.slice(0, userName.indexOf(' ')) + userName.slice(userName.lastIndexOf(' '))
console.log(useName);