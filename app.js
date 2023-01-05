'use strict';
console.log(name)
const user = {
  firstName: 'Вася',
  lastName: 'Пупкин',
  age: 20,
  getUserInfoArrow: () => {
    console.log(`${this.firstName} ${this.lastName}`)
  },
  getUserInfo: function () {
    console.log(`${this.firstName} ${this.lastName}`)

    const canDrink = () => {
      if (this.age >= 18) {
        console.log(this.age)
        console.log('Может уже пить')
      } else {
        console.log('Не может пить!')
      }
    }
    canDrink();
  }
}
user.getUserInfo();
// user.getUserInfoArrow();