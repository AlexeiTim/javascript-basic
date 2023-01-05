'use strict';

const b = 1;

const a = {
  b,
  getB: function () {
    console.log(this.b);
  },
  getBAlt() {
    console.log(this.b);
  }
};
a.getB();
a.getBAlt();
console.log(a);