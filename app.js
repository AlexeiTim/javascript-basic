const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвентируем права админа ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`Файл с редактированием ${isAdmin && canWrite && (!isEdited || isSuperAdmin)
  }`)

let a = 7;
if (a === -8 || a === 22 ) {
  console.log('Я не робот');
}