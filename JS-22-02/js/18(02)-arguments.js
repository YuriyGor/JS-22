
// Псевдомассив arguments и Array.from и ...


// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);
    
//     // for (const arg of arguments) {
//     //     console.log(arg);
//     // }
//     }

// fn(1, 2, 3, 4, 5, 6, 7);


// const fn = function (...args) {
//     console.log(args);
// };

// fn(9, 8, 7, 6, 5);


// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// };

// fn(`hello`, 9, 8, 7, 6, 5);




// Напиши функцию add для сложения произвольного кол - ва аргументов(чисел)
//     - Операция   ...(rest)

// const add = function (...args) {
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }
 
//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));




// Напиши функцию filterNumbers(array[, number1, ...]) которая:
//   - первым аргументом принимает массив чисел
//     - после первого аргумента м.б.произвольное кол - во других аргументов
// которые будут числами
//     - функция должна вернуть новый массив, в котором будут только те аргументы,
// начиная со второго, для которых есть аналог в оригинальном массиве

const filterNumbers = function (array, ...args) {
    console.log(`array: `, array);
    console.log(`args: `, args);

    const uniqueElements = [];

    for (const element of array) {        
        if (args.includes(element)) {
            uniqueElements.push(element);
            console.log(`${element} есть везде!`);
        }
    }
    return uniqueElements;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
