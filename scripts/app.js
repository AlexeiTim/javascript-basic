'use strict'

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY'

/* page */
const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressProcent: document.querySelector('.progress__procent'),
    progressCoverBar: document.querySelector('.progress__cover-bar')
  }
}

/* utils */

function loadData() {
  const habbitsString = localStorage.getItem(HABBIT_KEY);
  const habbitsArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitsArray)) {
    habbits = habbitsArray;
  }
}

function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}
// render
function rerenderMenu(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  // document.querySelector('.menu__list').innerHTML = '';
  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!existed) {
      // создание
      const element = document.createElement('button');
      element.setAttribute('menu-habbit-id', habbit.id);
      element.classList.add('menu__item');
      element.addEventListener('click', () => {
        rerender(habbit.id);
      })
      element.innerHTML = `<img class="menu__img" src="./images/${habbit.icon}.svg" alt="${habbit.name}">`
      if (activeHabbit.id === habbit.id) {
        element.classList.add('menu__item_active');
      }
      page.menu.appendChild(element);
      continue
    }
    if (activeHabbit.id === habbit.id) {
      existed.classList.add('menu__item_active');
    } else {
      existed.classList.remove('menu__item_active');
    }
    //
  }
}

function rerenderHead(activeHabbit) {
  if (!activeHabbit) {
    return
  }
  page.header.h1.innerHTML = activeHabbit.name;
  const progress = activeHabbit.days.length / activeHabbit.target > 1
    ? 100
    : activeHabbit.days.length / activeHabbit.target * 100;
  page.header.progressProcent.innerText = progress.toFixed(0) + '%';
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find(el => el.id === activeHabbitId)
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
}
// init
; (() => {
  loadData();
  rerender(habbits[0].id)
})()