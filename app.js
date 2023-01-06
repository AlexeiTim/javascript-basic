'use strict'

// document.querySelector('.button').addEventListener('click', changeClick)

function changeClick() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
}