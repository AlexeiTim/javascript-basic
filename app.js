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
// document.querySelector('.input').addEventListener('keydown', (e) => {
//   if (e.code === 'Enter') {
//     submitForm()
//   }
// })


// ; (function () {
//   const firstAndSecondElement = document.querySelectorAll('.one');
//   firstAndSecondElement.forEach(item => {
//     console.log(item.firstChild.nextSibling.textContent);
//   })
//   const threeElement = document.querySelector('#two');
//   console.log(threeElement.textContent.trim())
//   const spanElements = document.querySelectorAll('span');
//   spanElements.forEach(el => {
//     if (el.getAttribute('user-id')) {
//       console.log(el.textContent);
//     }
//   })
// })()

// console.log(document.querySelector('.one').innerText)
// console.log(document.querySelector('.one ~ div').innerText);
// console.log(document.querySelectorAll('.one')[0].innerText);
// console.log(document.querySelectorAll('.one')[1].innerText);

// console.log(document.querySelector('#two').innerText);

// console.log(document.getElementById('two').innerText);
// console.log(document.querySelector('[user-id="4"]').innerText);

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class='${panelClass}'>${panelText}</button>`
document.querySelector('.test').append(newElement);