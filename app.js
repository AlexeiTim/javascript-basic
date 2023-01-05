const userData = ['Антон', 18, 'Москва'];

function getData() {
  return ['Антон', 18, 'Москва']
}

const userame = getData()[0];
const userAge = getData()[1];
const userCity = getData()[2];

const [userName, _, city] = userData;

console.log(userName, city);
