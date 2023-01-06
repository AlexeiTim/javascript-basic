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
  },
  content: {
    daysContainer: document.getElementById('days'),
    nextDay: document.querySelector('.habbit__day'),
    comment: document.querySelector('.habbit__comments')
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



// function rerenderBody(activeHabbit) {

//   let comments = activeHabbit.days
//   let count = 1;
//   page.body.bodyBlock.innerHTML = '';
//   for (const comment of comments) {
//     console.log(comment);

//     let existed = document.querySelector(`[habbit-id="${count}"]`);
//     if (!existed) {
//       // создать
//       let element = document.createElement('div');
//       element.classList.add('habbit');
//       element.setAttribute('habbit-id', `${count}`)
//       element.innerHTML = `
//       <div class="habbit__day">День ${count}</div>
//                         <div class="habbit__comments">${comment.comment}</div>
//                         <div class="habbit__delete">
//                             <img src="./images/delete.svg" alt="delete">
//                         </div>
//                         `
//       count++
//       console.log(count);
//       page.body.bodyBlock.append(element);
//       continue
//     }

//     if (activeHabbit.id === count) {
//     }
//   }
//   let exictedComment = document.querySelector(`[comment='${count}']`);
//   if (!exictedComment) {
//     console.log(exictedComment);
//     let commentElement = document.createElement('div');
//     commentElement.classList.add('habbit');
//     commentElement.setAttribute('habbit-id', `${count}`)
//     commentElement.innerHTML =
//       `
//   <div class="habbit__day" habbit-id="${count}">День ${count}</div>
//                         <div class="habbit__form">
//                             <input class="input_icon" type="text" placeholder="Комментарий">
//                             <img class="input__icon" src="./images/comment.svg" alt="comment">
//                             <button class="button">Готово</button>
//                         </div>
//   `
//     page.body.bodyBlock.append(commentElement);
//   }
// }


function rerenderHead(activeHabbit) {
  page.header.h1.innerHTML = activeHabbit.name;
  const progress = activeHabbit.days.length / activeHabbit.target > 1
    ? 100
    : activeHabbit.days.length / activeHabbit.target * 100;
  page.header.progressProcent.innerText = progress.toFixed(0) + '%';
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
}

function rerenderContent(activeHabbit) {
  page.content.daysContainer.innerHTML = '';
  for (const index in activeHabbit.days) {
    let i = Number(index);
    const element = document.createElement('div');
    element.classList.add('habbit');
    element.innerHTML = `<div class="habbit__day">День ${i + 1}</div>
    <div class="habbit__comments">${activeHabbit.days[i].comment}</div>
    <button class="habbit__delete">
        <img src="./images/delete.svg" alt="удалить день ${i + 1}">
    </button>`
    page.content.daysContainer.appendChild(element);
  }
  page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`;
  
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find(el => el.id === activeHabbitId)
  if (!activeHabbit) {
    return;
  }
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderContent(activeHabbit);
}
// init
; (() => {
  loadData();
  rerender(habbits[0].id);
})()