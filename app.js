const wallet = {
  balance: 0,
  operations: [],
  addBalance: function (value) {
    this.balance += value;
    this.operations.push({
      reason: 'Пополнение',
      sum: value,
    });
    console.log('Успешно пополнено')
    return true;
  },
  minusBalance: function (value) {
    if (this.balance >= value) {
      this.balance -= value;
      this.operations.push({
        reason: 'Оплата налогов',
        sum: -value,
      });
      console.log('Успешно оплачено');
      return true
    }
    console.log('Недостаточно средств, ваш баланс: ' + this.balance);
    return false
  },
  watchOperationsLength: function () {
    console.log(this.operations.length);
    return this.operations.length;
  }
};
wallet.addBalance(100);
console.log(wallet);
wallet.addBalance(200);
wallet.addBalance(500);
wallet.watchOperationsLength();
wallet.minusBalance(100);
wallet.minusBalance(100);
wallet.minusBalance(100);
wallet.minusBalance(100);
wallet.minusBalance(100);
wallet.minusBalance(100);
wallet.minusBalance(100);
wallet.minusBalance(100);
wallet.watchOperationsLength();
console.log(wallet);



