
// Напиши функцию findSmallestNumber(numbers) для поиска самого маленького числа
// в массиве при условии, что числа уникальные(не повторяются)


const findSmallestNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }

    return smallestNumber;
};

console.log(findSmallestNumber([4, 7, 34, 9, -3, 0, -76, 76]));
console.log(findSmallestNumber([4, 7, 34, 9, 76]));