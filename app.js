'use strict'
let myCoolVariable = 1;

if (true) {
  myCoolVariable = 3;
  function a() {
    console.log(a);
  }
}
console.log(a());
console.log(myCoolVariable)