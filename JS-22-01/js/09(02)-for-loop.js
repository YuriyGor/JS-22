
// Цикл for

// for (let i = 60; i < 75; i += 1) {
//     console.log(i);
// }

// console.log(`ghjfds`);




// Напиши скрипт, который подсчитывает общую сумму ЗП работников

// // 1. сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 14;
// let totalSalary = 0;

// // 2. перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3. сгенерить случайную ЗП
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`ЗП работника номер ${i} - ${salary}`);
//   // 4. прибавить к ТОТАЛу
//   totalSalary += salary;
// }
// // 5. лог
// console.log(`totalSalary: `, totalSalary);



// Напиши скрипт, который подсчитывает сумму всех четных чисел

// 1. вары
const min = 0;
const max = 10;
let total = 0;

// фор от мин до макс с шагом в 1

for (let i = min; i <= max; i += 1) {
    // проверяем остаток от деления
    if (i % 2 !== 0) {
        console.log(`Не четное: `, i);
        continue;
    }
    // пишет в сумму
    console.log(`четное: `, i);
    total += i;
}

console.log(`total: `, total);