


let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);

// console.log(result);

// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:    ', elementWidth);



let elementHeigth = '200.74px';
// elementHeigth = Number.parseFloat(elementHeigth);
// console.log('elementHeigth:   ', elementHeigth);



let salary = 1300.16472;
// salary = salary.toFixed(4)
// salary = Number(salary);

// console.log(salary); 



let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity))
// console.log(Number(value));
// console.log(Number(5/0))



// console.log(Math.PI);

// const base = 4;
// const power = 3;

// const result = Math.pow(base, power);

// console.log(2 ** 3);



// Напиши скрипт, который просит пользователя ввести число и степень,
// возводит число в эту степень и выводит рез-т в консоль

// 1. попросить ввести число и сохранить в переменную

// let base = prompt('Давай число');
// base = Number(base);

// console.log(base);

// 2. попросить ввести степень и сохранит в переменную

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

// 3. возвести введенные данные в степень и вывести

// const result = base ** power;

// console.log(result);



// const max = 19;
// const min = 14;

// const result = Math.random() * (max - min) + min;

// console.log(result);



const colors = ['tomato', 'teal', 'orange', 'deeppink'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;



