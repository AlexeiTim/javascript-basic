const role = 'ceo';


// switch (role) {
//   case 'manager':
//     console.log('Менеджер'); // role === 'manager'
//     break
//   case 'admin':
//     console.log('Админ');
//     break
//   case 'ceo':
//     console.log('CEO');
//     break;
//   default:
//     console.log('Мы тебя не знаем');
//     break
// }

switch (role) {
  case 'manager':
  case 'admin':
    console.log('Не руководитель');
    break
  case 'ceo':
    console.log('Руководитель');
    break;
  default:
    console.log('Мы тебя не знаем');
    break
}


const num = 0;

switch (true) {
  case num > 0:
    console.log('Положительный')
    break;
  case num < 0:
    console.log('Отрицательный');
    break;
  default:
    console.log('Ноль!');
}