
// Прототип объекта

//  - https://miro.com/app/board/.....
// - Object.create()
//     - [[Prototype]]  и  __proto__
//     - Object.getPrototypeOf()
//     - Собственные свойства и Object.prototype.hasOwnProperty()
//     - Цепочка прототипов

const objC = {
    z: 5
};

const objB = Object.create(objC);

objB.y = 2;

console.log(objC);

console.log(objB);

console.log(objB.y);
console.log(objB.z);


const objA = Object.create(objB);
objA.x = 1;

console.log(objA.z);

// objA.z = 10000;

console.log(`objA`, objA);

console.log(objA.hasOwnProperty(`x`));


// const dummyObj = Object.create({
//     message: `Это свойство объекта прототипа`
// });
// dummyObj.message = `Это собственное свойство объекта`;
// console.log(`dummyObj`, dummyObj);
// console.log(dummyObj.message);

// `Это собственное свойство объекта`
// `Это свойство на объекте-прототипе`


// Алгоритм поиска свойства в цепочке прототипов:
// 1. Поиск начинается в собственных свойствах
// 2. Если свойства нет в собственных, поиск переходит к цепочке прототипов
// 3. Поиск прекращается при первом совпадении(есть такое свойство)
// 4. Возвращается значение свойства