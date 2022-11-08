
// Функция результатом своей работы может возвращать другую функцию
            // ЗАМЫКАНИЕ

// Возвращаемая функция во время вызова будет иметь доступ ко всем
// локальным переменным(области видимости) родительской функции
// (той из которой ее вернули), это называется ЗАМЫКАНИЕ


const fnA = function (parameter) {
    const innerVariable = `значение внутренней переменной функции fnA`;

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log(`Это вызов innerFunction`)
    }
    
    return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);



// Поваренок

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish(`Mango`, `пирожок`);
// makeDish(`Mango`, `омлет`);
// makeDish(`Mango`, `чай`);

// makeDish(`Poly`, `котлеты`);
// makeDish(`Poly`, `супик`);
// makeDish(`Poly`, `кофе`);

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
}

// const mango = makeSheff(`Mango`);

// console.dir(mango);

// mango(`котлеты`);
// mango(`пирожок`);

// const poly = makeSheff(`Poly`);
// poly(`чай`);
// poly(`омлет`);




// Округлятор

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// }

// console.log(rounder(7.28374, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(7.28374));
// console.log(rounder3(7.28374));

// console.dir(rounder2);


// function rounder(places) {
//     return function (num) {
//         return Number(num.toFixed(places));
//     };
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// rounder2(floatingPoint);
// rounder3(floatingPoint);



// Приватные данные и функции - скрытые реализации, интерфейс

const salaryManagerFactory = function (employeeName, baseSalary) {
    let salary = baseSalary;

    const changeBy = function (amount) {
        salary += amount;
    };

    return {
        raise(amount) {
            changeBy(amount);
        },
        lower(amount) {
            changeBy(amount);
        },
        current() {
            return `Текущая зарплата ${employeeName} - ${salary}`;
        },
    };
};

// const myLibFactory = function () {
//     let value = 0;

//     const add = function () {
//         value += num;
//     }

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());

