'use strict'

// document.querySelector('.button').addEventListener('click', changeClick)
function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
  document.querySelector('.notification').classList.add('notification_active')
  console.log(document.querySelector('.notification').getAttribute('class'))
  document.querySelector('.notification').setAttribute('class', 'notification');
  document.querySelector('.notification').setAttribute('key', 1);
  document.querySelector('.notification').setAttribute('user-id', 1);
  console.log(Number(document.querySelector('.notification').getAttribute('user-id')))



}
function inputChanged(e) {
  if (e.code === 'Enter') {
    submitForm();
  }
}

const obj = JSON.parse('{"a" : 1}');
console.log(obj.a);
const str = JSON.stringify(obj);
console.log(str);


