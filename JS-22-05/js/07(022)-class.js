
const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};

Car.description = `Класс описывающий автомобиль`;

Car.logInfo = function (carObj) {
    console.log(`Car.logInfo -> carObj`, carObj);
};

const myCar = new Car({
    brand: `Audi`,
    model: `Q3`,
    price: 35000,
});


// Классы
//     - объявление
//     - конструктор
//     - методы
//     - static
//     - приватные свойства
//     - синтаксис публичных свойств и методы классов
//     - геттеры и сеттеры


class Car1 {
  static description = `Класс описывающий автомобиль`;

  static logInfo(carObj) {
    console.log(`Car.logInfo -> carObj`, carObj);
    }


    
  #test = `test`;

  constructor({ brand, model, price } = {}) {
    console.log(`Выполняется constructor`);
    console.log(this);

    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

    get price() {
        return this._price;
    }
    
    set price(newPrice) {
        this._price = newPrice;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
    
    
        //   setModel(newModel) {
//     this.model = newModel;
//   }

//     getModel() {
//         return this.model;
//     }
}


const carInstance = new Car1({
  brand: `Audi`,
  model: `Q3`,
  price: 35000,
});



console.log(carInstance.model);
carInstance.model = `Q4`;
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 50000;
console.log(carInstance.price);

console.log(carInstance);

// carInstance.setModel(`Q4`);

// console.log(carInstance.getModel());

