'use strict';

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
};


const user = {
  password: '123123123'
};

const remove = removePassword.bind(user, true);
remove();
console.log(user);