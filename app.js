const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

const arr = ['!', 'JS', 'люблю', 'Я'];
const result = [];
for (let i = arr.length - 1; i >= 0; i--) {
  result.push(arr[i]);
}

console.log(result.join(' '));