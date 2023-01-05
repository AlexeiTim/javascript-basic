const tasks = ['Задача 1'];

function addTask(task) {
  tasks.push(task);
  console.log(tasks);
};

function deleteTaskByName(name) {
  if (tasks.includes(name)) {
    const index = tasks.indexOf(name);
    tasks.splice(index, 1);
    console.log(tasks);
  } else {
    console.log('Нету такого элемента в массиве');
  }

}

function passTaskToStartByName(name) {
  if (tasks.includes(name)) {
    const index = tasks.indexOf(name);
    const el = tasks.splice(index, 1)[0];
    tasks.unshift(el);
    console.log(tasks);
  } else {
    console.log('Нету такого элемента в массиве');
  }
}

addTask('Задача 2');
addTask('Задача 3');
addTask('Задача 4');
deleteTaskByName('Задача 3');
passTaskToStartByName('Задача 2');


