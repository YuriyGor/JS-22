
// Контекст стрелки

// Контекст внутри стрелки определяется местом ее объявления, а не вызова
// и ссылается на контекст родительской функции.


// const showThis = () => {
//     console.log(`this in showThis: `, this);
// };

// showThis();

// const user = { name: `Mango` };
// user.showContext = showThis;

// user.showContext();


// const user = {
//     fullName:`Mango`,
//     showName() {
//         console.log(`this: `, this);
//         console.log(`this.fullName: `, this.fullName);

//         const inner = () => {
//             console.log(`this is inner: `, this);
//         };

//         inner();
//     },
// };

// user.showName();



// Стрелки как методы объекта  - НИКОГДА НЕ ИСПОЛЬЗУЙТЕ СТРЕЛКИ КАК МЕТОДЫ ОБЪЕКТА
// this:  undefined  - ВСЕГДА

// const user = {
//     fullName:`Mango`,
//     showName: () => {
//         console.log(`this: `, this);
//         console.log(`this.fullName: `, this.fullName);
//     },
// };

// user.showName();



// Стрелка-конструктор   СТРЕЛКА НЕ МОЖЕТ БЫТЬ КОНСТРУКТОРОМ (просто не существует)

// const User = name => {
//     this.name = name;
// };

// console.log(new User(`Mango`));



// еще разок стрелка как метод объекта (бесполезно)

const objA = {
    x: 5,
    showX() {
        console.log(`this в objA.showX: `, this);
        console.log(this.x);

        const objB = {
            y: 10,
            showThis: () => {
                console.log(`this в objB.showThis: `, this);
            },
        };

        objB.showThis();
    },
};

objA.showX();