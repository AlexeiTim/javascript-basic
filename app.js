const warehouse = {
  goods: [],
  findGoodById: function (id) {
    let res = this.goods.find(el => el.id === id);
    if (!res) {
      console.log('Такого товара нет')
      return
    }
    console.log(res);
  },
  addGood: function (el) {
    let id = el.id;
    if (this.goods.some(el => el.id === id)) {
      console.log('Такой товар уже есть');
      return
    } else {
      console.log(`Товар добавлен в хранилище с id ${el.id}`);
      this.goods.push(el);
    }
  },
  getWeightKg: function () {
    let res = this.goods.reduce((acc, item) => {
      let weight = item?.weight?.kg;

      if (!weight) {
        return acc
      } else {
        return acc += weight
      }
    }, 0)
    console.log(`weight ${res}`);
    return res
  }
}

const car = {
  id: 1,
  weight: {
    kg: 1000
  },
  brand: 'Ford'
}

const chair = {
  id: 2,
  weight: {
    kg: 2
  }
}

const paper = {
  id: 3,
  color: 'red'
}


warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.getWeightKg();
warehouse.findGoodById(2);
warehouse.findGoodById(1);
warehouse.findGoodById(3);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.findGoodById(2);
warehouse.findGoodById(1);
warehouse.findGoodById(3);
warehouse.getWeightKg();


