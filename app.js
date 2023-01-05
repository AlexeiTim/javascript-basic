const tasks = ['Задача 1'];

function addTask(task) {
  tasks.push(task);
};

function deleteTaskByName(name) {
  const index = tasks.indexOf(name);
  if (index == -1) {
    return
  }
  return tasks.splice(index, 1);
}

function passTaskToStartByName(name) {
  const result = deleteTaskByName(name);
  if (!result) {
    return
  }
  tasks.unshift(result[0]);
}

addTask('Задача 2');
console.log(tasks);
addTask('Задача 3');
console.log(tasks);

addTask('Задача 4');
console.log(tasks);

deleteTaskByName('Задача 3');
console.log(tasks);
deleteTaskByName('Задача 1')

passTaskToStartByName('Задача 2');
console.log(tasks);



