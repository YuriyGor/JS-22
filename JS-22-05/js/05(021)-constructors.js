
// Основы ООП: класс, экземпляр(объект), интерфейс


// Функции - конструкторы
//     - Именование
//     - Оператор new
//     - Свойство function.prototype


// const Car = function (value) {
//   // 2. Функция вызывается в контексте созданного объекта,
//   //     то есть в this записывается ссылка на него
//   console.log(this);

//   this.a = value;
//   // 4. Ссылка на объект возвращается в место вызова new Car
// };

// // 1. Если функция вызывается через new, создается пустой объект
// const myCar = new Car(5);
// console.log(myCar);

// const myCar2 = new Car(10);
// console.log(myCar2);

// 3. В свойство this.__proto__ записывается ссылка на объект Car.prototype
//     т.е. Car.prototype это ПРОТОТИП будущего объекта(экземпляра)


// brand: `Audi`
// model: `Q3`
// price: 35000

// brand: `Audi`;
// model: `A6`;
// price: 65000;

// brand: `BMW`;
// model: `X6`;
// price: 50000;

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   // 2. Функция вызывается в контексте созданного объекта,
//   //     то есть в this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // 3. В свойство this.__proto__ записывается ссылка на объект Car.prototype
//   //     т.е. Car.prototype это ПРОТОТИП будущего объекта(экземпляра)

//   // 4. Ссылка на объект возвращается в место вызова new Car
// };

// Car.prototype.sayHi = function () {
//     console.log(`Car.prototype.sayHi -> this`, this);
//     console.log(`Hello :) `);
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// console.log(Car.prototype);

// // 1. Если функция вызывается через new, создается пустой объект
// const myCar = new Car({
//     brand: `Audi`,
//     model: `Q3`,
//     price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();

// const myCar2 = new Car({ brand: `BMW`, model: `X6`, price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: `Audi`, model: `A6`, price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();


const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
};

User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
};

const mango = new User({ email: `mango@mail.com`, password: 11111 });

mango.changeEmail(`my-new-mail@mail.com`);
console.log(mango);


// 1. У каждого объекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, т.е. другой объект
// 3. При создании литерала объекта, в свойство __proto__
// записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создается пустой
// объект где - то в памяти
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на объект
// Функция.prototype
// 9. Ссылка на объект возвращается в место вызова new Функция()

// ЭТО И ЕСТЬ ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ




// Статические свойства и методы
// - Статические свойства и методы доступны только на самом конструкторе
// - В статических методах не нужен this


User.message = `Я статическое свойство`;

User.logInfo = function (obj) {
    console.log(obj);
};

console.dir(User);

console.log(Math.round(5.1));
console.log(Math.PI);

// Car.logInfo = function (obj) {};
