
// Array.prototype.forEach(callback(currentValue, index, array), thisArg)
//     - поэлементно перебирает оригинальный массив
//     - ничего не возвращает
//     - заменяет классический for, если не нужно прерывать цикл


const numbers = [5, 10, 15, 20, 25];


numbers.forEach(function (number) {
    console.log(`number`, number);   
});

console.log(numbers);