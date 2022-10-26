
// Напиши скрипт который считает сумму эл-тов двух массивов

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }

// console.log(total);


const numbers = array1.concat(array2, [1, 2, 3], [34, 53, 90]);

console.table(numbers);

for (const number of numbers) {
    total += number;
}

console.log(total);
