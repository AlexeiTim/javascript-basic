'use strict'

// document.querySelector('.button').addEventListener('click', changeClick)
function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return
  }
  document.querySelector('.panel').innerText = input;

  const obj = JSON.stringify({
    text: input
  });

  localStorage.setItem("text", obj);




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



