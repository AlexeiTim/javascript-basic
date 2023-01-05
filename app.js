const userInfo = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum;
    this.operations++;
    console.log(this.balance, this.operations);
  }
}

function user() {
  const userObj = {
    balance: 0,
    operations: 0,
    increase(sum) {
      this.balance += sum;
      this.operations++;
      console.log(this.balance, this.operations);
    }
  }
  return function () {
    return userObj;
  }
}

const user1 = user(userInfo);
user1().increase(100);
user1().increase(100);

const user2 = user(userInfo);
user2().increase(200);
user2().increase(200);
user2().increase(200);

console.log(user1());
console.log(user2());