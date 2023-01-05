const value = prompt('Сколько будет 7 + или - 15?');

switch (true) {
  case Number(value) === 22:
  case Number(value) === -8:
  case value === 'Я не робот':
    console.log('Успех');
    break
  default:
    console.log('Вы робот');
}

if (value === 'Я не робот') {
  console.log('Успех')
} else {
  const numValue = Number(value)
  switch (numValue) {
    case 22:
    case -8:
      console.log('Успех')
      break
    default:
      console.log('Вы робот');
  }
}